# Most Valuable Parent: Creative Brief for the Investor Prototype

**Owner:** Greg Harris
**Sign-off:** Heather Hannan-Kramer
**Date:** October 1, 2026 (correction pass for story fixtures v3.6)
**Readers:** Leadership and the product design team. This brief guides the design phase. The product spec turns it into build decisions for the engineer, and the story fixtures hold every word and fact on screen.

**What changed in this pass.** The brief now matches story fixtures version 3.6 and spec v0.7. The demo follows each family across its week as a series of moments instead of one shared Thursday, and it shows no calendar dates. The parent's people are her inner circle and her village rather than a single team. The tabs are Today, Coach, Game plan, Team and Kids. Things reach MVP through the share menu, a forwarding address, the camera and her voice, and every message to another person is in her own voice and sent by her. Onboarding asks her name and her children's names and grades before the first capture. The build moves from Claude Code to OpenAI Codex. Items that need Heather are marked **[Heather]** and collected at the end.

---

## 1. Project overview

Most Valuable Parent (MVP) is a planning app and a support system for busy parents. A parent gets her week's logistics in six or seven places at once: school emails and newsletters, messages in WhatsApp and other apps, texts, paper handouts that come home in a backpack, and her own thoughts in the car. She gives MVP whatever arrives, by sharing it from another app, forwarding it to her own MVP address, photographing it or simply talking, and the coach turns it into a plan for the day and the week. The plan says where everyone needs to be, who takes them, what goes with each child, and what still needs her.

The same coach is someone she can ask. Parents carry a steady stream of questions about raising their children, such as how to get through a morning that always ends in a fight about clothes, and many take them to Reddit or a Facebook group. MVP's coach already knows her family, so its answers fit her children, and every answer shows the family details it was based on.

Around her are two groups of people. Her **inner circle** is the people she trusts with her children and her private life, such as her partner, her family, a nanny and the family's doctors, therapists and tutors. Her **village** is everyone else who shares her children's week for a few hours at a time, such as school parents and carpool families. She talks with her village in groups she creates inside MVP, and those are where she turns for the local answers no product can give, such as which therapist has openings. When part of the plan needs someone else, the coach drafts a request in her voice and she sends it herself.

MVP also publishes short articles written by its staff, under the name MVP Recommends. There is no tab for them. One appears on Today when something in her week makes it useful, and one is attached to a coach answer when she asks for ideas.

For this phase we are building a web prototype whose only job is to help raise our first round of funding. It is a scripted demonstration rather than a working beta, and it runs from prepared data so the demo behaves the same way every time. It is designed for the phone first, with a layout that scales to tablet and desktop, and the presenter can show it in a phone frame or at full width. We will build it in React and host it on Netlify. There will be no iOS or Android app in this phase.

## 2. The problem and objective

In most families, one parent, usually the mother, handles the planning for the entire household. Information arrives through school emails, newsletters, team texts, parent WhatsApp groups, handouts, appointment reminders and, in some families, a co-parenting app. None of these sources are connected, and all of them land on the same person. Much of what arrives is not even for her children: a school newsletter covers every grade, and filtering it is work she does in her head every week. Knowing what is happening is usually not the hard part. The hard part is working out who is driving, when everyone needs to leave, what each child needs to bring, and who else needs to be asked, and then doing it again when someone's day changes. This work takes a lot of time, few people in the family notice it, and it often uses up the time a parent would otherwise have for herself.

Planning is only part of the load. Parents also carry a steady stream of smaller questions about raising their children, and many of them look for answers in threads written by strangers who know nothing about their family.

Our objective is to show investors, in about three minutes, that MVP takes this work off the parent, gives her a plan she can rely on as her week changes, and gives her somewhere to turn with the questions that come with raising a family, and that it does this for very different kinds of families using the same product. The presenter script measures how the moments fit that time once the prototype runs. We will consider the prototype a success if an investor can explain in a sentence what MVP does and who it is for, if each family's outcome is visible on screen rather than only described, if the demo runs without errors every time, and if the product comes across as something people made with care.

## 3. Target audience

We are designing and marketing for mothers first, and specifically for the mother who carries most of the planning for her family. She is comfortable with her phone and uses it all day, but she does not want another app that needs setting up or looking after. More and more, she speaks to her phone instead of typing, often while she is driving, cooking or walking into school. Her information already lives in email, texts, group chats and paper, and she has no interest in copying it somewhere else by hand, which is why MVP meets her in the share menu and her inbox rather than asking her to paste. When a question about her kids comes up, she often searches online or asks a parents' group, and she has learned to sort good advice from bad on her own. What she wants is to stop holding the whole week in her head, to feel sure nothing will be missed, and to get some time back for herself.

The product still has to work for every kind of household. It asks who is in the family rather than assigning people to roles like "mom" and "dad," and partners, co-parents, grandparents, nannies and staff are all added by name.

The demo uses four households, each with a different structure. Charlotte and Edward's household is written in full in story fixtures version 3.6. The other three keep the facts below until their fixtures are rewritten.

Charlotte and Edward have two daughters at two different schools with different hours. Charlotte is home full time and manages everything for the family without any paid help, and every school email, text and message from the parents' group lands on her phone. Edward works a hybrid schedule and commutes on Tuesdays and Wednesdays. She wants Tuesdays and Thursdays to be as manageable as the rest of the week, and she wants her Thursday yoga class.

Calypso is a single mother with full custody of two boys. They recently moved to a new town, and her mother is her only backup. She is managing three different diets, two new schools and her son Robby's difficult mornings. She wants to work without interruption, get to her kickboxing class and softball games, and go to bed at a reasonable hour.

Alexandra and Ben both have demanding careers and three boys under the age of eight, with a full-time nanny for the youngest. Ben travels three nights a week, and their evening nanny recently left. She wants the boys to keep their activities and the couple to get their Saturday date night back.

Marcus is a divorced father of two daughters, with live-in help and a custody case still in court. Every message from the school, the pediatrician, the coaches, the therapists and his attorney comes to him. He wants to leave for a week of work travel knowing his staff have each day planned out, each person sees only what they need, and nothing important will be missed.

## 4. Core functionality

### Must-haves for the investor demo

1. **Getting things in.** The parent can share a message to MVP from any app, forward email to her own MVP address, photograph a handout, or talk. She also connects the calendar she already keeps, whether Google Calendar, Apple Calendar or Outlook, and what is already on it comes into the plan without her sending it. MVP reads her calendar and never changes it, and when she adds something there that runs into the plan, MVP tells her and offers ways to fix it. The coach reads back what it took, asks at most one question, brings new items in as suggestions, and keeps a link to where each item came from. In the demo, sharing, forwarding, photographing and talking are staged so they play the same way every time.
2. **The plan.** The coach turns what she gives it into a plan with places, times and what goes with each child. Every item shows who owns it and where it stands, such as "Asked Edward" or "Edward: yes", and nothing is ever shown as settled. When something needs a decision, the coach offers two or three ways it could go and recommends one, and she may choose another because she knows things the coach does not.
3. **Today.** Today is the home screen and shows the current day only. Its title names the phase of the day, and it reads like a departures board: the next departure at the top with a countdown and a short list of what goes with each child, a row for each person through the day, and one coach card holding the decision that most needs her, which may concern another day. In the evening it turns to what has to be ready tonight and how tomorrow starts. The app has five tabs: Today, Coach, Game plan, Team and Kids, with Settings behind the parent's monogram. **[Heather: tab names]**
4. **Game plan.** The game plan holds the whole week, including routine items, with the week's changes at the top. She can move an item, add a note, or put someone's name against it to send them a request, all without the coach.
5. **Requests.** Part of the plan can go to someone else. The coach drafts the message in her voice and she sends it herself. It reaches the person as a card in their own MVP, as a text with a link for someone without MVP, or as text handed to another app for a group or a school office. The person answers "I've got it" or "I can't do this", and the answer shows on her plan. When someone who said yes can't after all, that part of the plan reopens with options.
6. **Onboarding.** The parent tells MVP her first name and who she is planning for, gives it one thing from this week, and sees it come back as a plan before she is asked to create an account. She then connects her calendar, and three short setup screens ask for each child's school, the household type and home language, and the adults who help. The coach introduces itself and she lands on Today. Detail about each child comes later, through the coach's questions on Today. **[Heather: onboarding order]**
7. **Asking the coach.** The parent can ask the kind of question she would otherwise take to a parents' group. The coach answers using what it knows about her family, shows what it based the answer on, and points her to the right person when a question needs a doctor, a therapist or other parents.
8. **Team.** Her inner circle and her village, and the village groups she creates and invites people to. Only members see a group's posts. The coach never reads them, and nobody sees her plans or her conversations with the coach.
9. **Kids.** A page for each child and a card for each school, holding hours, contacts, rules, calendar, rotation and the original documents. The coach keeps the cards current from what she captures, marks what changed and keeps the earlier version.
10. **MVP Recommends.** Short articles written by MVP staff appear as a card on Today, with a line saying why it is there, such as "Because Cedar Grove conferences are this week." The coach attaches one to an answer when she asks for ideas. There is no articles tab.
11. **Demo controls.** A hidden control lets the presenter switch households, jump to any moment in a family's week, see a request from the other person's side, and reset. A separate debug menu can switch the coach to a live AI model, and it is never used in a presented demo.

### Nice-to-haves for later

These are ideas we want to keep, but they will not be designed or built for the investor demo: a month view, live voice transcription, connecting her email account directly, writing MVP's plan items back to her calendar, other adults connecting their own calendars, real notifications, meal planning and a shopping list, ordering groceries, a Spanish-language household, a shared household account, moderation and reporting tools for village groups, photos in posts, saving and searching articles, cards for studios, teams and clinics alongside schools, and a Today that follows the family rather than the clock. Each has an F-number in the spec's roadmap.

## 5. User flow and feel

A parent is responsible for her children every hour of every day, and what changes from hour to hour is the logistics. The demo therefore follows each family across a real stretch of their week rather than around one problem and its solution. Each family has a set of moments at different days and times, such as getting the children out of the house in the morning, a change that arrives in the middle of the day, an evening spent getting ready for tomorrow, and a question asked once the house is quiet. The presenter moves between moments with a hidden switcher, so investors see the same plan change over several days.

Every family shows the same eight things: something messy turned into the plan, a decision with options, a request and its answer, an accepted request that reopens, the game plan worked directly, a parenting question answered from what the coach knows, a question taken to people rather than the product, and Today used to get the children out the door. Each family shows one or two of them in depth.

Charlotte's week is the one we most want investors to remember. Two weeks before the demo week, she photographs the rotation calendar on her fridge before she has an account, hands it to the coach, and sees her younger daughter's week come back. On Monday morning the coach has already read Sunday's school newsletter and kept only what applies to her daughters. She shares a carpool message from WhatsApp and talks for twenty seconds, correcting herself partway through, and the coach finds the one day that needs her: Thursday, when both pickups land during the yoga class she wants. It offers three ways Thursday could go, she asks Edward, and Edward says yes from his own phone. On Wednesday Edward's Thursday changes, the pickup reopens, and Charlotte chooses a different option from the one the coach recommends, because she knows something the coach does not. On Wednesday she also books Mallory's checkup through the pediatrician's own portal, and MVP sees it arrive on her Google Calendar, notices that it lands on Friday's tutoring, and offers two ways to fix it. Along the way she gets two girls to two schools prepared, asks her village about a new therapist, and asks the coach how to get through picture day morning.

When the coach is giving support rather than a plan, it should feel like talking to someone who knows the family and takes the question seriously. It stays practical and warm, and it never pretends to be a therapist, a doctor or a lawyer. When a question needs one of those people, the coach says so and names the one she already has.

We want the parent to feel calm and in control, and to feel that someone capable is keeping track with her. The product never tells her the week is finished, because a parent's week never is, and it never makes her feel watched, rushed or judged. It must also feel like people made it. If any part of the product looks or reads as though it was generated by AI, parents will be less willing to trust it with their family's schedule, so we treat this as a requirement rather than a matter of style.

The coach speaks like a capable friend who has already worked out the details. It is warm and direct, speaks in the present tense, and focuses on what the parent needs to do. It always refers to the children by name. It does not compliment the parent, talk about itself, or sound like software. Anything sent to another person is written in the parent's own voice, because they are hearing from her. This is the example we use as our standard:

> You need to be at the Northgate Aquatic Center with Lily, ready to go by 4:15 on Tuesday. Benjamin has soccer at Cedar Field at 9am Saturday. Bring snacks and warm clothes, it'll be chilly. That leaves you Saturday afternoon to shop for the party gift.

The visual style, which we call Hearth, should feel closer to a well-made paper planner than to a software dashboard, and Today borrows from transit boards and subway maps so it can be read at a glance. It uses warm cream instead of white and ink tones instead of black, with cerulean as the anchor color and for anything the parent can tap. How the coach card is marked is still open: saffron was reserved for it, and we may choose a signal that does not depend on color. Fraunces is reserved for headlines and titles, including every onboarding headline, Inter for everything the parent reads or taps, including everything the coach says, and JetBrains Mono for small details like labels and reading times. There are no photographs of people, no stock images and no AI-generated images. Children appear as monograms, and the only illustrations are spot illustrations inside articles, drawn by people. The full design system lives in the Figma file.

## 6. Constraints and timeline

The prototype is built for the web only, in React with Vite, hosted on Netlify, and designed in Figma. It runs entirely from prepared data for each household, so an investor demo never depends on a network connection or on how fast an AI model responds. It shows days of the week and no calendar dates, so it can be presented in any week without changing anything. We have no engineering team yet. Greg builds the prototype with OpenAI Codex, and everything needs to be documented well enough that the engineer we hire after funding can take it over.

The name MVP never appears on its own in the product. The wordmark always reads "Most Valuable Parent."

The major milestones, in order, are sign-off on this brief, the product spec, the Figma designs from the wireframes, the build of Charlotte's household, the fixtures and build for the other three households, and rehearsal of the investor demo. The date of the first investor presentation has not been set yet, and the milestone dates will be worked back from it once Heather confirms it.

## Decisions

These were open in earlier drafts and are now settled.

1. MVP is described in terms of the plan it produces, with the coach doing the work of building it. The plan is the product.
2. The app is designed for the phone first and scales to tablet and desktop up to 1920 × 1080. The presenter can show it in a phone frame or at full width.
3. Marcus remains in the lineup as the one father-led household in a product marketed to mothers first.
4. Invented details are listed in the story fixtures with the reason for each, and Heather can change any of them.
5. The pitch and its statistics are handled in a separate project, and the prototype shows no unsourced figure.
6. MVP is not a content feed and not a directory of camps, activities, providers or products. It publishes articles only as cards chosen for something in the parent's week, with no articles tab, and articles about choosing a camp are in scope.
7. The coach offers support and advice within firm limits. It is not a therapist, doctor or lawyer, and it does not find providers, plan money or buy anything.
8. MVP staff write every article, each under the writer's name.
9. Some articles carry spot illustrations drawn by people, and an article without one is complete.
10. Articles can link to where a product is sold, in the manner of Wirecutter, with no sponsored or affiliate links. Coach answers carry no product links.
11. The single shared Thursday is retired. Each family is shown across its week as a series of moments.
12. The demo shows no calendar dates.

## Items for Heather to confirm

1. **The onboarding order.** "Value before account" still holds, because she sees her first draft before creating an account. What changes is that MVP now asks her first name and her children's names and grades before the first capture, so the coach knows whose week it is reading. Greg made this decision in the design session.
2. **The tab names.** Today, Coach, Game plan, Team and Kids face customers. If the sports naming of Team is too much, the fallback is Kids and People.
3. **The coach's support answers and new lines.** Charlotte's answer about picture day morning, and the coach lines rewritten for her week, need a read for tone before they are built.
4. **The date of the first investor presentation.**
5. **Children's names in village posts.** Parents will name their children in a private group, and the product has no stance on it yet. This is needed before launch, not for the prototype.
6. **"PAS eater."** It appears in Charlotte's original notes and nobody has explained it, so it stays out of the demo until someone can.
7. **How the calendar connection is described.** Asking for a parent's calendar is a bigger trust request than anything else in setup. The connect screen says MVP reads her calendar and never changes it, and that promise belongs in the positioning too.

## Change log

**October 6, 2026.** The parent's own calendar is added, following fixtures v3.8 and spec v0.8. She connects Google Calendar, Apple Calendar or Outlook right after the account, MVP reads it and never changes it, and a new event that runs into the plan raises a conflict. Charlotte's week gains the checkup that reaches the plan through her calendar.

**October 1, 2026.** Correction pass for story fixtures v3.6 and spec v0.7. The overview now promises plans for the day and the week only, and describes capture, the inner circle and village, requests in the parent's voice and the Kids tab. The single Thursday becomes moments across each family's week, and the demo shows no dates. Core functionality is rewritten around getting things in, the plan's statuses, the departures board on Today, requests, the new onboarding order, Team and Kids, and meals and the shopping list move to later. The saffron once-per-screen rule is withdrawn pending a decision on the coach card's signal. The build tool becomes OpenAI Codex. MVP is no longer described as led by a coach, because the plan is the product and the coach is one helper among several. The twelve items for Heather become recorded decisions, following Greg's confirmation of eleven of them on September 21, and a new short list for Heather replaces them.

**September 21, 2026.** First signed version of the brief.
