# Correction pass: story fixtures 3.13 to 3.14

*MVP (Lombardi) · October 14, 2026 · Greg's design decisions of the same evening*

## Summary

This pass records the design decisions Greg made after reviewing the board drafts. None of them changes a moment, a coach line or a person, so the story stays as 3.13 tells it. Sections 1 to 14 cover the first four decisions below, and sections 15 to 17 were added later the same evening.

- **The coach speaks in Inter everywhere in the app.** Fraunces is kept for onboarding, titles and large headlines, and later for marketing and presentations. The Today coach card moves from Voice to Body large, and the coach keeps Voice only for its lines in onboarding.
- **The capture bar replaces "Send to coach" on Today.** The floating button is retired. The same bar that sits at the foot of the Coach tab is docked above the tab bar on Today. It is drawn as a field with the coach's dot at the start of the placeholder, "Type, talk or add an image", followed by attach, camera and microphone. It hides while the coach card is asking for a capture, and on her empty first board the coach card itself holds the three ways to capture. This is the design Greg settled in the earlier session on the first board, and it was missed in the wireframes and the boards.
- **A person's answer shows as their initial and an icon.** Asked is an hourglass, yes is a thumbs up and can't is a thumbs down. Names made the statuses too long for a row, and "Edward: yes" broke across lines on Edward's own page. The words stay wherever there is room for a sentence: in notifications, in the coach's lines and in each status's accessible label.
- **A person page lists the week as lanes.** "This week" on a person page uses the same row as Later today, with the day abbreviated in the time column, such as "Thu", then the chip, the item and the answer icon on the right. The initial is left off there, because the page already belongs to that person.

- **Today has two surfaces** (section 15). The header and Now sit on paper, and the rest of the day sits below on a canvas sheet with rounded top corners.
- **The countdown sits under the departure time** (section 16), and drops "Next ·", so the large time no longer reads as the clock.
- **A staged plan screen follows the account** (section 17), and Greg's answers settle the MVP mark, read-only calendar, the switcher trigger and the email domains.

Greg also squared one corner of each chat bubble, on the sender's side. That is a component change only and needs no words here.

The spec takes these changes as version 0.14, and the wireframes need a pass for them (the end of this document lists the screens).

---

## 1. Version line

> *MVP (Lombardi) · Version 3.14 · October 14, 2026 · Charlotte and Edward only*

## 2. Section 1, "Terms used in this document"

Replace the Status row with:

> | Status | Where a request stands, shown on a plan item as the person's outlined initial and an icon: an hourglass while she waits, a thumbs up for yes and a thumbs down for can't. Section 2 lists the four statuses and the two marks that can sit beside them. |

Add this row after the Source link row:

> | Capture bar | The field docked above the tab bar on Today and at the foot of the Coach tab. It starts with the coach's dot and reads "Type, talk or add an image", with attach, camera and microphone beside it. Whatever she gives it goes to the coach. |

## 3. Section 2, "How things get into MVP"

Current text:

> The capture bar sits on the Coach tab, with a camera, an attach button for files and photos, and a microphone. Today carries a single capture button, labeled "Send to coach" with an up arrow, instead of the whole bar, so the screen stays quiet.

Replace with:

> The capture bar sits at the foot of the Coach tab and is docked above the tab bar on Today, so it is one object she learns once. It is drawn as a field rather than a button: the coach's dot starts the placeholder, "Type, talk or add an image", which says where things go without the word Send, and attach, camera and microphone sit at its end. Tapping the text opens the Coach tab with the keyboard up, and each icon goes straight to its kind of capture. A field and a button are different objects, so the bar can't be mistaken for one of the coach card's commands.

## 4. Section 2, "Nothing is ever settled", the status table

Replace the sentence before the table, "The seed file uses the internal names, and the screen always names the person.", with:

> The seed file uses the internal names. On screen, a person's answer is their outlined initial and an icon, so every status shows whose it is without spelling out a name that may be long. The words below are what each status says wherever there is room for a sentence: in notifications, in the coach's lines, and in the accessible label every status carries.

Replace the "On screen" column of the four rows with:

> | Proposed | Suggested, as a dashed label | … |
> | Asked | Edward's initial and an hourglass, labeled "Asked Edward" | … |
> | Accepted | Edward's initial and a thumbs up, labeled "Edward: yes" | … |
> | Declined | Edward's initial and a thumbs down, labeled "Edward can't" | … |

The "What it means" column is unchanged.

## 5. Section 2, "Today shows today"

Replace the paragraph headed **The capture button reads "Send to coach".** with:

> **The capture bar sits above the tab bar.** Today carries the same capture bar as the Coach tab, docked between the page and the tab bar, in place of the floating "Send to coach" button of version 3.10. The floating button looked like every other button on the screen and could appear beside a coach card that asked for the same thing. The bar hides while the coach card is asking for a capture, so two controls for one action never show together. Game plan, Team and Kids have no capture bar in review build 1, and whether they get one later is open (Appendix B).

## 6. Section 2, "Type"

Replace the Voice and Body large rows of the table with:

> | Voice | voice, voice-strong | The coach's lines in onboarding, and article titles at semibold | Fraunces 17, regular, and semibold for article titles |
> | Body large | body-large | The coach's lines on the Today coach card, checklist items under Now and in Ready tonight, and the rows in Later today and Tomorrow starts | Inter 17, regular |

Replace the last paragraph of the section with:

> The coach is set in Inter everywhere in the app: Body large on the Today coach card and Body in the Coach tab conversation. Fraunces is kept for onboarding, where the coach's lines use Voice, and for titles, the large headlines and the time of the next departure. It will also carry marketing and presentations later. JetBrains Mono appears only in the Label style, on the coach card's label.

## 7. Section 3, C-00, the skipped-capture board

Replace the coach card at the end of C-00 with:

> Your coach
>
> Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
>
> [Take a photo] [Attach a file] [Talk or type]

Add after it:

> *The card is the capture here, so the capture bar is hidden. Each button goes straight to its kind of capture.*

## 8. Section 3, "The Team tab", the person pages

Replace the "This week" rows on Edward's page with:

> | This week | Thu · [Alexis] Pick up at Cedar Grove, 1:30 pm · thumbs up<br>Thu · [Mallory] Pick up at Westview, 2:30 pm · thumbs down<br>Sat · Library run, 10:00 am · thumbs up |

Replace the "This week" row on Dr. Ortiz's page with:

> | This week | Fri · [Mallory] Checkup, Northside Pediatrics, 3:30 pm, with the calendar mark |

Replace the "This week" row on Min-jung's page with:

> | This week | Mon · [Alexis] Carpool to Cedar Grove, 7:40 am<br>Thu · [Mallory] Pick up at Westview, 2:30 pm · thumbs up |

Add this paragraph after Min-jung's page:

> "This week" on a person page is laid out as lanes, like Later today on Today: the day in the time column, abbreviated to three letters, then the chip, the item, and the answer icon on the right. The person's initial is left off the icon, because the page already belongs to that person.

## 9. Section 4, Today

Delete the rows "Capture button" and "What Send to coach opens". Replace the row "Coach card with nothing captured yet" with:

> | Coach card with nothing captured yet | Your coach · Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan. · Buttons: Take a photo · Attach a file · Talk or type |

Add these rows:

> | Capture bar | The coach's dot, then the placeholder "Type, talk or add an image" · Icons: Attach · Camera · Microphone, with those accessible labels |
> | When the capture bar shows | Above the tab bar on Today, except while the coach card is asking for a capture |

## 10. Section 4, Coach

Replace the row "Input placeholder" with:

> | Input placeholder | Type, talk or add an image, after the coach's dot |

In the row "Controls on the capture bar", replace "Camera · Attach · Microphone" with "Attach · Camera · Microphone", and replace the last sentence, "There is no Send on the capture bar, because Send on its own means sending something to another person, and the capture button on Today says "Send to coach" for the same reason.", with "There is no Send on the capture bar, because Send on its own means sending something to another person."

## 11. Section 4, Team

Replace the row "Section on a person page" with:

> | Section on a person page | This week, as lanes: the day abbreviated to three letters, such as "Thu", the chip, the item and the answer icon, for each item this week that they own or have been asked about |

## 12. Section 4, Game plan

Add this row:

> | A person's answer on an item | The person's outlined initial and an icon: an hourglass for asked, a thumbs up for yes, a thumbs down for can't. The accessible label says "Asked Edward", "Edward: yes" or "Edward can't". |

## 13. Appendix B

Replace item 34 with:

> 34. **The capture bar sits on Today and Coach.** Today's floating "Send to coach" button is retired in version 3.14. Whether Game plan, Team and Kids carry the capture bar is still open.

Add these items at the end:

> 51. **Person statuses are icons with an initial.** Greg chose icons over names on October 14, 2026, because names made rows too long. The words survive in notifications, coach lines and accessible labels. Whether a parent recognizes an hourglass as "asked" without the word is worth checking in user testing.
>
> 52. **Fraunces leaves the coach's in-app voice.** The coach speaks in Inter in the app and keeps Fraunces only in onboarding. Whether onboarding's coach lines should also move to Inter, so the coach sounds the same from the first screen, is open.

## 14. Appendix C, a new entry at the top

> ## Version 3.14, October 14, 2026
>
> Records Greg's design decisions after reviewing the board drafts. No moment, coach line or person changes.
>
> | # | Change |
> | ----- | ----- |
> | 1 | The coach speaks in Inter everywhere in the app. The Today coach card moves from Voice to Body large, and Voice is kept for the coach's lines in onboarding and for article titles. |
> | 2 | The capture bar replaces "Send to coach" on Today. It is docked above the tab bar, starts with the coach's dot, reads "Type, talk or add an image", and hides while the coach card asks for a capture. The skipped-capture coach card holds Take a photo, Attach a file and Talk or type. Appendix B item 34 is decided for Today and Coach. |
> | 3 | A person's answer shows as their initial and an icon: hourglass, thumbs up or thumbs down. The words remain in notifications, coach lines and accessible labels. |
> | 4 | A person page's "This week" is laid out as lanes, with the day abbreviated to three letters and the answer icon on the right. |
> | 5 | Appendix B gains items 51 and 52. |

## 15. Section 2, "Today shows today", Today's two surfaces

*Added later the same evening, from Greg's C-06 board.*

Add this paragraph after the capture bar paragraph:

> **Now sits on paper, and the rest of the day on a sheet below it.** The header and Now are set on the paper color at the top of the screen. The coach card, Later today and MVP Recommends sit below on a canvas sheet whose top corners are rounded, so the eye reads what she does next before the rest of the day. In the evening, Ready tonight takes the paper surface and Tomorrow starts takes the sheet. The two surfaces are not cards, so the coach card is still the only card on Today.

Add to the Appendix C table for version 3.14:

> | 6 | Today has two surfaces: the header and Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with rounded top corners. |

## 16. Now: the countdown sits under the departure time

*Added the same evening, at Greg's direction.*

The large time under Now is the next departure, not the current time. With "Next · in 15 min" above it, she read the label first and then had to work out what the large time meant. The countdown now sits directly under the large time and drops "Next ·", so the time reads first and the countdown says how far off it is.

In every Today moment, replace the countdown line, such as "Next · in 15 min", with the same line without "Next ·", such as "in 15 min", and place it directly under the departure time. In section 4, replace the Today row for the countdown with:

> | Countdown under the departure time | in 15 min, or in 2 hr 35 min for anything an hour or more away |

Add to the Appendix C table for version 3.14:

> | 7 | The countdown sits under the departure time and reads "in 15 min" without "Next ·". |

## 17. Section 2, "Onboarding", the plan screen, and Greg's answers to the open decisions

*Added the same evening, at Greg's direction.*

**The plan screen.** Add this row to the onboarding table after 0e:

> | 0e-p | Choose a plan: Basic or Family, each with a free trial | Setup | None | No |

Add this paragraph after "Her calendar is connected right after the account":

> **A plan screen follows the account.** Right after she creates her account, "Choose a plan" shows MVP's two plans, each with a free trial, so the demo shows how MVP is sold. A free trial means she can cancel before she pays, so the screen asks for nothing she can't take back, and it comes after she has already seen her first draft. In the prototype it is staged: no payment is taken and either plan moves her on to Connect your calendar.

In section 4, "Onboarding", add this row. The words are Greg's board as it stands, recorded so nothing is invented, and they stay proposed until Greg and Heather confirm them (issue O17):

> | Plan screen, proposed | Headline: Pick a plan and start your free trial today! · Toggle: monthly · annual · Plan: Basic · $8.99 / month · 7-day free trial · Monthly membership · AI coach · Team feedback · Button: Buy · Plan: Family · $13.99 / month · 7-day free trial · Monthly membership · AI Coach · Up to six users · Team feedback · Button: Buy · Line: Purchases will open Stripe in a new tab. |

Three things on the board need a decision before the words are final. The wordmark reads "MVP" on its own, which the brand rules do not allow. "AI coach" is the only place the product calls the coach AI. And the Stripe line describes a payment the prototype never takes.

**Greg's answers.** Replace these Appendix B items:

> 20. **The zip code's purpose is settled, and the board is corrected.** The welcome board shows 00123 and the helper from section 4.
>
> 21. **The small cup is the MVP mark.** Greg confirmed it on October 14, 2026, so it is the mark rather than an illustration, and Hearth's rule on illustration does not apply to it.
>
> 27. **MVP never writes to her calendar.** Greg confirmed it on October 14, 2026: MVP reads her calendar and builds the game plan from it, and nothing is ever written back. Writing to her calendar stays parked as F18 for the real product.

In Appendix A, replace the last sentence of the Westview contacts row, "The email domain must be checked before the build to confirm it does not belong to a real school, or be replaced with an example domain.", with "Greg chose to keep the invented domains on October 14, 2026." Do the same in the Cedar Grove contacts row, replacing "and the email domain needs the same check as Westview's" with "and the invented domain stays, by the same decision".

Add to the Appendix C table for version 3.14:

> | 8 | A staged plan screen, Choose a plan (0e-p), follows the account. Its words are recorded as proposed. |
> | 9 | Greg's answers: the cup is the MVP mark, MVP never writes to her calendar, the household switcher opens from the monogram, and the invented email domains stay. |

---

## Wireframes that need the change

A short wireframe pass should carry these changes, so the wireframes match the boards:

- **Coach card in sans:** every Today screen with a coach card (01, 02, 02b, 2c, 2d, 0i, 5c) sets the coach's line in sans.
- **Capture bar on Today:** the docked capture bar replaces the floating "Send to coach" on every Today screen (01, 01b, 02, 02b, 2c, 03, 0i). The "Send to coach" sheet on onboarding-19 is removed, and 0i's skipped state shows the card with the three buttons and no bar.
- **Status icons:** every status in the game plan (06, 06b, 5d), on Edward's and Min-jung's pages (10c) and in "This week's changes" shows the initial and the icon.
- **Person pages:** 10c's "This week" is redrawn as lanes with three-letter days.
- **Today's two surfaces:** every Today screen sets the header and Now on the lighter tone, and the coach card, Later today and Recommends on a slightly darker sheet with rounded top corners. Tonight puts Ready tonight above and Tomorrow starts on the sheet.
- **Now:** on every Today screen with a departure, the countdown moves under the large time and reads "in 15 min" without "Next ·".
- **Plan screen:** onboarding gains 0e-p, Choose a plan, between 0e and 0q, drawn from Greg's board.
- **Two stale callouts:** the two leftovers in W6 are fixed in the same pass.
