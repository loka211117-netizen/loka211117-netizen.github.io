import csv
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "output" / "ecdict.csv"
OUTPUT = ROOT / "vocabulary.generated.js"
APP = ROOT / "app.js"

TARGETS = {"daily": 1720, "academic": 1500, "ielts": 2500, "business": 130, "tcm": 150, "gaokao": 2000}
# Subject-specific lists keep their curated manual vocabulary. IELTS and Gaokao
# take priority; Daily fills the remaining high-frequency general vocabulary.
CATEGORY_ORDER = ("tcm", "business", "ielts", "gaokao", "academic", "daily")
WORD_RE = re.compile(r"^[a-z][a-z -]*$")
CHINESE_RE = re.compile(r"[\u3400-\u9fff]")


def existing_words():
    source = APP.read_text(encoding="utf-8")
    blocks = re.findall(
        r"^\s{2}(daily|academic|gaokao|ielts|tcm|business): `\n(.*?)\n`\.trim\(\)",
        source,
        re.MULTILINE | re.DOTALL,
    )
    categories = {}
    for category, block in blocks:
        pairs = []
        for line in block.splitlines():
            if "|" not in line:
                continue
            word, translation = line.split("|", 1)
            pairs.append((word.strip(), translation.strip()))
        categories[category] = pairs
    return categories


def concise_translation(value):
    if not value:
        return ""
    senses = []
    for line in value.replace("\\n", "\n").splitlines():
        if line.lstrip().startswith("["):
            continue
        line = re.sub(r"^[a-zA-Z /.,;:-]+(?=[\u3400-\u9fff])", "", line.strip())
        line = re.sub(r"\[[^\]]*\]", "", line)
        line = re.sub(r"（[^）]{12,}）", "", line)
        line = line.replace("|", "；").replace("`", "'")
        parts = [part.strip(" ,，;；") for part in re.split(r"[,，；;]", line) if CHINESE_RE.search(part)]
        if parts:
            sense = parts[0][:18].strip()
            if sense and sense not in senses:
                senses.append(sense)
        if len(senses) == 2:
            break
    return "；".join(senses)


def rank(row):
    values = []
    for key in ("bnc", "frq"):
        try:
            value = int(row.get(key) or 0)
        except ValueError:
            value = 0
        if value > 0:
            values.append(value)
    return min(values) if values else 999999


def is_base_form(word, exchange):
    match = re.search(r"(?:^|/)0:([^/]+)", exchange or "")
    return not match or match.group(1).strip().lower() == word


def candidate(row):
    word = (row.get("word") or "").strip().lower()
    translation = concise_translation(row.get("translation") or "")
    if not (2 <= len(word) <= 32 and WORD_RE.fullmatch(word)):
        return None
    if len(word.split()) > 3 or "  " in word:
        return None
    if not is_base_form(word, row.get("exchange") or ""):
        return None
    if not translation or not CHINESE_RE.search(translation):
        return None
    tags = set((row.get("tag") or "").split())
    common = bool(tags & {"zk", "gk", "cet4"})
    academic = bool(tags & {"cet6", "ky", "toefl"})
    try:
        collins = int(row.get("collins") or 0)
    except ValueError:
        collins = 0
    score = (
        0 if common else 1,
        0 if row.get("oxford") else 1,
        -collins,
        rank(row),
        len(word.split()),
        len(word),
        word,
    )
    return {"word": word, "translation": translation, "tags": tags, "academic": academic, "score": score}


def accepts(category, item):
    if category == "ielts":
        return "ielts" in item["tags"]
    if category == "gaokao":
        return "gk" in item["tags"]
    if category == "academic":
        return item["academic"] and "gk" not in item["tags"]
    if category == "daily":
        return True
    return False


def category_score(category, item):
    if category == "academic":
        return (
            0 if item["tags"] & {"toefl", "ky"} else 1,
            0 if "cet6" in item["tags"] else 1,
            item["score"],
        )
    if category == "daily":
        return (
            item["score"][3],
            item["score"][1],
            item["score"][2],
            item["score"][4:],
        )
    return item["score"]


def main():
    manual = existing_words()
    candidates = []
    with SOURCE.open("r", encoding="utf-8-sig", newline="") as handle:
        for row in csv.DictReader(handle):
            item = candidate(row)
            if item:
                candidates.append(item)

    used = set()
    generated = {category: [] for category in CATEGORY_ORDER}
    for category in CATEGORY_ORDER:
        manual_unique = []
        for word, translation in manual[category]:
            key = word.lower()
            if key not in used:
                manual_unique.append((word, translation))
                used.add(key)
        required = TARGETS[category] - len(manual_unique)
        if required < 0:
            raise RuntimeError(f"{category}: manual vocabulary exceeds target")
        pool = sorted((item for item in candidates if accepts(category, item)), key=lambda item: category_score(category, item))
        selected = generated[category]
        for item in pool:
            if item["word"] in used:
                continue
            selected.append((item["word"], item["translation"]))
            used.add(item["word"])
            if len(selected) == required:
                break
        if len(selected) != required:
            raise RuntimeError(f"{category}: needed {required}, found {len(selected)}")

    lines = ["// Generated from ECDICT exam tags. Run scripts/generate_vocabulary.py to refresh.", "export const generatedVocabulary = {"]
    for category in CATEGORY_ORDER:
        lines.append(f"  {category}: `")
        lines.extend(f"{word}|{translation}" for word, translation in generated[category])
        lines.append("`.trim(),")
    lines.append("};")
    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print({category: len(items) for category, items in generated.items()})


if __name__ == "__main__":
    main()
