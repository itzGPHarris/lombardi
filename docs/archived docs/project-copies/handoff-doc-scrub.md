# Handoff: scrub every Lombardi document to match fixtures v3.6

## What I need from this session

The design pass is finished. Story fixtures version 3.6 is the source of truth for where MVP is going, and the latest wireframes match it. I need every other project document brought into line with it in one pass, so the team can start the build. Work through the documents in the order below, deliver each one as a file I can download, and save each one to the project.

Don't reopen design decisions. If a document contradicts version 3.6, version 3.6 wins. If something is truly undecided, log it in the issues file rather than settling it in prose. Make correction passes on the existing documents rather than writing them from scratch, so that decisions already in them survive.

## Inputs

- **Story fixtures v3.6** is saved in this project as `claude/story-fixtures-v3.6.md`. Read it in full first. Its Appendix B lists every decision that still has to reach the spec and brief, and its change log, versions 3.0 to 3.6, records what changed and why.
- **The wireframes** are on my Mac at `~/Library/Mobile Documents/com~apple~CloudDocs/2026 Clients/MVP/Lombardi-wireframes`. Ask for access to that folder, then read `index`, `NOTES.md` and the flow map before writing about any screen. They are `.dc.html` pages, so where you cannot render one, read its markup and callouts.
- **The current project documents:** the creative brief, the product spec, `issues.csv`, `backlog.md` and the project instructions. The project instructions are pasted into the project settings rather than stored as a file, so I'll paste the current version in if you need it.

## The change in tooling

The team will build with OpenAI Codex, not Claude Code. Every document that says how the build works needs to change to match.

- Replace references to Claude Code as the build tool with Codex. Refer to the future hire as "the engineer", as before.
- `CLAUDE.md` becomes `AGENTS.md`, the file Codex reads for repository instructions. Write it fresh: what the repo is, the stack, where design values live, the commands to run, the rules that must never be broken (coach voice, no dates, nothing sent without the parent, copy comes only from the fixtures), and which documents are the source of truth.
- Remove anything specific to Claude tools from the build process, such as Figma MCP usage notes written for Claude. Keep Figma itself as the design source. If Codex needs design context from Figma, say how the engineer gets it rather than assuming a tool.
- The stack doesn't change: React and Vite on Netlify, plain CSS modules with tokens in `src/tokens.css`, lucide-react, and Fraunces, Inter and JetBrains Mono through @fontsource. Check the stack against what I tell you before changing it.

## Decisions every document must reflect

These are settled in version 3.6. Each one should appear wherever it applies, and anything that contradicts one should be removed.

1. **No single shared Thursday.** Each family is shown across its week as a series of moments with IDs, such as C-03. The household switcher moves between moments.
2. **The demo has no calendar dates.** It shows days of the week only, the seed files hold no dates, and the prototype ignores the device clock. The real product will show dates, so the spec needs both rules, kept apart.
3. **The tabs are Today, Coach, Game plan, Team and Kids.** Settings sit behind the parent's monogram. Team holds the inner circle, the village and village groups. Kids holds child pages and school cards.
4. **Today shows only today.** Its title names the phase of the day, the day line shows only the weekday, and the coach card is the one thing on it that can concern another day.
5. **The game plan holds the whole week**, including routine items, with "This week's changes" at the top.
6. **The status model** is an owner (a name, "You" or "Nobody yet"), four statuses (Suggested, Asked, Yes, Can't), and two marks that can sit on any item (Changed and Conflict). Nothing is ever shown as settled.
7. **Requests reach people in three ways:** a card in their own MVP, a text with a link for someone without MVP, or a handoff to another app. Every message is written in the parent's own voice, and she sends it herself.
8. **There are four capture entry points:** the share menu, a forwarding address, the camera and voice. The coach handles one-off events, recurring rules and reference differently, and every captured item carries a source link.
9. **School cards live on the Kids tab.** The coach keeps them current from captures, marks changes and keeps the history.
10. **Onboarding is fifteen screens in three parts, as set out in version 3.6 section 2.** The welcome and children screens come before the first capture, the step counter shows 01 to 04 on setup only, and onboarding ends with the coach's introduction before Today. This changes the wording of the locked onboarding decision, so it's flagged for Heather's sign-off.
11. **The coach card's visual signal is undecided.** Remove the rule that saffron appears once per screen until it is settled, and log it as an open decision.
12. **Onboarding and setup headlines are set in Fraunces as display type.**

## Order of work

1. **The project instructions.** Rewrite them for the new state: the Codex build, the new navigation, the people model, the no-dates rule, the moment-based demo and the current document list. Keep the writing rules and the coach voice rules exactly as they are. Give me the text to paste into the project settings.
2. **The creative brief.** Update it in its six-section format. The core-functionality and user-flow sections will change most. Mark anything that needs Heather's sign-off.
3. **The product spec.** Update it in its existing format, with numbered sections, field tables, behavior notes, standing decisions and open conditions for each section, the change log in Appendix A and the roadmap in Appendix B. Add sections for capture, the Kids tab and school cards, onboarding, and requests. Every Appendix B item in the fixtures that says "needs to go into the spec" must be covered. Each spec section should name the wireframe screens it describes.
4. **`issues.csv`.** Close the issues that version 3.6 resolves, with the fix in the Fix column. Add a row for every open item that remains in fixtures Appendix B and in the latest `NOTES.md`. Keep the columns as they are: ID, Section, Priority, Status, Source, Where, Now, Expected and Fix.
5. **`backlog.md`.** Rebuild the build order for Codex. It should refer only to issue IDs, spec sections and F-numbers, and status stays in the issues file.
6. **`AGENTS.md` and the README.** Write `AGENTS.md` for Codex as described above, and update the README for the engineer who inherits the repository.
7. **A final check.** Read every updated document against the fixtures and the wireframes. Report anything that still disagrees, and any text that breaks the writing rules.

## How to write

The project's writing rules apply to every document. Use complete sentences and connected paragraphs. Avoid fragments, slogans and teaser phrasing, and anything that reads as generated. Start each document and each report with a summary, then the detail. Deliver every document as a file and save it to the project, and keep a change-log entry in each document for this pass.
