---
name: lombardi-docs
description: Instructions for document and design work on MVP (Lombardi), such as editing the story fixtures, spec, issues file, backlog or screen map, writing wireframe prompts, and working in the Figma library and boards. Use for any session in this repository that is not building or fixing code.
---

# Document and design work on MVP

This skill carries the instructions from the "MVP - Lombardi" project on claude.ai, so document and design work can continue in this repository without that project. It lives here rather than in `CLAUDE.md` so that build sessions load only the build rules in `AGENTS.md`. Those build rules still apply, and the first section below says where document work is allowed to differ from them.

*Current versions: story fixtures 3.48, spec 0.48. Last updated November 20, 2026.*

## Two kinds of work

Most sessions are one of two kinds, and the rules differ.

**Documents and design.** This is the work the claude.ai project did: writing and correcting the fixtures, the spec, the issues file, the backlog, the wireframe prompts and the Figma library and boards. Here you may edit `docs/spec.md`, `docs/story-fixtures.md`, `docs/screen-map.md` and the other documents, because Greg is directing the change in the session. `AGENTS.md` forbids the build agent from editing them, and that rule still holds for any unattended build run.

**Building.** When Greg asks you to build or fix code, you work exactly as `AGENTS.md` tells the build agent to: one backlog line per commit, copy only from the fixtures, a row in `docs/issues.csv` for every gap, and no edits to the spec or the fixtures in the same change. If the build shows that a document is wrong, say so and propose the correction as a separate step.

## What MVP is

Lombardi is the code name for the V2 build of MVP (Most Valuable Parent). The product name stays MVP, and "Lombardi" never appears in the product or in investor materials.

MVP is a planning app and a support system for busy parents. The parent gives MVP what arrives in her week, such as school emails, newsletters, handouts, messages from parents' groups, appointments and her own voice notes, and the coach turns it into a plan for the day and the week. The same coach answers the parenting questions she would otherwise take to Reddit or a Facebook group, using what it already knows about her family. Around her are two groups of people. Her circle is the people she trusts with her children and her private life, such as her partner, family, a nanny and the family's doctors, therapists and tutors. Her people are everyone else who shares her children's week, such as school parents, carpool families and coaches, and she talks with them in groups she creates inside MVP. She talks with her circle in private chats, with one person or several at once. MVP Editorial is MVP's own short articles, written by MVP staff, which appear on Today when something in her week makes one useful, or attached to a coach answer when she asks for ideas. On screen the coach is called the MVP Coach whenever MVP speaks about it, and the tab is still called Coach.

MVP is not a companion for kids. It is not a directory of camps, activities, service providers or products, although articles about choosing a camp or a stroller are in scope. It has no content tab, and no article appears without a reason tied to the parent's week. Staff recommendations can link to where a product is sold, in the manner of Wirecutter, but never through sponsored or affiliate links. The coach does not plan money, recommend providers or sitters, buy anything, or advise on custody, legal or medical questions, though it may suggest what to eat and where when the plan puts a meal on the road.

The goal of this phase is a web prototype that shows what MVP is and how it feels to use. Raising the funding round comes first, and the same prototype does several other jobs. It helps recruit the people who will build MVP, gives the media something concrete to see, gives the team a starting point for planning social channels, and goes in front of parents in user testing, where it shows which ideas work and which should be cut. It demonstrates MVP across four households, each shown across a stretch of its week as a series of moments with IDs, such as C-03 for Charlotte's third moment. Charlotte's household has two journeys: the demo week, C-00 to C-09, and the weekend she is away, C-10 to C-13 and C-15, with C-14 retired. Each household lives in its own invented town. After funding, the first hire is an engineer who takes over all development, so everything built here must be ready to hand over.

## Who is working here

Greg Harris, VP of Product, owns product, design and the prototype build. He makes design and build decisions, and vets and overrides earlier decisions.

Heather Hannan-Kramer, CEO, owns brand, audience, positioning (moms first) and investor relationships. She co-wrote the four user stories, signs off the creative brief, and reviews the app's vocabulary.

There is no engineering team yet. Refer to the future hire as "the engineer." Greg chose Claude Code, running Claude Opus 5.5, as the build agent for the alpha on November 20, 2026 (issue C57). Documents still call whoever writes the code "the build agent", so they stay true for the engineer who takes the build over.

## The documents

| Document | What it is |
| ----- | ----- |
| `docs/story-fixtures.md` | The source of truth for where MVP is going: each household, every moment, the exact words and data on screen, the type scale, every invented fact and why, and every open decision. Version 3.47 covers Charlotte and Edward only. Version 2.2 remains the reference for Calypso, Alexandra and Ben, and Marcus until their sections are rewritten. When another document disagrees with the fixtures, the fixtures win. |
| `docs/spec.md` | What to build and how we know it is done: numbered sections, field tables, behavior notes, standing decisions and open conditions at the end of each section, a change log in Appendix A and a roadmap with F-numbers in Appendix B. Each section names the wireframes it describes. |
| `docs/wireframes/` | Grayscale wireframes built from the fixtures in Claude Design, exported as numbered images with an onboarding flow map. Read together with the fixtures. The folder is not in the repository yet (issue C58). |
| `docs/brief.md` | Why, for whom and how the product should feel, in Greg's six-section UX brief format. Greg owns it and Heather signs it off. |
| `docs/screen-map.md` | Ties every screen to the one Figma frame it is built from, by frame ID, because the Figma file holds older frames with the same names on several pages. Every frame it lists sits on the page "Design - lombardi · post-review". |
| `docs/issues.csv` | Observed problems and open decisions, with the columns ID, Section, Priority, Status, Source, Where, Now, Expected and Fix. |
| `docs/backlog.md` | Build order only, referencing issue IDs, spec sections and F-numbers. Status lives in the issues file, never in the backlog. Its "Before the alpha" lists are the current plan, followed by the alpha stages. |
| Presenter script | Written once the prototype runs, so its timings can be measured. It refers to moments by their IDs and never copies the fixtures. |

How things enter the documents:

- A new feature idea gets an F-number in spec Appendix B before anything else happens to it.
- An observed problem or an undecided question gets a row in `docs/issues.csv` rather than being settled in prose.
- Ideas that don't serve one of the four stories are parked, not built.

### How a document changes

Changes are made as correction passes on what exists, never by regenerating a document.

- **Fixtures.** Claude keeps the full fixtures current. A change is still written first as a pass file, such as `fixtures-3.22-pass.md`, that quotes the current text and gives the replacement, section by section, with an Appendix C entry for the new version, because the pass is the record of what changed and why. Claude then applies the pass to the full fixtures in the same session, checks that every quoted passage was found exactly once, and writes the result over `docs/story-fixtures.md`. The version goes up by one minor step for each pass, and the version line inside the file says which one it is.
- **Spec.** The spec is edited directly in `docs/spec.md`. Each change bumps the version, updates the version line and the "Summary of this version" at the top, and adds an Appendix A entry listing each change by section and naming the issues it closes.
- **The docs folder holds only current documents.** No dated or versioned file, such as `spec-v0.22.md` or `story-fixtures-v3.22.md`, is kept in `docs/`, because two copies of a source of truth invite the build agent to read the wrong one. Pass files, dated copies of earlier versions and session reports go in `docs/archived docs/`, which the build agent never reads.
- **Issues.** Rows are appended or updated, never removed, so the history stays. A fix records the date and where it was made. Prefixes follow the spec's sections: C cleanup and documents, O onboarding, T Today, K Coach, A capture, G game plan, S requests, M Team, L Kids, R MVP Editorial, U Settings, V coach voice, W wireframes, X demo controls, D data, Y the playbook and P the Figma prototype's wiring. F always means the roadmap.
- **Backlog.** When an issue goes FIXED or CLOSED, its line leaves the backlog.
- **Followers.** When the fixtures or the spec change, check `AGENTS.md`, `README.md`, this file and any open wireframe prompt for the same wording, update them in the same session, and update their version lines.
- **Wireframe prompts.** Each pass is a prompt for Claude Design, written as a file ready to paste, that corrects existing screens in place, keeps every screen ID and the Next and Previous order, quotes the fixtures exactly and says why each change is made.

## Design: Hearth

Warm, editorial and quiet. Cream rather than white, ink rather than black, and cerulean as the anchor. The Figma library and `src/tokens.css` hold the values, and these are for reference: Canvas #F0ECE5, Card #F9F7F3, Control #FFFEFC, Cerulean for anything interactive #007198, with #004F6B when pressed and the tint #E1EEFC, and the ink ramp #151412, #2B2925, #4A4741, #6E6A62 and #C8C3B8. Children share one indigo, #22549A on #DDE5ED, adults are drawn in a gray outline, and the coach has one amber. Today alone uses canvas, for its sheet, and every other screen sits on card, with control filling any part that has no fill of its own. Saffron has no reserved role.

People are shown by kind. A child appears as a name chip, which is the first name in a filled pill, and "Both", "All three" and "Family" are the group chips. An adult who owns an item appears as an outlined initial, the parent as "You", and the coach as a solid amber dot. A person's answer to a request is their outlined initial and an icon: an hourglass for asked, a thumbs up for yes and a thumbs down for can't, with the words in the accessible label. Children never appear as initials, monograms or photographs, and the parent's monogram at the top right of a tab is the only monogram in the product.

The type scale has nine styles, set out in the fixtures' "Type" section: Display, Title, Subtitle, Voice, Body large, Body, Body strong, Meta and Label. Fraunces sets titles and headlines only, such as the large titles on tabs and pages, the onboarding and setup headlines, article titles and the time of the next departure, and later marketing and presentations. It never sets a paragraph or other running text. The coach is set in Inter everywhere: Voice in onboarding, Body large on the Today coach card and Body in the Coach tab. JetBrains Mono sets one thing, the labels the coach owns, such as the coach card's label and the day labels on the game plan's review card. The coach is marked by its dot, its tint and, on the review card, an amber outline, and by nothing else. The calendar mark sits before an item's text in a muted ink and is never a control. Now's pass is a tinted surface for the trip, not a card, and carries no chip, and each checklist group is headed by the child's name, such as "Mallory". There are no uppercase labels, no letter-spaced eyebrows and no fourth font.

No photography of people, no AI-generated imagery and no stock. Some articles carry spot illustrations drawn by people, and nothing else is illustrated. No pure white or pure black. Purposeful gradients are allowed, and decorative ones are not. "MVP" never travels alone in the wordmark, which always reads "Most Valuable Parent". The product must feel made by people, not generated, and this is a trust requirement rather than a style preference.

### Figma

| File | Key | Notes |
| ----- | ----- | ----- |
| `mvp-design-library` | `A3SHbWiO5cyRDtIZ9sNNz7` | The master library. Foundations page `0:1`, Icons `147:163`, Components `150:183`. The Hearth variable collection and the text styles live here. |
| `mvp-lombardi` | `RK2JTfwao4mV4JgUA193M1` | The boards. "Design - lombardi · post-review" (`2853:11893`) holds every board the build reads, named by fixtures ID, and `docs/screen-map.md` lists each one by frame ID. "Design - lombardi" (`2177:1136`) is the untouched baseline from before Heather's first wording review and is never edited. "Archive - not for build" holds superseded and unbuilt frames. |

When working in Figma, build from the library's published components and bind every value to a Hearth variable or text style. Make a new board on a separate drafts page, and move it to "Design - lombardi · post-review" only when Greg asks, because that page is what the build reads. A component added or changed in the library cannot be used in the boards until Greg publishes the library and accepts the update, so say when a publish is needed. Greg reviews the boards on "Design - lombardi · post-review" and marks them Ready for dev.

## Coach voice

These rules apply to every line the coach writes.

The coach is warm and direct, writes in the present tense, and speaks to the parent. It refers to children by name. It never uses conversational openers such as "Okay" or "Alright," never praises the parent, never describes what it has just done, and never uses em-dashes, sentence fragments, sets of three parallel phrases, planner jargon (window, slot, block, buffer, lane), or pronouns in place of a child's name. Nothing it writes should read as AI-written.

Plans tell the parent what to do, with specific places, ready-by times and what to bring. This is the benchmark:

> You need to be at the Northgate Aquatic Center with Lily, ready to go by 4:15pm this Tuesday. Benjamin has soccer at Cedar Field at 9:00am this Saturday. Bring snacks and warm clothes, it'll be chilly. That leaves you this Saturday afternoon to shop for the party gift.

A coach card on Today speaks in a line or two and makes one recommendation, with one button to accept it and "Other options", which opens the coach's Plan B and Plan C in the Leave sheet on Today. The full reasoning and every option belong on the Coach tab. When the coach asks for a fact, its button says what she adds, such as "Add the end time". After she answers, the card keeps the thread: the recommendation stays in muted ink, and beneath it the card shows either "Agreed" or the plan she chose beside a check, then the coach's follow-up, which says only what comes next. Links say what they do in a phrase, never a single word, and only the platform's own controls, Back, Close, Send, Save and Undo, stay one word.

When the coach adds something to her plan, its read-back states what is now in the plan, such as "Mallory's checkup this Friday at 3:30pm is in your plan, from your Google Calendar.", and never describes what the coach did.

Answers may explain, because a question deserves a reason as well as a suggestion. They lead with the most useful thing, give her something specific to try, and stay to four or five sentences. When she is struggling, the first sentence acknowledges it plainly, without sympathy phrases like "I hear you." Every answer shows the family details it was based on. The coach is an agent, a helper and one part of her support system. It is not a therapist, doctor or lawyer, and it names the right person when a question needs one.

Drafts to other people are written as the parent, in her own plain voice, because the people reading them are hearing from her. Articles are written by MVP staff in their own voice and follow only the rules against em-dashes and filler.

## How the plan works

Nothing in a plan is ever shown as settled. Every item has an owner, shown as a name, as "You" for the parent, or as "Needs an owner", and may carry one status (Suggested, asked, yes or can't) and two marks (Updated and "Conflict:" with the other item).

The coach adds to her plan what she has already committed to somewhere else: her own calendar events that take a child somewhere or decide when she can drive, changes to her children's school day, and the trips around an event when she is free to take them. It asks her only about proposals from other people, school events she would choose to attend, and choices that involve another person or a conflict. She agrees once on 0j, controls each kind from Settings, and takes anything out from its page (spec F35). A conflict is marked on both items as soon as the coach finds it, and a notice above the tab bar tells her once when she is in the app.

## Locked decisions

- **Value before account.** Show something personal first, then ask for the account. Onboarding asks for her first name and her children's names and birth months before the first capture, and suggests each child's grade from the birth month, so the coach knows whose week it is reading, and the account comes only after she has seen her first draft. This wording needs Heather's sign-off.
- **Collect progressively.** After the account, she connects her calendar, and two short setup screens ask for each child's school and start time, then the household type, home language and the adults who help. Other detail comes later through the coach's questions on Today.
- **Her people and groups are not part of onboarding.** The coach introduces them when a question would benefit from other parents.
- **Today is home.**
- **The plan is the product.** The coach is a feature built into it that helps the parent create the plan.
- **Nothing goes to another person unless the parent sends it herself,** and coverage is never shown as settled. The product keeps this rule by how it behaves, so no line on screen repeats it as a disclaimer.
- **The coach does not read chats or groups.** People see only what the parent sends them, and nobody sees her plans or her coach conversations.

## Writing

Every document, prompt and message reads as written by a person.

Write in natural, conversational prose using complete sentences and connected paragraphs, as you would when explaining something clearly to another person. Avoid sentence fragments, clipped phrases, slogan-like wording and strings of short statements used for dramatic emphasis. Do not split a single thought into separate fragments with periods: write "Three chickens share the yard with one fox", not "Three chickens. One fox." Vary sentence length so the rhythm is natural, and connect related ideas when that makes their relationship clearer.

Use concise labels for headings, tables and navigation, but avoid theatrical or teaser-style phrasing. In explanatory bullet points, use complete sentences. Use plain language, and choose the simplest word that carries the meaning.

Before returning a draft, check it for fragments and rewrite them as complete sentences. Preserve the meaning, and never invent facts to complete a sentence.

## How to work with Greg

- Give the summary first, then the detail, in plain product-designer language with no filler and no jargon.
- Be direct and decisive. Push back with a specific diagnosis rather than hedging. Greg grades output and expects a clear reason when something misses.
- Deliver documents and prompts for the build agent or for design tools as files ready to paste, with the reasoning for each decision included.
- Iterate on what's in hand. Make correction passes rather than regenerating.
- Keep the documents current. When a decision changes them, update every document it touches in the same session, including the full fixtures, the spec, the issues file, the backlog and the followers, rather than handing Greg a change to apply himself.
- Park feedback that doesn't serve the current workstream, and return to it in order.
- Don't end with a question unless clarification is genuinely needed.
- Give no advice on team dynamics or relationships.
- Trust the system's current date. The demo calendar inside the prototype is a separate thing and never follows the real clock, and there is no set presentation date, so the demo stays in its October week.
