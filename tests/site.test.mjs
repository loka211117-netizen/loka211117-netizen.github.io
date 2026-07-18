import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = ["index.html", "styles.css", "app.js"];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "app.js"), "utf8");

const requiredHtml = [
  "Individual English Platform",
  "大学英语",
  "高考英语",
  "中医英语",
  "IELTS",
  "模板库",
  "发音",
  "单词测试",
  "Vocabulary",
  "Sentence Patterns",
  "Template Library",
  "Reading",
  "Writing",
  "Speaking",
  "Tests",
  "Progress"
];

for (const text of requiredHtml) {
  if (!html.includes(text)) {
    throw new Error(`Missing platform copy: ${text}`);
  }
}

const forbiddenHtml = ["IELTS 7 Lab", "assets/ielts-study-desk.png"];
for (const text of forbiddenHtml) {
  if (html.includes(text)) {
    throw new Error(`Old IELTS-only artifact still present: ${text}`);
  }
}

const requiredJs = [
  "individualEnglishPlatformState",
  "speechSynthesis",
  "selectBritishVoice",
  "vocabularyItems",
  "templateItems",
  "quizItems",
  "renderVocabulary",
  "renderTemplates",
  "renderQuiz",
  "checkQuizAnswer",
  "localStorage"
];

for (const token of requiredJs) {
  if (!js.includes(token)) {
    throw new Error(`Missing app behavior token: ${token}`);
  }
}

const vocabularyCount = (js.match(/word:/g) || []).length;
if (vocabularyCount < 50) {
  throw new Error(`Expected at least 50 vocabulary items, found ${vocabularyCount}`);
}

const templateCount = (js.match(/paragraph:/g) || []).length;
if (templateCount < 12) {
  throw new Error(`Expected at least 12 templates, found ${templateCount}`);
}

const requiredCss = ["@media", ".workspace", ".word-card", ".template-card", ".quiz-card", ".sound-button"];
for (const token of requiredCss) {
  if (!css.includes(token)) {
    throw new Error(`Missing responsive/style token: ${token}`);
  }
}

console.log("Individual English Platform static checks passed.");
