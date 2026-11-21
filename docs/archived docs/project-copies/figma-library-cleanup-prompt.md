# Prompt: cleaning up the MVP design library in Figma

*Paste everything below the second line into an agent that has write access to Figma through the Figma MCP server, such as Codex or Claude Code with the Figma connector. The file is `mvp-design-library` (file key `A3SHbWiO5cyRDtIZ9sNNz7`). This pass prepares the library for the web build and ends with the `src/tokens.css` export that issue C20 is waiting on.*

## Before you paste

1. **Save a named version first.** In Figma, open File, then Save to version history, and name it "Before cleanup, V1 iOS library". The agent cannot do this through the plugin API, and it is the only way back if a rebind goes wrong.
2. **Check the decisions below.** The prompt uses the recommendation in each row. If you disagree with one, change the matching line in the prompt before you paste it.

| # | Decision | Recommendation | Why |
| ----- | ----- | ----- | ----- |
| D1 | Olive is removed from Hearth. `olive-700` and `olive-500` already hold the two cerulean values, `olive-100` is a gray-blue, and two olive greens are hard-coded on the canvas. | Rebind everything that uses an olive variable or one of the two greens to cerulean, then delete the olive variables. No variable, style, layer or description in the file mentions olive afterward. | Cerulean is the anchor color now, so olive has no role, and leaving the name anywhere would carry it into `tokens.css`. |
| D2 | Fraunces is reserved for headlines and titles, and the coach is set in Inter. | Keep the coach voice style in Inter Regular at 15, as it is now, and only rename it. | The coach's lines are read like the rest of the interface, and keeping Fraunces for headlines and titles keeps the display face special. |
| D3 | There is no 4 px space. | Add `spacing/4`. | The gap between an icon and its label, and inside small marks such as "Conflicts with", needs it, and Codex will invent one otherwise. |
| D4 | The components were built for the June iOS build. | Keep the icons, rebuilt as described below, and move every other component to an Archive page instead of deleting it. | The web build gets its components from the wireframes and the spec, and archiving keeps the old work to refer to without letting it into the library. |
| D6 | Icons can come from three sources. | Material Symbols first, Lucide where Material Symbols has nothing that fits, and a custom drawing only where neither does. Each icon is one component set with a Source variant, so any icon can be switched between sources. | This keeps the choice open icon by icon without making the engineer guess which library a frame uses. |
| D7 | Material Symbols has several styles, and the icons in the file now are mixed exports at weight 100 and 20 px. | Outlined, fill 0, weight 400, grade 0, optical size 24, drawn at 24 px. | Weight 400 at 24 px matches the 2 px stroke of Lucide, so icons from the two sources sit together without one looking thinner. |
| D5 | Success is a neutral gray (`#6B6B6B`) with a blue tint. | Keep both values unchanged and add no semantic token for them in this pass. | Plan statuses never rely on color, and nothing in the spec needs a success color yet, so this waits until a screen asks for it. |

---

## What this pass is

You are cleaning up the master design library for Most Valuable Parent (MVP), a planning app for busy parents. The library was built for an iOS prototype that has been abandoned. The product is now being rebuilt as a web app in React and Vite, styled with plain CSS modules, in which every design value is a CSS custom property in `src/tokens.css` exported from this file. Icons in the web build come from Material Symbols first, Lucide where Material Symbols has nothing that fits, and custom drawings only where neither does. The type families are Fraunces, Inter and JetBrains Mono, and no fourth font is allowed.

The goal is one clean, unified set of variables and text styles that exports to `tokens.css` without any hand editing, plus a set of icons named by meaning, each of which can be switched between Material Symbols, Lucide and a custom drawing. This pass does not design new components. It tidies what exists, archives what the web build will not use, and exports the tokens.

The file is `A3SHbWiO5cyRDtIZ9sNNz7`. Work through the Figma MCP server with `use_figma`, and read the Plugin API rules for it before your first call.

## What the file holds now

An inventory taken on October 8, 2026 found the following. Confirm it with your own read-only pass before changing anything, because it may have changed since.

- **Pages.** There are two pages. "buttons" holds every component, icon and the frame "Token proof sheet — paste into consuming files", and "Page 2" is empty.
- **Variables.** There is one collection, named "global", with one mode, holding 62 variables grouped as `primitives/…` and `semantic/…`. Almost every variable has the scope All, so every variable appears in every property picker.
- **Duplicate colors.** Several primitives hold the same value under different names.
  - `#1B7498` appears as `brand/olive-500`, `brand/cerulean-600`, `photo/royal` and `status/info`.
  - `#0A5570` appears as `brand/olive-700`, `brand/cerulean-700` and `photo/forest`.
  - `brand/cerulean-500` (`#1D7FA6`) is nearly the same as cerulean-600.
- **Leftovers from the iOS build.** The `photo` group belonged to a design with photography, and the product no longer uses photographs of people. Semantic names such as `ink/onPhoto-dark`, `ink/onPhoto-light` and `focus/ring-on-photo` come from the same design.
- **Paint styles.** There are 43 paint styles that copy the variables by name, and none of them is bound to a variable, so the two can drift apart. 20 layers use a paint style rather than a variable.
- **Hard-coded values.** 89 layers have a fill that uses neither a variable nor a style. Among them are `#FFFFFF` and `#000000`, which the design rules forbid, two olive greens (`#3A4A2A` and `#4F5D3A`), `#E89C2E`, `#D8D8D8`, `#292929` and `#1C1A19`. 29 text layers use no text style. No corner radius is bound to a variable, and none of the 115 auto-layout gaps is either.
- **Text styles.** There are 18 text styles. One name has a typo (`type/body-md- bold`), `type/coach-voice` is set in Inter, and `type/title-lg-bold` in Inter Black is really the wordmark style.
- **Icons.** The icons mix Material Symbols exports (such as `partly_cloudy_day_18dp_E8EAED_FILL0_wght100_GRAD0_opsz20 1`), custom vectors named "Vector", and misspelled names such as `seach small` and `pencile`. There is also a `send` icon, although the web build's capture bar has no Send.
- **Effects and grids.** There are no effect styles or grid styles.

## Rules for this pass

1. **Rename rather than recreate.** A renamed variable or style keeps its ID, so every file that uses the library keeps its bindings. Delete a variable only after every layer bound to it has been rebound to the variable that replaces it. Never delete and recreate a variable just to change its name or group.
2. **Never invent a value.** Every value in the target tables below either exists in the file today or is listed as a decision above. If a hard-coded value on the canvas has no matching token, report it and leave it as it is.
3. **No pure white and no pure black** remain anywhere in the file when you finish, including inside icons.
4. **Three type families only:** Fraunces, Inter and JetBrains Mono.
5. **Archive instead of deleting components.** Nothing on the canvas is deleted in this pass except the duplicate variables, the paint styles and the empty page.
6. **Stop at each checkpoint** in "Order of work" and report before continuing, because the later steps cannot be undone without the saved version.

## Target: variables

Keep the single collection and rename it "Hearth". Keep one mode and rename it "Light". Dark mode is out of scope for the prototype, so do not add one. Organize the variables in four top-level groups: `primitives`, `semantic`, `dimension` and `type`.

Set `hiddenFromPublishing` to true on every variable in `primitives`, so that files using the library pick semantic tokens and never raw ones. Set each variable's scopes explicitly using the scope column, and never leave a variable with the scope All.

### Primitives (colors, hidden from publishing, no scopes)

| New name | Value | From |
| ----- | ----- | ----- |
| `primitives/neutral/cream-50` | `#F5F3EF` | unchanged |
| `primitives/neutral/cream-100` | `#F3F0EB` | unchanged |
| `primitives/neutral/cream-200` | `#E9E4DC` | unchanged |
| `primitives/neutral/paper` | `#FCFBF8` | unchanged |
| `primitives/neutral/ink-900` | `#151412` | unchanged |
| `primitives/neutral/ink-700` | `#2B2925` | unchanged |
| `primitives/neutral/ink-500` | `#4A4741` | unchanged |
| `primitives/neutral/ink-300` | `#6E6A62` | unchanged |
| `primitives/neutral/ink-100` | `#C8C3B8` | unchanged |
| `primitives/cerulean/100` | `#DCE9EF` | renamed from `brand/cerulean-100` |
| `primitives/cerulean/600` | `#1B7498` | renamed from `brand/cerulean-600` |
| `primitives/cerulean/700` | `#0A5570` | renamed from `brand/cerulean-700` |
| `primitives/saffron` | `#E8A33C` | renamed from `photo/saffron` |
| `primitives/rose` | `#B86A60` | renamed from `photo/rose`, kept only if anything uses it |
| `primitives/status/error` | `#A03A3A` | unchanged |
| `primitives/status/error-tint` | `#F6E4E4` | unchanged |
| `primitives/status/warning` | `#8A6420` | unchanged |
| `primitives/status/warning-tint` | `#F5EAD2` | unchanged |
| `primitives/status/success` | `#6B6B6B` | unchanged (D5) |
| `primitives/status/success-tint` | `#B4CDD4` | unchanged (D5) |

Merge and delete the following, rebinding every use first.

| Delete | Rebind its uses to |
| ----- | ----- |
| `brand/olive-500` | `primitives/cerulean/600` (D1) |
| `brand/olive-700` | `primitives/cerulean/700` (D1) |
| `brand/olive-100` | `primitives/cerulean/100` (D1) |
| `brand/cerulean-500` | `primitives/cerulean/600` |
| `photo/royal` | `primitives/cerulean/600` |
| `photo/forest` | `primitives/cerulean/700` |
| `status/info` | `primitives/cerulean/600` |

Olive-500 and olive-700 already hold the cerulean values, so rebinding their uses changes nothing on screen.

### Semantic (colors, published, scoped)

| New name | Aliases | From | Scopes |
| ----- | ----- | ----- | ----- |
| `semantic/bg/canvas` | cream-100 | unchanged | Frame fill, shape fill |
| `semantic/bg/card` | paper | renamed from `bg/elevated` | Frame fill, shape fill |
| `semantic/bg/subtle` | cream-50 | renamed from `bg/sober` | Frame fill, shape fill |
| `semantic/ink/primary` | ink-900 | unchanged | Text fill, stroke, shape fill |
| `semantic/ink/secondary` | ink-700 | unchanged | Text fill, stroke, shape fill |
| `semantic/ink/muted` | ink-500 | unchanged | Text fill, stroke, shape fill |
| `semantic/ink/placeholder` | ink-300 | unchanged | Text fill |
| `semantic/ink/on-accent` | paper | renamed from `ink/onPhoto-light` | Text fill, shape fill |
| `semantic/border/hairline` | ink-100 | unchanged | Stroke |
| `semantic/border/strong` | ink-500 | unchanged | Stroke |
| `semantic/interactive/default` | cerulean/600 | renamed from `accent/default` | All fills, stroke |
| `semantic/interactive/pressed` | cerulean/700 | renamed from `accent/press` | All fills, stroke |
| `semantic/interactive/tint` | cerulean/100 | renamed from `accent/tint` | Frame fill, shape fill |
| `semantic/focus/ring` | cerulean/600 | renamed from `focus/ring-on-light` | Stroke |
| `semantic/coach-card/signal` | saffron | renamed from `photo/saffron` (semantic) | Frame fill, shape fill, stroke |

Give `semantic/coach-card/signal` the description "How the coach card is marked is undecided (issue T3). Saffron is a placeholder. Change this one value when it is decided." The token is named for its role so the decision changes one value.

Delete these semantic variables after rebinding their uses.

| Delete | Rebind its uses to |
| ----- | ----- |
| `semantic/ink/onPhoto-dark` | `semantic/ink/primary` |
| `semantic/focus/ring-on-photo` | `semantic/ink/on-accent` |
| `semantic/photo/royal` | `semantic/interactive/default` |
| `semantic/photo/forest` | `semantic/interactive/pressed` |
| `semantic/photo/rose` | Report each use and leave it bound to `primitives/rose` until Greg decides. |

### Dimension (numbers, published, scoped)

Rename the spacing variables after their values, so that the CSS reads `--space-16` instead of `--space-500`.

| New name | Value | From | Scopes |
| ----- | ----- | ----- | ----- |
| `dimension/space/0` | 0 | `spacing/0` | Gap, padding |
| `dimension/space/4` | 4 | new (D3) | Gap, padding |
| `dimension/space/8` | 8 | `spacing/300` | Gap, padding |
| `dimension/space/12` | 12 | `spacing/400` | Gap, padding |
| `dimension/space/16` | 16 | `spacing/500` | Gap, padding |
| `dimension/space/20` | 20 | `spacing/600` | Gap, padding |
| `dimension/space/24` | 24 | `spacing/700` | Gap, padding |
| `dimension/space/32` | 32 | `spacing/800` | Gap, padding |
| `dimension/space/40` | 40 | `spacing/900` | Gap, padding |
| `dimension/space/56` | 56 | `spacing/1000` | Gap, padding |
| `dimension/radius/none` | 0 | `radius/none` | Corner radius |
| `dimension/radius/sm` | 4 | `radius/sm` | Corner radius |
| `dimension/radius/md` | 12 | `radius/md` | Corner radius |
| `dimension/radius/lg` | 20 | `radius/lg` | Corner radius |
| `dimension/radius/xl` | 28 | `radius/xl` | Corner radius |
| `dimension/radius/pill` | 999 | `radius/pill` | Corner radius |
| `dimension/size/tap-target` | 44 | new, from spec §19 | Width and height |
| `dimension/layout/content-max` | 1200 | new, from spec §19 | Width and height |
| `dimension/breakpoint/tablet` | 768 | new, from spec §19 | none |
| `dimension/breakpoint/desktop` | 1280 | new, from spec §19 | none |

### Type (published, scoped)

| New name | Value | Scopes |
| ----- | ----- | ----- |
| `type/family/display` | Fraunces | Font family |
| `type/family/body` | Inter | Font family |
| `type/family/mono` | JetBrains Mono | Font family |
| `type/size/11`, `type/size/12`, `type/size/13`, `type/size/14`, `type/size/15`, `type/size/16`, `type/size/17`, `type/size/24`, `type/size/28`, `type/size/38`, `type/size/56` | the number in the name | Font size |

These sizes are the ones the current text styles use. Add no others.

## Target: text styles

Rename the text styles into groups, bind each style's font family and font size to the type variables above, and keep each style's current weight, line height and letter spacing unless this table changes them. Report every style's line height and letter spacing in your checkpoint report so Greg can review them.

| New name | Family and weight | Size | From |
| ----- | ----- | ----- | ----- |
| `display/xl` | Fraunces Bold | 56 | `type/display-xl` |
| `display/lg` | Fraunces Bold | 38 | `type/display-lg` |
| `display/md` | Fraunces SemiBold | 28 | `type/display-md` |
| `display/sm` | Fraunces SemiBold | 24 | `type/display-sm` |
| `coach/body` | Inter Regular | 15 | `type/coach-voice`, renamed only (D2) |
| `title/lg` | Inter Semi Bold | 24 | `type/title-lg` |
| `title/md` | Inter Medium | 16 | `type/title-md` |
| `title/md-strong` | Inter Extra Bold | 16 | `type/title-md-bold` |
| `body/lg` | Inter Regular | 17 | `type/body-lg` |
| `body/lg-strong` | Inter Bold | 17 | `type/body-lg-bold` |
| `body/md` | Inter Regular | 15 | `type/body-md` |
| `body/md-strong` | Inter Bold | 15 | `type/body-md- bold` |
| `body/sm` | Inter Regular | 13 | `type/body-sm` |
| `body/sm-strong` | Inter Bold | 13 | `type/body-sm-bold` |
| `label` | Inter Semi Bold | 11 | `type/label` |
| `mono/caption` | JetBrains Mono Regular | 12 | `type/caption-mono` |
| `mono/caption-strong` | JetBrains Mono ExtraBold | 14 | `type/caption-mono-bold` |
| `wordmark` | Inter Black | 24 | `type/title-lg-bold` |

Give `wordmark` the description "Always set as 'Most Valuable Parent'. MVP never appears alone in the wordmark." Give `coach/body` the description "Everything the coach says. Fraunces is reserved for headlines and titles." Check every style name against `figma.listAvailableFontsAsync()` before loading fonts, because Fraunces and Inter spell their weights differently.

## Target: paint styles and hard-coded values

1. Rebind the 20 layers that use a paint style to the matching semantic variable, choosing the semantic token for the layer's role rather than a primitive.
2. Delete all 43 paint styles. Variables replace them, and keeping both lets them drift apart.
3. Rebind the 89 hard-coded fills with this table, choosing the semantic token that fits the layer's role. Text uses `ink`, card and screen backgrounds use `bg`, and buttons and links use `interactive`.

| Hard-coded value | Rebind to |
| ----- | ----- |
| `#FFFFFF` | `semantic/bg/card` for a background, `semantic/ink/on-accent` for text or an icon on cerulean |
| `#000000`, `#151412`, `#1C1A19` | `semantic/ink/primary` |
| `#292929` | `semantic/ink/secondary` |
| `#D8D8D8` | `semantic/border/hairline` |
| `#F3F0EB` | `semantic/bg/canvas` |
| `#F5F3EF` | `semantic/bg/subtle` |
| `#E89C2E` | `semantic/coach-card/signal` on the coach card, and otherwise report it |
| `#3A4A2A` | `semantic/interactive/pressed`, which is cerulean 700 (D1), and report each layer so Greg can check the change in color |
| `#4F5D3A` | `semantic/interactive/default`, which is cerulean 600 (D1), and report each layer so Greg can check the change in color |
| `#E8EAED` (Material icon fill) | `semantic/ink/primary` |
| Any other value | Report it with the layer name and leave it unchanged. |

4. Apply a text style to the 29 text layers that have none, choosing the style whose family, weight and size match. Report any layer that matches no style.
5. Bind every corner radius and auto-layout gap and padding that equals a dimension value. Report the values that match none, with a count of how often each appears, rather than rounding them.

## Target: icons and components

Icons come from three sources, in this order of preference: Material Symbols, then Lucide where Material Symbols has nothing that fits, then a custom drawing where neither does (D6). Greg wants to be able to choose the source for each icon, so each icon is built once per source and the sources sit side by side as variants.

1. **Get the SVGs from the published packages.** Take Material Symbols from the npm package `@material-symbols/svg-400`, Outlined style, unfilled (D7), and Lucide from the npm package `lucide-static`. Insert each SVG with `figma.createNodeFromSvg`. Do not trace, redraw or approximate an icon, and if a name below is missing from its package, report it.
2. **Make a page named "Icons".** Each icon is a component set named for its meaning, such as `icon/calendar-mark`, with one variant property named `Source` whose values are `Material`, `Lucide` and `Custom`. Include only the sources that exist for that icon. The default variant is the first source that exists, in the order Material, Lucide, Custom.
3. **Draw every variant on a 24 px frame,** with its color bound to `semantic/ink/primary`. Material Symbols are filled shapes, so bind the fill. Lucide icons are 2 px strokes, so bind the stroke and keep the stroke at 2 px.
4. **Put the code name in each variant's description,** written as "Material Symbols: `calendar_today`" or "Lucide: `calendar`", so the engineer reads it from the frame and never looks it up.
5. **Build these icons.** The left column is the name the web build and the spec use, and the existing component it replaces, where there is one, moves to the Archive page once the set exists.

| Icon set | Material Symbols | Lucide | Replaces | Used for |
| ----- | ----- | ----- | ----- | ----- |
| `icon/phase-morning` | `wb_twilight` | `sunrise` | | "This morning" on Today |
| `icon/phase-afternoon` | `light_mode` | `sun` | | "This afternoon" on Today |
| `icon/phase-tonight` | `dark_mode` | `moon` | `night` | "Tonight" on Today |
| `icon/calendar-mark` | `calendar_today` | `calendar` | | Items that came from her calendar |
| `icon/camera` | `photo_camera` | `camera` | `camera` | Capture bar |
| `icon/attach` | `attach_file` | `paperclip` | `paper clip` | Capture bar |
| `icon/voice` | `mic` | `mic` | both `microphone` components | Capture bar |
| `icon/give-to-coach` | `arrow_upward` | `arrow-up` | | Replaces the microphone while she types, labeled "Give this to the coach" |
| `icon/back` | `chevron_left` | `chevron-left` | `back arrow`, `back` | Back link |
| `icon/search` | `search` | `search` | `seach small`, `seach large` | |
| `icon/edit` | `edit` | `pencil` | `pencile`, `planner edit` | |
| `icon/more` | `more_horiz` | `ellipsis` | `menu-dots` | |
| `icon/settings` | `settings` | `settings` | `icon_settings` | |
| `icon/location` | `location_on` | `map-pin` | `location` | |
| `icon/check` | `check` | `check` | `check` | |
| `icon/check-circle` | `check_circle` | `circle-check` | `check circle` | |
| `icon/add` | `add` | `plus` | `add` | Add button on Today |
| `icon/add-circle` | `add_circle` | `circle-plus` | `addcircle` | |
| `icon/copy` | `content_copy` | `copy` | `copy to clipboard` | |
| `icon/file` | `description` | `file` | `file` | |
| `icon/history` | `history` | `history` | `history` | |
| `icon/phone` | `call` | `phone` | `phone` | |
| `icon/close` | `close` | `x` | `close frame` | |

6. **Keep a custom drawing as a `Custom` variant** only when an existing icon has a meaning that neither package covers. Report each one with the reason, and do not invent new custom icons.
7. **Move the `send` icon to the Archive page,** because the capture bar has no Send.
8. **Make a page named "Archive (iOS, June 2026)"** and move every other component there, with a note at the top saying that these were built for the abandoned iOS prototype and are not part of the web library. This covers the illustration-style components (`camp`, `hike`, `robot`, `rocket`, `swimming`, `boy`, `girl`, `nature`, `park`, `garden`, `music`, `brush`, `library`, `morning`, `alone`, `emotions`, `screentime`, `Sparks`, `favorites`, `stamp`, `splash`, `schoolwork`, `School`, `Local fire department` and the Material weather and heart exports), the old navigation (`Tab Bar` with six variants and `Tab item`, which do not match the five web tabs), and the iOS controls (`chatinput`, `coach`, `button`, `large input`, `progress`, `chip`, `tag item`, `tag choice` and `Segmented control`). Check the `arrow` set with its three variants before moving it: if its variants are plain direction arrows, add `icon/arrow-left` and `icon/arrow-right` sets from both packages instead. Children appear as monograms and illustration appears only inside articles, so none of the illustration components return.
9. **Before archiving the controls,** rebind their colors, type, radius and spacing to the new variables like everything else, so they are correct reference if they are rebuilt later.
10. **Hide every archived component from publishing** so it no longer appears in the library.

## Target: pages

When you finish, the file has four pages in this order:

1. **Cover**, a single frame with "Most Valuable Parent design library", the current date, and a line saying the variables export to `src/tokens.css`.
2. **Foundations**, holding the token proof sheet, rebuilt to show every published semantic color as a swatch with its name and the CSS property it exports to, the space and radius scales, and one sample of each text style. Remove "paste into consuming files" from its name, because the library is published and nothing is pasted.
3. **Icons**, laid out on a grid in alphabetical order.
4. **Archive (iOS, June 2026)**.

Rename "buttons" rather than deleting it, so its node IDs survive, and delete the empty "Page 2".

## Export: `src/tokens.css`

When the variables are final, generate the contents of `src/tokens.css` from them and return it as text. Write it in this shape.

- Everything sits in one `:root` block, grouped under a comment for each top-level group, in the order primitives, semantic, dimension, type.
- Each property name drops the top-level group and joins the rest with hyphens, with a prefix for its kind. Colors take `--color-` (`semantic/bg/canvas` becomes `--color-bg-canvas`, and `primitives/neutral/ink-900` becomes `--color-neutral-ink-900`). Space takes `--space-` (`--space-16`), radius takes `--radius-` (`--radius-md`), size and layout take `--size-` and `--layout-`, font families take `--font-` (`--font-display`), and font sizes take `--text-` (`--text-15`).
- A semantic color is written as `var()` of its primitive, so the alias survives in code.
- Dimensions carry `px`, except the breakpoints, which are written as plain numbers under a comment saying that CSS cannot read custom properties inside media queries, so the build repeats 768 and 1280 in its media queries and these two lines are for reference.
- Each text style becomes one `--type-` property holding the full `font` shorthand, such as `--type-body-md: 400 15px/1.4 var(--font-body);`, plus a `--type-…-tracking` property only where letter spacing is not zero.
- No value appears in the file that is not a variable or text style in Figma, and the file contains no pure white and no pure black.

## Order of work

1. **Read only.** Inventory the pages, variables with every value and binding count, paint styles with usage, text styles with line height and letter spacing, components, and every hard-coded fill, radius and gap. **Checkpoint 1:** report differences from "What the file holds now", and stop.
2. **Variables.** Rename the collection and mode, rename and regroup variables, add the new ones, set scopes, descriptions and `hiddenFromPublishing`. Do not delete anything yet. **Checkpoint 2:** return the full variable list with values, aliases and scopes.
3. **Rebinding.** Rebind every use of the variables marked for deletion, every paint style, and every hard-coded fill, text, radius and gap that has a match. **Checkpoint 3:** report the counts of what was rebound, everything left unmatched, and a screenshot of three or four components before and after, which should look identical except where a forbidden white or black was replaced.
4. **Deleting.** Delete the merged variables, the 43 paint styles and the empty page, after confirming each deleted variable has zero bound layers.
5. **Text styles.** Rename and rebind them, keeping the coach style in Inter.
6. **Icons and components.** Fetch the SVGs, build the icon sets on the Icons page, archive the rest, and hide archived components from publishing. **Checkpoint 4:** return the icon table and a screenshot of the Icons page.
7. **Pages and Foundations.** Rename and order the pages, and rebuild the proof sheet. Take one screenshot of Foundations.
8. **Export.** Return `tokens.css` as text.

## What to return at the end

- The final `tokens.css`.
- The icon table, with one row per icon giving its meaning name, the sources it has, the default source, and the code name for each source.
- A short report in complete sentences covering what was renamed, merged, deleted, archived and rebound, with counts.
- A list of everything left for Greg: each unmatched hard-coded value with its layer, any icon with no match in either Material Symbols or Lucide, every layer that changed from olive green to cerulean, the uses of rose that have no semantic role, and the line heights and letter spacing of each text style.
- A reminder that Greg must publish the library from the Assets panel for consuming files to pick up the changes, and that files bound to a deleted variable will show it as missing until they are rebound.

## Why each decision

- **One collection, renamed, instead of new collections.** Figma cannot move a variable between collections without recreating it, which would break every binding in the wireframe and design files. The groups do the same job and keep the IDs.
- **Primitives hidden from publishing.** Designers using the library then pick a role such as `bg/card` rather than a raw value such as `paper`, which is the same discipline Codex follows in code.
- **One mode named Light.** The prototype has no dark mode, and an empty second mode would put dead lines in `tokens.css`.
- **Explicit scopes.** With scope All, a spacing number appears in color pickers and a background appears in text pickers, which is how the wrong tokens got applied in the iOS build.
- **Space tokens named by value.** `--space-16` tells Codex what it gets, and `--space-500` makes it look up a table.
- **Paint styles removed.** They duplicated the variables without being bound to them, so they could disagree, and Codex reads variables, not styles.
- **`coach-card/signal` as its own token.** Issue T3 is open, and spec §5 asks for the coach card to be built on a token named for its role so the decision changes one value.
- **Icons named by meaning, with a Source variant.** Greg wants to choose each icon's source, with Material Symbols first. One component set per meaning lets him switch an instance between sources without replacing it, and the code name in each variant's description tells the engineer exactly which icon to import.
- **Material Symbols, not MUI's icon package.** The icons in Material UI's `@mui/icons-material` package depend on MUI's component library, which the spec rules out. Material Symbols is the same Google icon set published as plain SVGs, so the build gets the icons without the library.
- **Olive removed.** Cerulean is the anchor color, and a name with no role in the design would only confuse the export.
- **Coach in Inter.** Fraunces is kept for headlines and titles, so the coach reads like the rest of the interface.
- **Archive rather than delete.** The iOS components are still useful to look at when the web components are designed, and archiving them costs nothing while deleting them cannot be undone without the saved version.
- **Ending with `tokens.css`.** Issue C20 is waiting on an export from the current Figma variables, and AGENTS.md tells Codex not to seed tokens from the old `hearth-tokens.json`.
