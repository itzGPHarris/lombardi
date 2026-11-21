# CLAUDE.md

This file is for Claude working in the MVP repository. The build rules live in `AGENTS.md`, which applies to whichever build agent writes code here, and it is imported below so there is one copy of those rules rather than two.

*Current versions: story fixtures 3.48, spec 0.47. Last updated November 20, 2026.*

@AGENTS.md

If the platform you are on does not follow `@` imports, read `AGENTS.md` before doing anything else.

## Document and design work

When Greg asks for work on the documents, the wireframe prompts or the Figma library and boards rather than on code, use the `lombardi-docs` skill in `.claude/skills/lombardi-docs/`. It carries the instructions from the "MVP - Lombardi" project on claude.ai, including when the documents may be edited, how a fixtures pass is written, the Figma file keys and how to work with Greg. It is kept out of this file because every session loads this file, and a build session needs only the build rules. On a platform without skills, read `.claude/skills/lombardi-docs/SKILL.md` before starting document or design work.

Trust the system's current date. The demo calendar inside the prototype is a separate thing and never follows the real clock.
