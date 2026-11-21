# Archive: the October build of C-03

This folder holds the code from the October 8 to 18, 2026 build of moment C-03, written against fixtures 3.1x and spec 0.1x. Greg retired it on November 20, 2026 (issue C61), because its seed, words and screens predate the Now redesign, the circle vocabulary, the evening, the trip pass and the playbook.

Nothing here is built, linted or tested, and nothing is copied from it. Alpha 1 rebuilds the seed, the article, the schema, the shell, the screens and the components from the current fixtures and spec. The tooling that was kept stays outside this folder: `package.json` and its scripts, `scripts/voicecheck.mjs`, `scripts/validate-schema.mjs`, the voice check and lint tests, `netlify.toml`, `src/tokens.css` and the Icon component.

The three tests here checked the retired seed. Stage 2 writes their replacements against the new seed: the fixtures test under issue D3, and a schema test against the schema written from spec §16.
