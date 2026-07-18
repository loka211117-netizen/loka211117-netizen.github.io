import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = ["index.html", "styles.css", "app.js"];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) throw new Error(`Missing required file: ${file}`);
}

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "app.js"), "utf8");

const requiredHtml = [
  "Individual English Platform",
  "Master usable English.",
  "University English",
  "Gaokao English",
  "TCM English",
  "IELTS",
  "Hide translations",
  "British English",
  "Word check",
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
  if (!html.includes(text)) throw new Error(`Missing platform copy: ${text}`);
}

for (const text of ["IELTS 7 Lab", "assets/ielts-study-desk.png"]) {
  if (html.includes(text)) throw new Error(`Old IELTS-only artifact still present: ${text}`);
}

if (html.includes("一個給大學英語")) {
  throw new Error("Homepage copy should not lead with a long Chinese explanation");
}

for (const token of [
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
]) {
  if (!js.includes(token)) throw new Error(`Missing app behavior token: ${token}`);
}

if ((js.match(/word:/g) || []).length < 50) throw new Error("Expected at least 50 vocabulary items");
if ((js.match(/paragraph:/g) || []).length < 12) throw new Error("Expected at least 12 templates");

for (const token of [
  "@media",
  ".workspace",
  ".word-card",
  ".template-card",
  ".quiz-card",
  ".sound-button",
  "linear-gradient",
  "#7c3aed",
  "backdrop-filter"
]) {
  if (!css.includes(token)) throw new Error(`Missing visual system token: ${token}`);
}

console.log("Individual English Platform static checks passed.");
