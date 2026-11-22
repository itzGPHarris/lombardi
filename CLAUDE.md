# CLAUDE.md

This file is for Claude working in the MVP repository. The build rules live in `AGENTS.md`, which applies to whoever writes code here, and it is imported below so there is one copy of those rules rather than two.

*Current versions: story fixtures 3.49, spec 0.50. Last updated November 21, 2026.*

@AGENTS.md

If the platform you are on does not follow `@` imports, read `AGENTS.md` before doing anything else.

## Building the alpha

Claude Code running Claude Opus 5.5 is the build agent for the alpha (issue C57). Each stage runs in a fresh session started from the repository root: run `/clear` between stages, check with `/context` that this file and `AGENTS.md` loaded, start in plan mode, and paste the stage's prompt from `docs/stage-prompts.md`. Leave effort at its default unless Greg changes it.

## Document and design work

Document and design work, such as passes on the fixtures and spec, the screen map, the stage prompts, wireframe prompts and the Figma boards, happens in the "MVP - Lombardi" project on claude.ai, not in Claude Code. In this repository Claude works as the build agent, under `AGENTS.md`. When the build shows that a document is wrong, add a row to `docs/issues.csv` and tell Greg, rather than editing the document.

## What the settings enforce

`.claude/settings.json` pre-approves the commands a stage needs: `npm run` scripts, the tests, lint, `npm install` with no new package, and git commands that read, stage, commit and branch. It blocks pushing, hard resets, `git clean`, rebasing, deleting branches and `rm -rf`, reading `archive/` and `docs/archived docs/`, and editing the spec, the fixtures, the brief, the screen map, the stage prompts, `src/tokens.css`, this file, `AGENTS.md` and `.claude/`. A new package needs Greg's approval when it is installed. If a blocked action seems necessary, stop and say why, because Greg pushes, merges and changes the documents himself.

Trust the system's current date. The demo calendar inside the prototype is a separate thing and never follows the real clock.
