# Eight Thousand Vocabulary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the learning platform to 8,000 globally unique, useful vocabulary items while improving templates and preserving the existing learning workflow.

**Architecture:** Keep the existing static JavaScript application. Generate category-specific additions from ECDICT exam tags and frequency data, then apply one global de-duplication pass in the app before assigning stable item IDs. Keep manual TCM and business terms as curated content; add templates as structured objects in `app.js`.

**Tech Stack:** Static HTML/CSS/JavaScript, Node test runner, Python CSV generator, GitHub Pages.

## Global Constraints

- Target exactly 8,000 unique English words or phrases.
- Targets: IELTS 2,500; Gaokao 2,000; Academic 1,500; Daily 1,720; TCM 150; Business 130.
- Quiz direction remains randomly English-to-Chinese or Chinese-to-English.
- Speech synthesis receives English text only.
- Templates remain bilingual and must add universal and exercise topics.

---

### Task 1: Enforce global vocabulary uniqueness

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `app.js`

- [ ] Write failing tests for 8,000 total items, category counts, and no duplicate English words across categories.
- [ ] Run `node --test tests/site.test.mjs` and confirm the current 4,000-item library fails.
- [ ] Implement global de-duplication with deterministic category ordering and stable IDs.
- [ ] Re-run the test suite and confirm it passes.

### Task 2: Generate high-frequency vocabulary additions

**Files:**
- Modify: `scripts/generate_vocabulary.py`
- Modify: `vocabulary.generated.js`

- [ ] Generate enough filtered IELTS, Gaokao, Academic, and Daily candidates to fill post-de-duplication targets.
- [ ] Verify generated entries have English, concise Chinese translation, and no duplicate English words.
- [ ] Re-run the test suite and confirm the full 8,000-item target passes.

### Task 3: Expand templates and retain English-only speech

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `app.js`

- [ ] Write failing tests for universal templates, exercise templates, bilingual copy, and English-only speech controls.
- [ ] Add short bilingual template entries for exercise, health, opinion, causes-effects, advantages-disadvantages, and solutions.
- [ ] Re-run tests and confirm template rendering and speech constraints pass.

### Task 4: Build and publish

**Files:**
- Modify: `scripts/build.mjs` if needed
- Test: `tests/site.test.mjs`

- [ ] Run tests and mobile browser checks for vocabulary filtering, random quiz direction, templates, and no horizontal overflow.
- [ ] Commit, push GitHub Pages, build the static archive, and deploy the existing public site.
- [ ] Verify the public GitHub Pages URL serves the 8,000-word data module.
