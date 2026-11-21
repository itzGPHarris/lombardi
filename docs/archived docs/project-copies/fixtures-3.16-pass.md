# Correction pass: story fixtures 3.15 to 3.16

*MVP (Lombardi) · October 16, 2026 · Greg's decisions on what stays fixed, what scrolls and what is anchored*

## Summary

Greg played the prototype flows on October 16, 2026 and found the scrolling inconsistent from screen to screen. This pass records his decisions so every screen follows one rule for its type. It changes no moment, no coach line and no person. The behavior is set out in full in spec 0.16 §2, "Layout and scrolling", and this pass carries the parts a parent sees and the words the build needs.

- **Every screen is one of eight types.** Today, a tab list, a page, a conversation, a composer, onboarding and setup, a sheet, and a still screen each have one rule.
- **Tab lists and pages behave like Apple Music.** The title bar's controls, such as the monogram, Back and New message, never scroll away. The large title fades into a small title in the bar as she scrolls and fades back as she returns, and tapping the small title takes her back to the top.
- **The Game plan scrolls the same way,** with its header fading into the title bar.
- **The keyboard follows iOS.**
- **A sheet never opens another sheet.**
- **Tablet and desktop keep the sidebar** for now.

Every replacement below is written to paste into `docs/story-fixtures.md` at version 3.15, and Claude applies it to the full fixtures in the same session.

---

## 1. Version line

> *MVP (Lombardi) · Version 3.16 · October 16, 2026 · Charlotte and Edward only*

## 2. Section 2, a new section before "Type"

> ## What stays in place
>
> Every screen in MVP behaves the same way as other screens of its kind, so a parent learns once where things are and what moves when she scrolls. There are eight kinds, and the spec sets out the rule for each one (spec §2, "Layout and scrolling").
>
> | Kind | Screens | What stays in place | What scrolls |
> | ----- | ----- | ----- | ----- |
> | Today | Every Today board | The header and Now, with the capture bar and tab bar at the foot | The canvas sheet, which rises over the header and Now ("Now stays in place") |
> | Tab list | Game plan, Team and Kids | The title bar, with the tab's actions and the monogram, and the tab bar | The large title and everything beneath it |
> | Page | A person page, a child page, a school card, an article and a group's members | The title bar, with Back and the page's actions, and the tab bar | The large title and everything beneath it |
> | Conversation | The Coach tab, a chat and a village group's page | The title bar, and the capture bar or message field at the foot | The messages or posts |
> | Composer | New message, a post, a request draft, Add someone and New village group | The title bar with Back and the heading, and Send or the screen's button at the foot | The fields and the message |
> | Onboarding and setup | 0w to 0j | Back and the step counter at the top, and the main button and skip link at the foot | The content |
> | Sheet | Every sheet | The grabber, Close and the heading, and the button at the foot | Only the Leave sheet, which is tall |
> | Still | The splash, the thinking screens, getting ready and notifications | Everything | Nothing |
>
> **The title bar works like Apple Music's.** On a tab list or a page, the controls at the top, such as the monogram, Back and New message on Team, stay where they are however far she scrolls. The large title, such as "Team", sits beneath them and scrolls with the page. As it passes under the bar it fades out, and the same words fade in, smaller, at the center of the bar. Scrolling back reverses it. Tapping the small title, or the tab she is already on, takes her back to the top. On the Game plan, each day's heading holds under the title bar while she reads that day, and "This week's changes" scrolls away with the page.
>
> **The keyboard behaves as it does on an iPhone.** It rises over the tab bar, and whatever sits at the foot of the screen, such as the capture bar, a message field, Send or Continue, rises with it. The field she is typing in always stays in view. In a conversation she drags the messages down to lower the keyboard, and elsewhere she taps outside the field. In a form, Return moves to the next field, and in a message it starts a new line.
>
> **Chats and composers hide the tab bar** while they are open, as Messages does, because the keyboard owns the foot of those screens. Back returns her to the tab.
>
> **A sheet never opens another sheet.** When something in a sheet leads somewhere else, such as Ask Min-jung opening a draft, the sheet closes first. The Leave sheet's time picker opens in place under its station for the same reason.
>
> **At tablet and desktop widths** the sidebar takes the tab bar's place, and everything else above holds inside the content column.

## 3. Section 2, "Today shows today", the subsection "Sheets"

Current text:

> A sheet never opens another sheet, and no confirmation follows a sheet.

Replace with:

> A sheet never opens another sheet, and no confirmation follows a sheet. When something in a sheet leads to another screen, the sheet closes first ("What stays in place").

## 4. Section 4, Navigation

Add these rows after the row "Link out of any page opened inside a tab":

> | Title bar on a tab | At the right, the tab's actions, such as New message on Team, then the monogram · At the center, the small title, once the large title has scrolled under the bar |
> | Title bar on a page | At the left, Back · At the right, the page's actions, when it has any · At the center, the small title, once the large title has scrolled under the bar |
> | Large title | The tab's or page's name beneath the title bar, such as "Team", "Game plan", "Kids", "Edward" or "Westview Kindergarten" |
> | Small title | The same words as the large title, with the accessible label of the name followed by ", back to top", such as "Team, back to top" |

## 5. Appendix B

Add these items at the end:

> 60. **The Coach tab is read as a conversation.** It keeps a fixed title bar reading "Coach", with the monogram, rather than a large title that fades, because its messages open at the newest and are read upward. Greg to confirm (issue C39).
>
> 61. **The Game plan's day headings stick under the title bar** while she reads that day. Greg asked for the page to scroll and its header to fade, and the sticking headings are Claude's reading of how the week stays readable. Greg to confirm (issue C39).
>
> 62. **Chats, composers and a village group's page hide the tab bar,** following iOS, because their foot is a message field or Send. Greg to confirm (issue C39).
>
> 63. **New message stays a labeled button in Team's title bar.** An icon would take less room but needs a new icon in the library. Whether to change it is open.

## 6. Appendix C, a new entry at the top

> ## Version 3.16, October 16, 2026
>
> Records Greg's decisions on what stays fixed, what scrolls and what is anchored, after he played the prototype flows. No moment, coach line or person changes.
>
> | # | Change |
> | ----- | ----- |
> | 1 | Section 2 gains "What stays in place": eight kinds of screen, each with one rule, the title bar that works like Apple Music's, the keyboard as on an iPhone, chats and composers without the tab bar, and sheets that never open another sheet. |
> | 2 | "Sheets" adds that a sheet closes before anything it leads to opens. |
> | 3 | Section 4 gains the title bar on a tab and on a page, the large title and the small title with its accessible label. |
> | 4 | Appendix B gains items 60 to 63. |
