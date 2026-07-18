import csv
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "output" / "ecdict.csv"
OUTPUT = ROOT / "vocabulary.generated.js"
APP = ROOT / "app.js"

TARGETS = {"ielts": 2000, "gaokao": 750, "academic": 750}
CATEGORY_ORDER = ("ielts", "gaokao", "academic")
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
    return item["academic"] and "gk" not in item["tags"]


def main():
    manual = existing_words()
    used = {word.lower() for pairs in manual.values() for word, _ in pairs}
    candidates = []
    with SOURCE.open("r", encoding="utf-8-sig", newline="") as handle:
        for row in csv.DictReader(handle):
            item = candidate(row)
            if item:
                candidates.append(item)

    generated = {}
    for category in CATEGORY_ORDER:
        required = TARGETS[category] - len(manual[category])
        pool = sorted((item for item in candidates if accepts(category, item)), key=lambda item: item["score"])
        selected = []
        for item in pool:
            if item["word"] in used:
                continue
            selected.append((item["word"], item["translation"]))
            used.add(item["word"])
            if len(selected) == required:
                break
        if len(selected) != required:
            raise RuntimeError(f"{category}: needed {required}, found {len(selected)}")
        generated[category] = selected

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
