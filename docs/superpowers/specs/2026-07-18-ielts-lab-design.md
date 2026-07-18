# IELTS Lab Design

## Goal
Build an independent English IELTS practice platform in `C:\Users\me codex2\Documents\ENG platform`, separated from the TCM planning site.

## Approach
Use a dependency-free static site so it works immediately by opening `index.html`. The first screen is the actual study workspace, not a landing page.

## Scope
- Listening links and reflection checklist.
- Reading short passage with questions and answer reveal.
- Writing task frame, four-sentence essay templates, reusable sentence bank, and draft saving.
- Speaking Part 1/2/3 prompt bank, timer, and answer notes.
- Progress area backed by `localStorage`.

## Visual Direction
Quiet study-tool interface with ink text, white panels, green focus accents, amber status marks, and a generated study visual asset. Avoid the old dashboard feel and avoid long motivational copy.

## Verification
Add a small Node-based static test that checks required files, IELTS sections, templates, localStorage usage, and expected visible copy.
