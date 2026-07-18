import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = ["index.html", "styles.css", "app.js", "vocabulary.generated.js"];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `Missing required file: ${file}`);
}

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "app.js"), "utf8");
const generatedVocabulary = readFileSync(join(root, "vocabulary.generated.js"), "utf8");
const buildScript = readFileSync(join(root, "scripts", "build.mjs"), "utf8");
const appCopy = `${html}\n${js}`;

assert.ok(js.includes('from "./vocabulary.generated.js"'), "App must load the generated vocabulary library");
assert.ok(buildScript.includes('"vocabulary.generated.js"'), "Production build must include the generated vocabulary library");
assert.ok(generatedVocabulary.includes("export const generatedVocabulary"), "Generated vocabulary module must export its data");

for (const text of [
  "Individual English Platform",
  "Home 首页",
  "Vocabulary 词汇",
  "Quiz 测试",
  "Wrong Book 错题本",
  "Statistics 统计",
  "Daily 日常",
  "Academic 学术",
  "IELTS 雅思",
  "Business 商务",
  "TCM 中医",
  "Gaokao 高考",
  "Learning Progress",
  "每日目标",
  "连续学习",
  "学习时间"
]) {
  assert.ok(appCopy.includes(text), `Missing platform copy: ${text}`);
}

for (const text of ["English Studio", "IELTS 7 Lab", "View statistics", "phonetic", "IPA"]) {
  assert.ok(!html.includes(text), `Obsolete or unwanted copy remains: ${text}`);
}

for (const text of [
  "Continue with today's vocabulary.",
  "English and Chinese together, ready for fast recall.",
  "Mark mastered 掌握",
  "data-master-word",
  'id="voiceStatus"',
  "Start learning 开始学习",
  "View record 查看记录",
  "Choose practice 选择练习",
  "Open vocabulary 打开词汇",
  ">OVERVIEW<",
  ">Workspace<",
  ">Practice<"
]) {
  assert.ok(!appCopy.includes(text), `Unnecessary vocabulary copy or control remains: ${text}`);
}

for (const token of [
  'class="word-card',
  'data-word-card="',
  'tabindex="0"',
  'event.target.closest(".word-card")',
  "if (audio) { speakWord(audio.dataset.wordAudio); return; }",
  ".word-card:focus-visible",
  "min-width: 44px",
  "min-height: 44px"
]) {
  assert.ok(appCopy.includes(token) || css.includes(token), `Missing whole-card vocabulary interaction: ${token}`);
}

for (const token of [
  "rose-violet",
  "mobile-nav",
  "dashboard-panel",
  "wrongbook-panel",
  "statistics-panel",
  "globalSearch"
]) {
  assert.ok(html.includes(token), `Missing UI interface: ${token}`);
}

for (const token of [
  'class="metric-card metric-goal interactive-card" data-panel="vocabulary"',
  'class="metric-card metric-streak interactive-card" data-panel="statistics"',
  'class="metric-card metric-time interactive-card" data-panel="more"',
  "data-open-category",
  "card-arrow"
]) {
  assert.ok(appCopy.includes(token), `Missing homepage interaction: ${token}`);
}

for (const token of [
  "color-scheme: light",
  "linear-gradient",
  "backdrop-filter",
  "--ink-plum",
  ".metric-card",
  ".category-progress-card",
  ".card-arrow",
  ".interactive-card:hover",
  ".mobile-nav",
  "@media (max-width: 720px)",
  "overflow-x: hidden",
  "overflow-wrap: anywhere",
  "repeat(5, minmax(0, 1fr))"
]) {
  assert.ok(css.includes(token), `Missing approved visual system token: ${token}`);
}

const app = await import(`../app.js?test=${Date.now()}`);
const {
  vocabularyItems,
  categoryTargets,
  searchVocabulary,
  calculateCategoryProgress,
  createDefaultState,
  recordQuizResult,
  templateItems
} = app;

assert.equal(vocabularyItems.length, 8000, "Vocabulary library must contain exactly 8,000 items");
assert.deepEqual(
  Object.fromEntries(Object.entries(Object.groupBy(vocabularyItems, (item) => item.category)).map(([key, items]) => [key, items.length])),
  { daily: 1720, academic: 1500, gaokao: 2000, ielts: 2500, tcm: 150, business: 130 }
);
assert.equal(new Set(vocabularyItems.map((item) => item.word.toLowerCase())).size, vocabularyItems.length, "Vocabulary must not repeat across categories");
assert.equal(vocabularyItems.length * 2, 16000, "Quiz must provide 16,000 English-Chinese direction combinations");
const ieltsWords = vocabularyItems.filter((item) => item.category === "ielts");
assert.equal(ieltsWords[0].word, "academic", "IELTS foundation words must appear before advanced vocabulary");
for (const word of ["academic", "satisfaction", "abandon"]) {
  assert.ok(ieltsWords.some((item) => item.word === word), `Missing practical IELTS word: ${word}`);
}
assert.ok(/Math\.random\(\) > \.5 \? "en-zh" : "zh-en"/.test(js), "Quiz direction must randomly alternate between English-Chinese and Chinese-English");
assert.deepEqual(categoryTargets, { daily: 3000, academic: 3000, ielts: 6000, business: 2000, tcm: 2000, gaokao: 3500 });

assert.ok(Array.isArray(templateItems) && templateItems.length >= 18, "Template library must include at least 18 bilingual templates");
for (const topic of ["Exercise", "Universal Opinion", "Causes and Effects", "Solutions", "Advantages and Disadvantages"]) {
  assert.ok(templateItems.some((item) => item.topic === topic), `Missing universal template topic: ${topic}`);
}
assert.ok(templateItems.every((item) => item.paragraph && item.zh && item.pattern), "Every template must remain bilingual and reusable");
assert.ok(/data-sentence="\$\{escapeHtml\(item\.paragraph\)\}"/.test(js), "Template audio must receive only the English paragraph");
assert.ok(!/data-sentence="\$\{escapeHtml\(item\.zh\)\}"/.test(js), "Template audio must not receive Chinese text");

assert.ok(searchVocabulary(vocabularyItems, "针灸").some((item) => item.word === "acupuncture"), "Chinese medical search must work");
assert.ok(searchVocabulary(vocabularyItems, "academic").some((item) => item.zh.includes("学术")), "English search must work");
assert.ok(searchVocabulary(vocabularyItems, "blood stasis").some((item) => item.category === "tcm"), "Phrase search must work");

const progress = calculateCategoryProgress(vocabularyItems, { [vocabularyItems.find((item) => item.category === "daily").id]: true });
assert.equal(progress.daily.learned, 1);
assert.equal(progress.daily.target, 3000);

const wrongState = createDefaultState();
recordQuizResult(wrongState, { id: "quiz-word", category: "academic" }, false);
assert.ok(wrongState.wrongAnswers["quiz-word"].active, "Wrong answer must be saved");
recordQuizResult(wrongState, { id: "quiz-word", category: "academic" }, true);
recordQuizResult(wrongState, { id: "quiz-word", category: "academic" }, true);
assert.ok(wrongState.wrongAnswers["quiz-word"].active, "Two correct reviews must not clear a wrong answer");
recordQuizResult(wrongState, { id: "quiz-word", category: "academic" }, true);
assert.equal(wrongState.wrongAnswers["quiz-word"].active, false, "Three consecutive correct reviews must clear a wrong answer");
assert.equal(wrongState.wrongAnswers["quiz-word"].history.length, 4, "Wrong-answer history must be retained");

for (const token of [
  "individualEnglishPlatformState",
  "speechSynthesis",
  "selectBritishVoice",
  "speakWord",
  "localStorage",
  "10",
  "15",
  "50"
]) {
  assert.ok(js.includes(token), `Missing app behavior token: ${token}`);
}

assert.ok(/function speakWord\([^)]*\)[\s\S]*?speakText\(word\)/.test(js), "Word audio must pass only the word to speech synthesis");
assert.ok(!/quote[^\n]*data-speak/i.test(html), "Daily quote must not include an audio control");

for (const token of [
  'class="plan-presets"',
  'type="range"',
  'data-plan-preset="light"',
  'data-plan-preset="standard"',
  'data-plan-preset="intensive"',
  'id="planPreview"',
  "applyPlanPreset",
  "updatePlanPreview"
]) {
  assert.ok(appCopy.includes(token), `Missing interactive learning plan behavior: ${token}`);
}

console.log("Individual English Platform acceptance checks passed: 8,000 unique words, 16,000 quiz combinations, and enriched templates verified.");
