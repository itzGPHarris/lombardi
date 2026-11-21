# Handoff: consolidating the documents before the alpha (Nov. 20, 2026)

This session carried out step 1 of the readiness plan Greg agreed on November 20, 2026: getting the documents into one current state before decisions, words, frames and the build.

## What was already current

The live docs folder was already consolidated. The fixtures are at 3.45 with every pass from 3.32 to 3.45 applied, the spec is at 0.44 with §20 and Appendix A up to date, and the screen map names both versions and every playbook frame. Old vocabulary in the spec and fixtures appears only in the change logs and in the seed keys that issue C50 covers.

## What changed

- **The followers (C56, C45).** AGENTS.md, CLAUDE.md and README.md now name fixtures 3.45 and spec 0.44 and use the current words: circle, people, groups, MVP Editorial, Updated, "Needs an owner" and the cerulean tint #E1EEFC. The Figma page they point at is "Design - lombardi · post-review". AGENTS.md no longer restates the product rules. Its old summary had drifted on more than a dozen points, such as Changed, "Nobody yet", "I've got it" and the green checklist headings, so it now maps each spec section to what it settles and lists the words that changed most recently. Its open decisions and its "How to work" section follow the alpha stages.
- **Stale copies left docs/.** The Heather review kit, which held an October copy of the fixtures and the screen map, the October 14 token proof in `docs/design`, and the duplicate `docs/README.md` are now in `docs/archived docs/`, so the build agent can't read them by mistake.
- **issues.csv.** C56 and C45 are fixed. Seven rows are new: C57 (choose the build agent), C58 (`docs/wireframes/` is missing), C59 (`src/tokens.css` predates the October 17 and 18 changes), C60 (stale open rows to confirm and close), C61 (what to keep of the October code), T72 (Today at the moments that open on another tab) and Y17 (Edward's view after he answers).
- **backlog.md.** Next and the two review builds are replaced by Before the alpha (steps 2 to 6), Alongside (Figma work that doesn't block code), Confirm and close (38 rows for C60), Alpha 1 in seven stages, and Alpha 2 for the playbook. Every open row appears once, and closed rows (T59, C52 and M4) are gone. The previous backlog and issues file are archived as `backlog-2026-11-19c.md` and `issues-2026-11-19.csv`.
- **screen-map.md.** "Review build" now reads "the alpha" in three places, and the date line moved to November 20.

## Not done

- **The claude.ai project copies of the fixtures, spec, issues file and screen map** are still the October versions. They are too large to upload from this session, so the docs folder stays the only current copy. The project copies of the backlog and README are current.
- **The claude.ai project instructions** still name fixtures 3.26 and spec 0.25, and only Greg can change them.
- **Nothing is committed to git.** The repository's working tree holds a month of uncommitted document changes, along with the untracked `CLAUDE.md`, `docs/screen-map.md`, `docs/archived docs/` and `icons/`.

## Next

Step 2 is Greg's decisions in one sitting, beginning with C61. Claude prepares the decision sheet with a recommendation for each.
