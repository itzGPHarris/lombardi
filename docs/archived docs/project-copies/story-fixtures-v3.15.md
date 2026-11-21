# Demo fixtures: the MVP families

*MVP (Lombardi) · Version 3.15 · October 15, 2026 · Charlotte and Edward only*

# 1. What this document is for

This document describes the households the investor prototype runs on and fixes everything they show on screen. It has two jobs. The first is agreeing on the shape of the demo, meaning which moments each family shows, in what order, and what each moment is there to prove. The second is fixing the exact words and data that appear in the app, so that the JSON seed files can be written directly from these pages and nothing has to be invented during the build.

The presenter script is a separate document. It will be written once the prototype runs, because its timings have to be measured rather than promised. It refers to the moments in this document by their IDs, such as C-01 for Charlotte's first moment, so the two documents never need to copy each other. A set of grayscale wireframes built from this document sits alongside it, and the two are meant to be read together.

Version 3 is a rewrite rather than a correction pass on version 2. It covers Charlotte and Edward only, because the narrative, the Today board and the way messages reach other people are being settled on one family before they are applied to the other three. Calypso, Alexandra and Ben, and Marcus follow in later versions, and until then version 2.2 remains the reference for their facts.

## How to read it

| What you see | What it is |
| ----- | ----- |
| A moment ID, such as C-01 | A point in a family's week that the household switcher can jump to. The presenter script refers to moments by these IDs. |
| An italic line | A note for the team that explains what the moment shows. It never appears in the app. |
| A blockquote | Words that appear on screen exactly as written, whether the coach says them, a parent sends them or someone posts them in a group. |
| A table headed "as shown" | A screen at that moment. The text in each cell appears on screen exactly as written. |
| Any other table | Structured data that goes into the seed file. |
| Section 4 | Every label, heading and button on the demo screens, in one place. |
| Appendix A | Every fact we invented, with the reason for it. |
| Appendix B | Everything still open, including decisions that belong in the spec. |

## Terms used in this document

Several of these names exist only inside this project so far, and the wireframes show each of them in place.

| Term | What it means |
| ----- | ----- |
| Today | The home tab, and the first of the five tabs: Today, Coach, Game plan, Team and Kids. It shows the logistics for the current day only: who goes where, when, with whom, and what they need to take. |
| Phase of the day | The title at the top of Today, which reads "This morning", "This afternoon" or "Tonight". The board beneath it changes with the phase, and the tab itself still reads "Today". |
| Dateline | The line above the phase title on Today, which shows the day of the week and the date, such as "Monday, Oct. 12". |
| Game plan | The tab that holds the whole week, including routine items. It is also where anything coming up later in the week lives, together with every change and conflict. |
| Coach | The tab where the parent talks to the coach, by voice, by typing or by adding a photo or file. The coach turns what she gives it into the plan and answers her parenting questions. |
| Thinking screen | A short waiting screen with the MVP mark and a line saying what the coach is doing, such as "Reading your photo…". It appears while the coach reads a capture or builds a draft, so a wait never looks like a fault. |
| Capture | Anything the parent gives MVP so the coach can turn it into the plan, such as a photo of a handout, a forwarded email, a message shared from WhatsApp or a voice note. |
| Share menu | The phone's own share sheet. MVP appears in it, so the parent can send a message, email or photo to MVP from any app without copying and pasting. |
| Forwarding address | A private email address each parent gets. Whatever she forwards to it, or sets her email to forward automatically, goes to the coach. |
| Her calendar | The main calendar the parent already keeps, such as Google Calendar, Apple Calendar or Outlook. She connects it once during setup, MVP reads it and keeps the plan in step with it, and MVP never changes anything in it. |
| Calendar mark | A small calendar icon beside any item that came from her calendar, on Today and in the game plan, so she can tell what MVP read from what MVP made. |
| Source link | The line on every captured item that says where it came from, such as "From the Cedar Grove newsletter · Sunday", so the parent can check the original. |
| Capture bar | The field docked above the tab bar on Today and at the foot of the Coach tab. It starts with the coach's dot and reads "Type, talk or add an image", with attach, camera and microphone beside it. Whatever she gives it goes to the coach. |
| Team | The tab that holds the adults around the parent, meaning her inner circle and her village, together with her chats and her village groups. Versions 3.1 and 3.2 called it Your people. |
| Kids | The tab that holds a page for each child and the cards for the schools in the children's lives. It replaces Settings as the fifth tab. |
| Child page | The page for one child on the Kids tab, with her school, what she does every week and the items that regularly go with her. |
| School card | The page for each school, holding its hours, contacts, rules, calendar, rotation and the original documents it was built from. It lives on the Kids tab and opens from the school's name anywhere in the app. The coach uses it when a message needs to go to the school. |
| Settings | Account and app settings. They open from the parent's monogram at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes. |
| Inner circle | The people a parent trusts with her children and her private life, such as her partner, grandparents, close friends, a nanny and the family's doctors, therapists and tutors. |
| Village | Everyone else who shares her children's week for a few hours at a time, such as school parents, carpool families, coaches and team parents. |
| Village group | A group of village members that the parent creates inside MVP and invites people to, such as "Cedar Grove parents". Only its members see its posts, and the coach never reads them. |
| Chat | A private conversation between the parent and one or more people in her inner circle who have MVP. A chat with one person is a direct message, and a chat with several is a group chat. The coach never reads chats. |
| Person page | The page for one adult on the Team tab, with how to reach them, what in this week's plan involves them, and the chats or groups she shares with them. |
| Departure | A leg she travels, from wherever she is to the next stop, with or without the children. Today shows the leg she leaves on next at the top, under Now, with its leaving time in large type. A child leaving home with someone else, such as Alexis with the Parks, is also a departure, because the checklist is hers. |
| Run | The stops she drives in order before she is home again, such as Westview, then Cedar Grove, then Brightwater. Each stop has a time she must be there and a time she leaves. |
| Leave sheet | The sheet that opens from the departure time on Today. It draws her run as a line of stops, lets her change when she leaves any stop, and holds the coach's Plan B and Plan C at its foot. |
| Plan B and Plan C | The coach's ready backups for a leg or an item that goes wrong. They sit at the foot of the Leave sheet, each with one button. |
| Sheet | A panel that rises over the screen for a short decision about something on it, such as setting a reminder, and returns her to the same place when it closes. |
| Checklist | The list under the next departure on Today of everything to do before she leaves. It merges what goes with each child, each item led by the child's name chip, with her own tasks. Earlier versions called the children's part the going with list, and each child page keeps its "Going with, by day" section. |
| Name chip | A child's first name in a filled pill, which stands for the child wherever the plan names one. "Both", "All three" and "Family" are the group chips. |
| Status | Where a request stands, shown on a plan item as the person's outlined initial and an icon: an hourglass while she waits, a thumbs up for yes and a thumbs down for can't. Section 2 lists the four statuses and the two marks that can sit beside them. |
| Conflict | A mark that appears when the plan asks one adult to be in two places at once, or leaves a child with nobody. |
| Request | Part of the plan that the parent sends to someone else and asks them to take on. The person answers with "I've got it" or "I can't do this". |
| Coach card | The only card on Today. It appears when the coach needs an answer from her, and it makes one recommendation with one button to accept it. |
| MVP Recommends | Short articles written by MVP staff. At most one appears on Today when something in the week makes it useful, and another is attached to a coach answer when the parent asks for ideas. |
| Moment | A point in a family's week that the demo shows, identified by an ID such as C-03. |
| Household switcher | A hidden presenter control that jumps between families and between moments. It is not part of any screen. |

# 2. How the demo works

## Parents are always on

A parent is responsible for her children every hour of every day, and what changes from hour to hour is the logistics. The demo therefore shows each family across a real stretch of their week, rather than around one problem and its solution. Each family has a set of moments at different days and times, such as getting the children out of the house in the morning, a change that arrives in the middle of the day, an evening spent getting ready for tomorrow, and a question asked once the house is quiet.

The household switcher moves between these moments. Within a family the moments run in order, so the presenter can show the same plan changing over several days.

## How things get into MVP

A busy parent receives the week's logistics in six or seven places at once: school emails, several messaging apps such as WhatsApp, WeChat and Telegram, text messages, paper handouts that come home in a backpack, and her own thoughts while she is driving. If the only way into MVP were opening the app and pasting into the coach, she would still be doing the sorting herself. MVP therefore meets her where each thing already is, and everything she gives it goes to the coach.

| Entry point | What she does | What it is for |
| ----- | ----- | ----- |
| The share menu | She presses and holds a message, email or photo in any app, taps Share and chooses MVP. | Messages from WhatsApp, WeChat, Telegram, Messages and Mail. Those apps do not let other apps read their chats, and MVP would not read them if they did, because nothing reaches the coach unless she sends it. |
| The forwarding address | She forwards an email to her private MVP address, or sets her email to forward a school's newsletters automatically. | School email, which is the largest source by volume. Once forwarding is set up, newsletters reach the coach without her doing anything. |
| The camera | She photographs a handout, a calendar on the fridge or a permission slip. | Paper that comes home from school. |
| Her voice | She taps the microphone and talks. | The stream of thought, such as a voice note in traffic that mixes three days, two children and a correction. |

The capture bar sits at the foot of the Coach tab and is docked above the tab bar on Today, so it is one object she learns once. It is drawn as a field rather than a button: the coach's dot starts the placeholder, "Type, talk or add an image", which says where things go without the word Send, and attach, camera and microphone sit at its end. Tapping the text opens the Coach tab with the keyboard up, and each icon goes straight to its kind of capture. A field and a button are different objects, so the bar can't be mistaken for one of the coach card's commands. Her own calendar is a fifth source, connected once rather than used each time, and it has its own section below. Connecting her email account directly is a later feature, because reading a whole inbox asks for much more trust than sharing one email at a time.

**What the coach does with what she gives it.** Whatever arrives falls into one of three kinds, and the coach handles each kind differently.

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | A school newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. Most of a newsletter covers other grades, and filtering it is work the parent otherwise does in her head every week. |
| A recurring rule | A rotation calendar, where each letter day means library, science or motor skills | Turns the rule into standing items on the child's checklist, such as "Library book" on library days and "Sneakers" on motor skills days. |
| Reference | A school's contact list | Saves it on the school card and uses it later, for example to address a note to the right office when the plan needs one. |

Each capture gets a short read-back from the coach that says what it took, and the coach asks at most one question when something is unclear. New items the coach pulls in arrive as Suggested, and a change to an item already in the plan shows as Changed, so nothing enters the plan without the parent seeing it. Every item keeps a source link to where it came from, because the one thing a parent cannot forgive is a date the coach made up.

**Entry points are taught when they become useful.** Onboarding asks for only one capture. The first time she pastes a WhatsApp message, the coach tells her she can share from WhatsApp directly next time, and after she forwards her first newsletter, it offers to set up automatic forwarding for that sender.

**The prototype stages these moments.** The prototype is a web app, which cannot fully appear in an iPhone's share menu, and it does not read live photos or email. Sharing, forwarding and photographing are scripted moments with prepared results, and the real capability goes to the engineer through the spec.

## Her calendar

Most parents already keep one main calendar, usually Google Calendar, Apple Calendar or Outlook, and much of the family's week is already in it: the children's activities, appointments, and the invitations that schools and clinics send. If MVP ignored it, she would have to give MVP everything twice. MVP therefore connects to her calendar once, during setup, and from then on the plan and the calendar stay in step. The prototype covers those three calendars.

**MVP reads her calendar and never changes it.** It does not add, move or delete anything there. Her calendar stays hers, and MVP is the place where the week is worked out. Whether MVP should ever write plan items back to her calendar is an open question in Appendix B.

**The coach sorts what it finds.** It reads each event and works out whom it concerns. The children's activities, appointments and school events come into the plan under the child's name chip. Her own appointments come in as hers, because they decide when she can drive. Events with no time, such as birthdays and holidays, stay on the calendar and out of the plan. When the coach cannot tell whom an event concerns, it asks, and it still asks at most one question at a time.

**Calendar items come in owned by her, with no status.** She put them on her calendar herself, so they are not suggestions, and making her approve each one would undo the point of connecting. They come in with "You" as owner, the calendar mark, and the source link "From your Google Calendar", or whichever calendar she uses.

**The plan follows her calendar.** When she adds, moves or deletes an event, the plan follows. A change she makes herself is not marked Changed, by the same rule as everywhere else. When a new or moved event runs into the plan, both items show "Conflicts with", and the coach card offers ways to resolve it, as it does for any conflict. This is how something she books outside MVP still reaches the plan without her sending it.

**Calendar items are moved in her calendar.** Because MVP never writes to her calendar, she moves or deletes a calendar item there, not in the game plan. In MVP she can still add a note to it or put someone's name against it to send a request. If she tries to drag it, the game plan says "Change this in Google Calendar." The same holds when she accepts a move from the coach card: the move changes the plan and nothing on her calendar.

**One thing, one item.** When a capture and a calendar event describe the same thing, the coach keeps one item with both source links.

**Nobody else sees her calendar.** Edward, her inner circle and her village see only what she sends them, as before.

**The prototype stages it.** The connect screen and the permission screen look real and connect nothing, and Charlotte's calendar is written into the seed. The real product reads Google Calendar and Outlook through their own accounts. Apple Calendar on an iPhone is read by the native app, so like the share menu it is staged in the prototype.

## Onboarding

Onboarding has three parts. In the first part, before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account, connects her calendar and answers three short setup screens. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today.

| # | Screen | Part | Step counter | Can she skip it? |
| ----- | ----- | ----- | ----- | ----- |
| 0s | Splash | Before the account | None | No |
| 0w | Welcome: her first name and zip code | Before the account | None | Yes, to 0k |
| 0k | Who are you planning for: each child's name and grade | Before the account | None | Yes, to 0a |
| 0a | Show me one thing | Before the account | None | Yes, to 0e |
| 0v | Check the photo: Use this photo or Retake, for a photo only | Before the account | None | No |
| 0r | Thinking, while the coach reads the capture | Before the account | None | No |
| 0b | Read-back, with a tap to confirm which child it is for, at most one question, and the hand-off | Before the account | None | No |
| 0t | Thinking, while the coach builds the draft | Before the account | None | No |
| 0c | The draft, with the account prompt over it | Before the account | None | Not now ends the session |
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
| 0e-p | Choose a plan: Basic or Family, each with a free trial | Setup | None | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook | Setup | 02 of 05 | Not now, to 0f |
| 0f | Who's on your calendar: each child's school | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Nice to meet you: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today, in three states: on arrival, the answer sheet, and after she answers | Finishing | None | No |

**Value still comes before the account.** The welcome and the children screen come before the first capture so that the coach knows whose week a capture belongs to. Without them, the coach could only guess which child a calendar was for. Both screens are short, neither asks for an account, and both can be skipped. Nothing in the first part is kept unless she creates an account: her name, zip code, children, photo and draft are held only for that session and discarded if she leaves.

**The coach always confirms which child a capture is for.** It preselects a child by matching the grade on the document to a child's grade, and she changes it with one tap. If two children share a grade or the document shows none, nothing is preselected. If she skipped the children screen, the confirmation offers a name field and the grade choices instead. The confirmation is a control, not a question, so the coach can still ask its one question.

**She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make, names anything it is keeping for later, and waits for her to tap the button that starts the draft. A link beside the button lets her correct something first. The hand-off is the moment she decides to give the coach the job, so the draft never appears as something the coach did on its own.

**The first draft covers the rest of this week.** A week is short enough to be right and long enough to show what MVP does. Anything on a capture that falls in a later week, such as a field trip or a fair, goes onto the school's card and comes into the plan when its week arrives, and the coach says so at the hand-off.

**Grades cover every child.** The grade choices run from "Not in school yet" through Pre-K, K and 1 to 8, then 9–12. A child marked "Not in school yet" is asked for an age on the setup screen instead of a school, because a five-year-old's Saturday looks nothing like a two-year-old's.

**The zip code is her starting point.** MVP never asks for a home address. It works out each drive from the zip code she gives on the welcome screen and adds five minutes, so an estimate errs early rather than late. A zip code covers a few miles, and the five minutes absorb most of the difference. Directions opens her maps app, which routes from wherever she actually is.

**Waits are shown, never hidden.** A thinking screen appears while the coach reads a capture (0r) and while it builds the draft (0t). Each shows the MVP mark and a line saying what the coach is doing, and each moves on by itself. In the prototype, which does not really read photos, each lasts two seconds. In the product, a capture that cannot be read and a wait longer than twenty seconds each have their own screen with a way to try again, and the wording for both is in section 4. Creating the account takes thirty to ninety seconds, so 0p shows its steps finishing in turn, five of them when she has connected a calendar, with no percentage, because a number that stalls or jumps looks broken. If account creation fails, 0p says so and keeps everything she entered. If she leaves the app during 0p, MVP opens at 0p or 0j when she returns. In the prototype 0p lasts four seconds.

**Her calendar is connected right after the account.** It comes after the first draft, so she has already seen what MVP does before it asks for her calendar, and before the school screen, so the coach can fill in what the calendar already shows. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment.

**A plan screen follows the account.** Right after she creates her account, "Choose a plan" shows MVP's two plans, each with a free trial, so the demo shows how MVP is sold. A free trial means she can cancel before she pays, so the screen asks for nothing she can't take back, and it comes after she has already seen her first draft. In the prototype it is staged: no payment is taken and either plan moves her on to Connect your calendar.

**The step counter appears on setup only.** The screens before the account carry no counter because they are not a form, and the screens after setup carry none because there is nothing left for her to do. The counter runs from 01 to 05.

**Headlines are display type.** The large headline on every onboarding and setup screen is set in Fraunces, the display face. Fields, labels, helper lines and buttons are set in Inter, and the coach's lines are set in the Voice style described in "Type". This corrects version 3.4, which said the setup screens were set entirely in sans.

**Her first board is never empty.** If she captured something, Today shows tonight's preparation from it and every child under "Tomorrow starts", with "Start time needed" where a time is not known yet, and the coach card asks for the one time that matters most tomorrow. When she answers, the board fills in at once and the card turns to the rest of the week. If she skipped the capture, the coach card asks for one thing to start with.

A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.

## Nothing is ever settled

A family's plan is the best current version of the week, and it changes whenever someone's day does. MVP never presents a plan as final. When something changes, the coach comes back with options rather than a single fix.

Every item in the plan has an owner and may carry a status. The owner is the adult responsible for the item, shown as their name, as "You" for the parent herself, or as "Nobody yet" when nobody is responsible. "Nobody yet" is drawn with its own mark, because an item with no owner is always something the week still needs from her.

A status says where a request or suggestion stands, so it appears only when another person or the coach is involved. The seed file uses the internal names. On screen, a person's answer is their outlined initial and an icon, so every status shows whose it is without spelling out a name that may be long. The words below are what each status says wherever there is room for a sentence: in notifications, in the coach's lines, and in the accessible label every status carries.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested, as a dashed label | The coach has suggested it and the parent has not chosen it yet. A suggested item has no owner until she chooses it. |
| Asked | Edward's initial and an hourglass, labeled "Asked Edward" | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward's initial and a thumbs up, labeled "Edward: yes" | The person asked has said yes. The item can still change. |
| Declined | Edward's initial and a thumbs down, labeled "Edward can't" | The person asked has said no. The item reopens with options beside it. |

Two marks can sit on any item, whoever owns it, alongside its status.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Changed | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. A change she makes herself is never flagged back to her. |
| Conflict | Conflicts with yoga | The item collides with another one, as described below. |

A conflict is marked separately from these statuses, because it describes two items that collide rather than where one item stands. When the plan asks one adult to be in two places at once, both items show "Conflicts with" followed by the other item, such as "Conflicts with yoga", until the parent resolves it. An item that collides with two or more items names them together where it can, such as "Conflicts with both pickups", and otherwise gives the number, such as "Conflicts with 3 items".

The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either.

**Accepting the coach's recommendation from Today.** When the coach card recommends a change to the plan, its button carries the change out, and the line under the button says what it changes, such as "Updates your game plan". Tapping the button is her decision, so there is no second confirmation, and because the change is hers it carries no Changed mark, by the rule above. Afterwards the card says what the plan now looks like, offers anything left for her to do, and shows an Undo link until she leaves Today. Undo puts every item back as it was, including any status the move resolved. The button is a shortcut to the recommended option. "Other options" opens the Leave sheet on Today, scrolled to the coach's Plan B and Plan C, so she can choose another without leaving Today. A Why link in the sheet opens the coach's full message on the Coach tab, with every option and its reasoning.

**The coach keeps backups ready.** For any leg or item the coach has worked out, it holds the current plan and up to two ranked backups, Plan B and Plan C, before anything goes wrong. They sit at the foot of the Leave sheet, so she reaches them in one tap from Now when she sees a problem first, and through "Other options" when the coach sees it first. Each backup is one line from the coach and one button. A backup that involves another person is an ask, not a fact: choosing it opens a draft in her voice, and the item shows Asked until the person answers. At least one backup depends on nobody else saying yes, wherever one exists, and when there are two it is Plan C. Backups respect the rules on the school card, so a plan that needs a pickup note after the school's deadline is never offered. When there is no honest backup, the sheet says so rather than padding the list. The coach still never finds or recommends providers, so when nobody in her plan can help, the sheet offers Ask my village.

**Answering the coach's question from Today.** When the coach card asks for a fact, such as a start time, its button opens a sheet where she answers. Her answer changes the board at once, and the card then says how the plan stands now, with a button for what comes next and a link to change the answer, until she leaves Today. Her answer carries no Changed mark, because it is hers.

**MVP changes only its own plan.** A move from the coach card never writes to her calendar, by the rule in "Her calendar", and never books anything. When a move needs a booking, such as a different yoga class, the card hands her a link to the place and the booking stays with her.

## The people around a parent

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Both live on the Team tab.

**The inner circle** is the people a parent trusts with her children and with her private life. It includes her partner, grandparents, close friends, a nanny, and the family's own doctors, therapists and tutors. These are the people she hands parts of the plan to most often, and when the coach says a question needs a doctor, it names the doctor from her inner circle.

**The village** is everyone else who shares her children's week for a few hours at a time. It includes school parents, carpool families, coaches and team parents, and the parents she sees at birthday parties and play dates. The village knows the local answers, such as which therapist has openings, where to buy sparring gloves, or who can drive on Wednesday.

The village is managed inside MVP. The parent creates village groups and invites people to them, and only the members of a group see what is posted there. Groups that already exist elsewhere, such as a parents' WhatsApp group, stay where they are. She forwards messages from them into MVP when she wants the coach to see them, and she replies to them from the app they live in.

People see only what the parent sends them. Nobody sees her plans, her coach conversations or anything else she has not sent. The coach knows what she has entered about each person, such as which school their children attend, but it never reads her village groups.

### Talking with her people

**She talks with her inner circle in chats.** A chat is a private conversation between the parent and one or more people in her inner circle. She starts one with "New message" at the top of the Team tab, or with Message on a person's page, and she chooses who it is for. She can choose one person, several, or "Everyone on MVP", which chooses all of them at once and is how she asks her whole circle something. A chat with one person is a direct message, and a chat with several is a group chat. If she chooses exactly the people of a chat she already has, her message goes into that chat rather than starting a second one.

**Only people with MVP can be in a chat.** People in her inner circle who don't have MVP, such as a pediatrician or a tutor, appear in the composer marked "Not on MVP" and can't be chosen. Their page offers Call, and Text when MVP has a mobile number for them, and parts of the plan still reach them as a request by text message, as in C-06b.

**Questions for the village go to a village group.** The same composer, with Village chosen, posts to one of her village groups, as in C-05. Messaging one member of her village directly is not part of this version (Appendix B, spec F22).

**Chats are as private as groups.** Only the people in a chat see it. The coach never reads chats, and nothing said in a chat changes the plan. A request is still how part of the plan goes to someone, because a request carries the items and the answer buttons and a chat does not.

**She hears about new messages.** Each new message in a chat and each reply to her post in a group arrives as a notification. The chat or group row shows "1 new" until she opens it, and the Team tab carries a dot.

**Adding people is part of Team.** "Add someone" asks for a name, a mobile number, who they are to her and whether they belong in her inner circle or her village. MVP checks the number, and if the person has MVP the row says so. If they don't, MVP offers an invitation by text that she sends herself, and she can always skip it. An invitation leaves no task on her list, unlike a handoff of a message about the plan, because it is not part of the plan. Calling someone opens her phone app and leaves no task either.

**She creates village groups.** "New village group" asks for a name and the people from her village to add. Everyone in a group needs MVP to see its posts, so only people with MVP can be chosen.

## How people are shown

Children, adults and the coach each appear in their own way, so a row can be read at a glance and the three never look alike, even in grayscale. This replaces the per-person colors and the children's monograms of earlier versions.

| Who | Shown as | Color |
| ----- | ----- | ----- |
| A child | A name chip, which is the first name in a filled pill | Children's green |
| Every child in a row, without adults | One group chip, reading "Both" or "All three" | Children's green |
| The whole household | One chip reading "Family" | Ink outline on paper |
| An adult who owns an item | An outlined initial | Ink outline on paper |
| The parent herself | The word "You" | None |
| The coach | A solid dot | Coach amber |

**Children never appear as initials.** A name chip replaces the monogram everywhere a child appears, because children in one family can share an initial, such as Lily, Laura and Lisa.

**Chips lead each row in a list of items,** such as Later today, the game plan and requests, as in "[Mallory] Pick up at Westview". Checklists are grouped instead, under the child's first name in the children's green, and their rows carry no chips.

**A row never repeats a name.** The chip replaces the child's name in the row's text, so the row reads "[Mallory] Pick up at Westview" and never "[Mallory] Collect Mallory at Westview".

**A row carries at most two chips.** A row that involves every child uses the group chip instead.

**Guests are named in the row's text.** "Dinner with Claire" carries no avatar for Claire, so Claire's C never sits beside Charlotte's.

**The coach writes names in full.** Chips label items in the plan and never appear inside the coach's sentences.

**"Family" means everyone in the household** set up on 0g. For a household with two homes, it means whoever is on that day's plan.

**There is one color for each kind of person.** The per-person colors of earlier versions, such as green for Alexis, pink for Mallory and indigo for Edward, are retired, and all children share one green. Action blue, which is Hearth's cerulean, is for buttons, links and the active tab, and never for a person.

**Items written "Alexis · Carpool to Cedar Grove" in this document carry a chip on screen.** In the game plan, requests and "This week's changes", the child's name before the dot is drawn as her name chip and the dot is dropped.

**A child who comes along gets the group chip.** When Mallory rides along to Alexis's therapy or dance, the row carries "Both" and names the place rather than the activity, such as "[Both] Studio Ten".

**The wireframes stay gray.** They show children as filled gray chips, and Family and adults as outlined.

## How a request reaches someone

Anything sent to another person is written as the parent, in the first person and in her own plain voice, because the person reading it is hearing from her. The coach drafts it and she changes whatever she wants to change. Nothing goes to another person unless she sends it herself.

A message reaches its recipient in one of three ways, depending on who the recipient is.

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item on the card with "I've got it" or "I can't do this", and each answer appears as a status on her plan. |
| Someone who does not have MVP, such as a tutor | As a text message to the mobile number she entered, with a link to a single web page that shows the request and the answer buttons. No account is needed. | The same buttons on that page update her plan in the same way. |
| A group or organization outside MVP, such as the parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, such as WhatsApp, email or her messages app, and she sends it from there. | Nothing comes back into MVP. Sending it becomes a task on her own list, which she ticks off herself. |

Charlotte's week uses all three: Edward and Min-jung through their own MVP, Ms. Reyes through the web page in C-06b, and the parents' WhatsApp group and the Westview office through another app.

**Each item gets its own answer.** A request that covers more than one item, such as Edward's two pickups, lists each item with its own "I've got it" and "I can't do this", so a person can take one and decline the other.

**A person can add a short note.** A note travels with the answer and never changes her plan by itself. A note with "I can't do this" reopens that item, and the coach card turns the note into options, as Edward's note does in C-06. A note with "I've got it", such as "I'll be ten minutes late", shows under the item with the Changed mark until she opens it, and nothing reopens.

**A person can change an answer.** After answering, each item shows the answer and a Change link, and a changed answer reaches her the same way as the first one.

**She hears about answers.** Each answer, and each changed answer, arrives as a notification on her phone and as a status on the item. A "can't" also brings the coach card back with options. There are no read receipts, so nobody can see whether the other person has opened a request, and "Asked Edward" carries no time.

**Another app leaves a task.** MVP cannot see whether a message handed to another app was sent, so every handoff leaves a task on her own list, such as "Send Westview the pickup note", until she ticks it off. The plan itself follows her choice in MVP, not the sending.

## Today shows today

Today is the home tab, and it shows the logistics for the current day and nothing else. It is quiet on purpose. A parent glances at it on her way out the door, so it leads with the one thing she needs next and keeps everything else out of the way.

Today has four parts, always in this order.

1. **Now** shows the next thing today that needs her at a set time, usually the next leg she travels, with its time in large type, and beneath it the checklist, the actions and a line with the drive. When nothing timed is left, Now shows her leading task, and when there is no task, a quiet line. "Now, from one moment to the next" sets out every state.
2. **The coach card** appears only when the coach needs an answer from her. It usually makes one recommendation with one button to accept it, and when the coach is asking for a fact, such as Mallory's start time, the button opens her answer. It sits directly under Now, so the decision fits on the first screen.
3. **Later today** lists the rest of the day, with the times in a column.
4. **MVP Recommends** shows at most one article, and only when something in the week makes it useful.

**The coach card is the only card.** Everything else sits directly on the page, with space between the parts instead of borders, divider lines or a timeline rail.

**The checklist is grouped by who it belongs to.** Under Now's perforation, in Ready tonight and under each departure in Tomorrow starts, the items are grouped. Each child's items sit under the child's first name, set in Body strong in the children's green, and "Both" or "All three" heads the items that go with every child. Her own tasks sit under "Before you leave", set the same way in ink. A row is the item alone, so every item starts at the same left edge and a long item wraps under itself. The check is a circle in a fixed column at the left, and the whole row is the target, so she can tick an item anywhere along it. A ticked item stays in place, dimmed, with its circle filled, so she can see what is packed and undo a slip. A group shows no count, because a group shows its own length.

**Later today is a list.** Each row has its time in the Meta style, its chips and the item, and the times line up in a column. What is already done drops off the list, and a count beside the heading says how much, such as "2 done this morning". Anything that has changed today carries the Changed mark on its row, and items from her calendar carry the calendar mark. Each row shows the time the thing itself starts, such as 8:30 am for Mallory at Westview, and the leaving time belongs to Now, Tomorrow starts and the Leave sheet. When nothing is left later today, the heading stays with its count, such as "5 done today", and no rows. When nothing was planned at all, Later today is hidden.

**Children appear as name chips,** following "How people are shown", so Today carries no children's monograms.

**The capture bar sits above the tab bar.** Today carries the same capture bar as the Coach tab, docked between the page and the tab bar, in place of the floating "Send to coach" button of version 3.10. The floating button looked like every other button on the screen and could appear beside a coach card that asked for the same thing. The bar hides while the coach card is asking for a capture, so two controls for one action never show together. Game plan, Team and Kids have no capture bar in review build 1, and whether they get one later is open (Appendix B).

**Now sits on paper, and the rest of the day on a sheet below it.** The header and Now are set on the paper color at the top of the screen. The coach card, Later today and MVP Recommends sit below on a canvas sheet whose top corners are rounded, so the eye reads what she does next before the rest of the day. In the evening, Ready tonight takes the paper surface and Tomorrow starts takes the sheet. The two surfaces are not cards, so the coach card is still the only card on Today.

**In the evening the title changes to "Tonight"** and Today turns to tonight's preparation. It shows a "Ready tonight" checklist and "Tomorrow starts" with tomorrow's first departures, laid out by the same rules, because most of the work of getting children out the door happens the night before. Tomorrow's full day stays in the game plan. On her first night, Today also shows a child whose times MVP does not know yet, with "Start time needed" in place of the time, so the whole household is on the board from the start.

**The title names the phase of the day.** The top of Today reads "This morning", "This afternoon" or "Tonight", each with an icon, and the day and date sit above it as a dateline, such as "Monday, Oct. 12". Tonight shows the day it is, not tomorrow. The phase tells the parent what the screen is helping with before she reads anything else: getting everyone out the door in the morning, pickups and activities in the afternoon, and getting ready for tomorrow at night. The word always appears with the icon, and the header is no taller than a plain title, so the next departure stays near the top of the screen. The prototype follows the demo calendar, never the device clock. This morning runs from midnight to noon, this afternoon runs from noon until the screen turns to tomorrow, and tonight starts at 7:00 pm, or later if an activity is still scheduled after 7:00 pm.

**The coach card is the one exception to showing only today.** It holds the single decision the coach most needs from her, and that decision can be about any day. If it were limited to today, a change to Thursday that arrives on Wednesday would stay invisible until Thursday morning, which is too late to act on. The card's label names the day it concerns, such as "Your coach · for Thursday". A card that concerns no particular day, such as the therapist news in C-05, is labeled "Your coach", and tapping it opens the full message on the Coach tab. A card that needs no answer from her does not appear, except to say how the plan stands after a move or an answer she has just given, until she leaves Today.

On every tab, the parent's monogram sits at the top right of the tab's own screen. Pages opened inside a tab, such as a child page, a school card, an article or a draft, show a Back link in its place.

The quiet layout is designed for a phone. At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar, and a wide Today is parked on the roadmap (Appendix B).

### Now: reminders and directions

Two actions sit under the next departure, "Remind me" and "Directions". Each is an outlined button with an icon, a bell for the reminder and a navigation arrow for directions.

**A reminder never sets itself.** The coach can suggest one, but she decides. Tapping "Remind me" opens a sheet headed "Remind me to leave", with the time and the departure beneath it and three choices: 15 minutes before, which is preselected, 30 minutes before, and when it's time to leave. Once she sets it, the button reads the reminder's time, such as "Reminder at 2:00", in its active state, and tapping it again reopens the sheet, where she can change or remove it.

**"Directions" opens her phone's maps app** with every stop in order, such as Westview and then Cedar Grove. MVP draws no map of its own.

**The reminder arrives as a notification,** only if she allowed notifications on 0j. It says when to leave, naming the first stop and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater", carries the checklist in a sentence, and offers Directions and a five-minute snooze.

**Reminders need notifications on.** She allows notifications on 0j when she leaves the reminder ticked. If she did not, Remind me still opens its sheet, with a line above the choices reading "Notifications are off, so this reminder can't reach you." When she has never been asked, Set reminder brings up the phone's own request. When she has said no before, the phone will not ask again, so the line carries an "Open settings" link. The reminder is kept either way and goes off once notifications are on. Once a reminder has gone off, the button reads Remind me again.

**Directions appears only when she is driving.** When a child leaves with someone else, such as Alexis with the Parks in C-03, Now offers only "Remind me".

**The prototype stages the traffic check.** It cannot check traffic, so "When it's time to leave" keeps the product's wording and sets its time from the travel times in this document. The maps app is staged like the share menu.

### Now, from one moment to the next

Now answers one question: what needs her next. It follows a single order. The next thing today with a set time that needs her leads Now. When no timed thing is left, her leading task leads it. When there is no task either, Now shows a quiet line.

**What leads Now.** A leg she drives leads Now, and so does a child leaving home with someone else, because the checklist is hers to do, as when Alexis leaves with the Parks in C-03. Her own trips lead it too, such as yoga or her conference. A timed thing at home, such as dinner with Claire, leads Now when no leg comes before it, with Remind me as its only action. Three kinds of item never lead her Now. Someone else's trip that does not start from her home, such as Edward's pickup at Cedar Grove, stays in Later today with his initial and answer. An item that is Asked or owned by Nobody yet stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.

**A leg passes through four stages.** Before the leaving time, the countdown reads "in 15 min", or "in 2 hr 30 min" for anything an hour or more away. From the leaving time it reads "Time to leave", and Remind me goes away, because a reminder can no longer help. The five minutes MVP adds to each drive mean she is still on time for five minutes after that. Once those five minutes are used up, the Arrive field shows when she will really arrive, such as 2:31 against a 2:30 pickup, in the warning ink with a clock icon. The pass states the time plainly and never scolds. When the leg's destination is due, the leg leaves Now, adds to the done count beside Later today, and the next leg on her line takes over from that stop. Now never goes back to home unless home is the next stop, and MVP never asks her to tap that she has left or arrived.

**The next station.** Under the route, a line in Meta names the next stop on her run and when she is due there, such as "Then Cedar Grove, 2:45". When the next leg starts a separate run that leaves within 30 minutes, the line names it instead, such as "Then at 8:15, you leave for Westview". When nothing follows soon, there is no line.

**Marks on the leg.** A leg whose item has changed carries the Changed mark beside its route until she opens the Leave sheet. A leg in conflict carries "Conflicts with" and the other item, and the coach card holds the fix, labeled "Your coach · for today" when the conflict is today's.

**Tasks.** A task joins a leg's checklist, under "Before you leave", when the seed marks it for that trip, as "Call Brightwater" does on Wednesday. Every other task is an anytime task, which shows "Anytime" in the time column of Later today. When no timed thing is left, the leading task takes Now. A Meta line comes first, "Nothing to drive to today." or "Nothing else to drive to today.", then the task in the Title style, then its steps as a checklist when she wrote any, and a line saying what depends on it when the coach knows. The actions are Remind me and Ask someone. When several tasks are left, the one with the earliest deadline leads, then the one something else depends on, then the one she added first. Ticking off a task that leads Now counts it as done.

**The quiet line.** When nothing timed and no task is left, Now shows one line, "Nothing else today.", and the coach card and Later today rise beneath it.

**The done count.** Before noon it reads "2 done this morning". From noon it reads "3 done today".

**Tonight has no Now.** Ready tonight takes its place on the paper surface. Each row in Tomorrow starts opens the Leave sheet for that leg, so she can change tomorrow's first leaving time the night before.

### Now reads like a boarding pass

When Now holds a leg she travels, it is laid out like a boarding pass. A pass puts each fact in a fixed place with a small label, so a parent learns where to look once and then reads one field instead of a sentence. Only the values change from one leg to the next.

**The route comes first.** The top line names where she leaves from and where she is going, such as "Home → Westview", in Body strong, with the arrow read aloud as "to". The line in Meta beneath it names the next station, such as "Then Cedar Grove, 2:45". The route carries the chevron, and tapping it or the time opens the Leave sheet. The chevron appears only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks, has no chevron, and its route and time do nothing when tapped, because nothing on the Leave sheet is hers to change on that leg.

**The time and its status share a line.** The leaving time is set in Display. Beside it, at the right, a status pill gives the countdown: "in 10 min", "in 2 hr 30 min", or, from the leaving time, "Time to leave", which is filled so the change does not rely on color. The pill is the only part of the pass that moves through the stages of a leg.

**Three fields hold the facts.** Under the time sit three fields, each a label in Meta over a value in Body strong. Drive gives the minutes for this leg. Arrive gives when she reaches the stop. The third gives the stop's own time, labeled "Pickup" for a pickup and "Starts" for anything else. Before the leaving time, Arrive is worked out from the leaving time, and from the leaving time onward it is worked out from now, so once the five minutes are used up it shows when she will really arrive. When Arrive falls after the stop's time, the value is set in the warning ink with a clock icon, so lateness shows without a sentence and without relying on color. For a child leaving with someone else, the fields are With, such as "The Parks", and Starts, with no Drive or Arrive.

**A perforation separates the trip from what she does before it.** A dashed line runs across Now under the fields, and the grouped checklist and the actions sit below it. The perforation is the one line drawn inside Now, as the rail is the one line drawn inside the Leave sheet, and Now still has no border, so it is not a card.

**The actions sit at the foot.** Remind me and Directions keep their rules. A set reminder shows only in its button, such as "Reminder at 2:00", and the drive line of earlier versions is retired, because Drive and Arrive carry it.

**Only a leg gets the pass.** A timed thing at home, a task leading Now and the quiet line have no route and no fields, so they keep the plain layout set out above.

### Now stays in place

Today has two surfaces, and they move differently. The header and Now sit on paper and stay in place. The coach card, Later today and MVP Recommends sit on the canvas sheet, and when she scrolls, the sheet rises over Now and the header and covers them. Scrolling back down uncovers both exactly as she left them. Now is what she acts on next, so it keeps its place on the screen, and the rest of the day comes up over it only when she reaches for it.

**The sheet covers the header too.** The sheet can rise to the top of the screen, over the dateline, the phase of the day and the monogram. Scrolling back to the top brings all three back, along with Settings and the household switcher, which open from the monogram.

**A tall Now scrolls before it stops.** When the header and Now together are taller than the space above the capture bar, they first scroll up until Remind me and Directions sit just above the capture bar, and then they hold still while the sheet rises over them. Every part of Now can always be reached.

**In the evening the same rule applies.** Ready tonight stays in place on paper, and Tomorrow starts rises over it.

**Sheets are unchanged.** The reminder sheet, the Leave sheet and every other sheet still rise over the whole screen, with the scrim behind them.

### The Leave sheet

Today changes one kind of thing: when she leaves. The Leave sheet is where she does it. It opens when she taps the large departure time or the leg line under it, which carries a chevron on any leg she travels herself, and from a Tomorrow starts row in the evening. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and changing a time never turns into busy work.

**The sheet draws her run as a line.** Each stop is a station on a rail, in order: the place, the item there with its chip and the time it starts, and "Leave at" with the time she leaves that stop. Home is a station only when the run starts or ends there. The last station reads "Back about" and the time she gets home, because that time is an estimate. The rail appears inside this sheet only, and Today's own surface keeps no rail.

**She can change when she leaves any stop.** Tapping a "Leave at" time opens a time picker in place. As she turns it, a line under that station gives the result, such as "You reach Westview at 2:25, five minutes before pickup." or "You reach Studio Ten at 4:20, five minutes after ballet starts." A late choice is stated and never blocked. The change ripples down the line, so later stations show their new times. Save keeps the change, and Close leaves everything as it was. A change she makes carries no Changed mark, a reminder she has set moves with the new leaving time, and a change that runs into another item raises "Conflicts with" on both and brings the coach card.

**The start time changes only on her own items.** A station whose item is hers carries a "Change the start time" link. A calendar item reads "Change this in Google Calendar." instead, and its leaving time can still change, because the leaving time belongs to MVP and never to her calendar. Items someone else owns, and items someone has answered, are changed in the game plan.

**Plan B and Plan C sit at its foot,** under the heading "Other ways this could go", when the coach has written backups for this run. "Other options" on the coach card opens the sheet scrolled to them.

### Sheets

A sheet holds a short decision about something already on the screen, and closing it returns her to the same place. Anything she reads or works in, such as a draft or an article, is a page with Back instead. After she acts, the sheet closes and the screen shows the result, such as the button reading "Reminder at 2:00". A sheet never opens another sheet, and no confirmation follows a sheet.

Every sheet has a grabber and a Close icon at its top right, with the accessible label "Close", so she can always leave without acting. Closing never changes anything. Below them sit the heading and, when it helps, a line in Meta naming what the sheet is about. The body is one of four kinds: choices, which are radio rows; a single field, such as a time picker; a line of stations; or a list of actions, each a line with one button. The footer holds the primary button and, when there is one, a link for a second action, such as "Remove reminder".

A sheet comes in two heights. Most fit their content. The Leave sheet is tall and scrolls. A sheet reopened on something she already chose shows the choice selected, and its button changes to say so, such as "Update reminder".

## The game plan holds the week

The game plan shows the whole week, from Monday to Sunday, and every item in it, including routine ones such as the daily school runs. Routine items are visually quieter than items that happen only this week, so the week stays readable. A routine item that carries a status, a Changed mark or a conflict is drawn at full weight until it clears. Each item shows its owner, and its status when it has one.

At the top of the game plan sits "This week's changes", which lists every item for the rest of the week that is suggested, asked, declined, changed, owned by nobody or in conflict. It has one entry per item, so an item in conflict appears once with its conflict mark. This is where anything coming up later in the week lives, so the parent can see at a glance what the week still needs from her. Tapping an entry opens its day.

The parent works the game plan directly. She can drag an item to another time or day, add a note to it, or put someone's name against it, which sends that person a request. Items from her calendar carry the calendar mark and are moved in her calendar rather than dragged.

## Every tab at every moment

The household switcher jumps to a moment, and the tester can then open any tab. Every tab shows its state at that moment, worked out from the moments before it, so nothing is blank and nothing from later in the week shows early.

- **Coach** shows the conversation up to the moment, oldest at the top, with a heading for each day. The current day's heading is "Today" and earlier days are named, such as "Monday". Before C-01 the conversation starts with the coach's introduction from C-00 and the lines in "Taught when useful".
- **Game plan** shows the week as the table in "The week in the game plan" stands at that moment, using its "Changes during the demo" column. "Next week" shows next week's routine items and anything moved there, such as Mallory's second tutoring session after C-04.
- **Team** shows the chats, posts and replies that exist by that moment, with "1 new" on anything that arrived since she last opened it, following "The Team tab".
- **Kids** shows each card as it stands at that moment, so the Westview card carries its change from C-05b onward.

View as, in the household switcher, shows a moment from the recipient's side. It shows the recipient's Today with the requests she has sent them, and the screens they use to answer. The recipient's other tabs are not part of the demo.

## The Kids tab and school cards

The Kids tab holds a page for each child and a card for each school. Settings, which used to be the fifth tab, move behind the parent's monogram, because parents visit settings rarely and look at their children's schools every week.

**The Kids tab's icon is two figures of different heights,** so it fits a toddler and a teenager alike, and it replaces the smile. Team's icon is two people as well, so the difference in height must stay obvious at tab size. The label stays "Kids".

**A child page** shows the child's school, what she does every week and the items that regularly go with her, such as sneakers on motor skills days. It links to her school's card. Siblings at the same school share one card, so an update reaches both.

**A school card** holds what a parent otherwise keeps in a drawer of handouts and a folder of emails. It opens from the Kids tab and from the school's name anywhere it appears, such as "Westview" in "[Mallory] Pick up at Westview" on Today.

| Section | What it holds | How it changes during the year |
| ----- | ----- | ----- |
| Hours | Start and end times, early dismissal days, and before- and after-school care | For conferences, testing weeks and a new term |
| Contacts | Who to contact for what, organized by reason, such as absences, pickup changes, learning support and the counselor | A new teacher or a new office address, usually at the start of a year or term |
| Rules | The pickup list policy, dress days, lunch, and what each letter day means | Occasionally, often announced in a newsletter |
| Calendar | Term dates, holidays, conferences and school-wide events | In pieces all year |
| Rotation | The letter for each school day | A new sheet each month |
| Documents | The original photos, PDFs and emails the card was built from | With every capture |

Every fact on a card links to where it came from, which is the same source link rule as everywhere else. The link appears when she opens a fact, not under every line. A fact she told the coach herself, such as a start time, shows "From you". Sections with nothing in them are hidden. On the Kids tab, a school's row carries the Changed mark when anything on its card has changed. Keeping the originals also answers one of the most common questions a parent has, which is where a particular handout went.

**Cards are kept current through capture.** There is no separate flow for adding school information, because the four entry points already cover it. When a capture contains reference, the coach files it on the right card and says so in its read-back, while events still go to the game plan and rules still become standing items. A changed fact carries the Changed mark on the card until the parent opens it, and the previous version stays in the card's history. If a new document contradicts an old one in a way the coach cannot resolve, such as two different end times, the coach asks which is right instead of choosing. Each card also has its own "Add to this card" button, which opens capture already addressed to that school.

**The coach asks at predictable moments.** Near the end of each month it asks for the next rotation sheet, after a long break it asks whether the hours have changed, and in late summer it asks for the new year's handouts, keeping the contacts but marking the teacher and grade for a check.

**Cards start from the first capture.** Onboarding has no step for adding schools. The first card is created from whatever the parent captures first, and when the coach does not yet know a child's school, it asks on Today, the same way it asks for other details about each child. The Kids tab also has an Add a school button for parents who would rather type it in.

The prototype covers schools only. Studios, teams and clinics would suit the same card, and that belongs on the roadmap.

## What every family shows

Every family shows the same set of things, so the demo makes the argument that one product handles households that look nothing alike. The order varies with each family's week, and each family shows one or two of these in more depth than the others.

1. The parent gives MVP something messy, such as a voice note, a photo of a handout, a message shared from another app or a forwarded email, and MVP turns it into the plan. What is already on her own calendar reaches the plan without her sending it.
2. When something needs a decision, the coach offers several ways it could go, recommends one and explains why. Sometimes the parent chooses a different one, because she knows things the coach does not.
3. Part of the plan goes to another person as a request, and their answer comes back as a status.
4. Something changes after a person has accepted, and that part of the plan reopens with options beside it.
5. The parent works the game plan directly, without the coach.
6. **How the coach card is visually marked is decided.** The coach appears as a solid dot in coach amber beside "Your coach", the coach card is the only card on Today, and its fill is the coach's tint, which is `semantic/coach-bg` in the design library. The card carries no other signal, and saffron has no reserved role (issue T3).
7. The parent takes a question to her village or inner circle, because it needs people rather than a product.
8. The parent uses Today to get the children out of the house prepared.

| Family | Shown in depth | Status |
| ----- | ----- | ----- |
| Charlotte and Edward | Onboarding, the Today board, how much of the week the coach can build from what she photographs, forwards and says and from her own calendar, and how she works with her inner circle and her village | Written in this version |
| Calypso | The coach answering a hard parenting question, and a village that is still forming | Proposed |
| Alexandra and Ben | The game plan worked directly, and a plan that changes more than once | Proposed |
| Marcus | Sending parts of the plan to several people, and what each person is allowed to see | Proposed |

## What the coach does not do

The coach does not plan money, find or recommend service providers or sitters, buy anything, or give advice on custody, legal or medical questions. When the demo needs one of those, the answer comes from the parent's inner circle, her village, or a professional the family already has.

## Meals

Every family has something to work around at the table, but none of them opens MVP in order to plan dinner. Dinner appears in a plan only when the schedule forces it to move, and the rest of the time it stays out of the way.

## Dates, times and places

The demo runs on a fixed calendar. The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and Charlotte's first night, C-00, is Monday, Oct. 5, 2026, the week before. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the draft on 0c shows the dates it covers. Everything else on screen names the day of the week, such as "Thursday", and anything further away can be described either way, such as "Friday, Oct. 23" or "the Friday after this week". Months are abbreviated as in the Ready for dev frames: Jan., Feb., Aug., Sept., Oct., Nov. and Dec., with March, April, May, June and July written in full.

The seed files keep every time as a demo time, which is a number of weeks before or after the demo week, a day of the week and a time, and the seed holds one anchor date for the demo week's Monday. Every date on screen is worked out from that anchor, so the whole demo can move to another week by changing one value. The prototype never reads the device clock and always runs on the demo calendar.

The same calendar applies to documents in the story. The Westview rotation calendar is the October sheet, headed "Westview Kindergarten" with "October 2026" beneath it, and it starts with an A day on Thursday, Oct. 1.

Times are written with am and pm, in the time zone America/Los_Angeles. Every person, place and organization is invented. Travel times between places are fixed in the seed file rather than calculated, and they stand for the estimates the real product works out from her zip code and from the places' addresses.

**Every leaving time follows one rule.** A leaving time is the time she is due at the next stop, minus the drive, minus five minutes, rounded down to the nearest five minutes. Mallory starts at Westview at 8:30, ten minutes from home, so she leaves at 8:15. Alexis's orchestra starts at 7:15, twelve minutes away, so she leaves at 6:55. A leg never leaves a stop before that stop is due, because a child at a pickup is not ready earlier, so a leg from a pickup leaves at the later of the two times, as when she leaves Westview at 2:30 for Cedar Grove. The line then shows the arrival at the next stop honestly, even when the five minutes do not fit.

## Type

Nine type styles cover everything on the demo screens except the screen headers. Fewer styles keep each screen quiet and make it obvious which line matters most. The engineer takes the values from the design library, and the table records what each style is for and its name in the library.

| Style | Library name | Use | Set in |
| ----- | ----- | ----- | ----- |
| Display | display | The one number that matters now, such as the time of the next departure | Fraunces 44, semibold |
| Title | title | Section names on Today, such as "Later today", "Ready tonight" and "Tomorrow starts", and the line naming the next departure, such as "You leave for Westview and Cedar Grove" | Inter 20, extra bold |
| Subtitle | subtitle | Headings inside a page or a card, such as "Hours" on a school card and "Every week" on a child page | Inter 17, semibold |
| Voice | voice, voice-strong | The coach's lines in onboarding, and article titles at semibold | Fraunces 17, regular, and semibold for article titles |
| Body large | body-large | The coach's lines on the Today coach card, checklist items under Now and in Ready tonight, and the rows in Later today and Tomorrow starts | Inter 17, regular |
| Body | body | Everything else, including the coach's messages in the Coach tab conversation | Inter 15, regular |
| Body strong | body-strong | Buttons, links, names in rows, such as a person on Team, and field labels | Inter 15, extra bold |
| Meta | meta | Times, sources, counts and small labels | Inter 13, medium, in a muted ink |
| Label | meta-strong | The coach card's label, such as "Your coach · for Thursday", and nothing else | JetBrains Mono 13, extra bold |

There are no uppercase labels, no letter-spaced eyebrows and no bold words inside paragraphs. Times in a list line up in a column and are set in Meta. Screen headers, such as "This morning", and the onboarding and setup headlines stay in the display serif, outside the nine styles, as do the wordmark and the headlines on article pages. Chips use the Meta size in a heavier Inter weight, so they do not count as a tenth style.

The coach is set in Inter everywhere in the app: Body large on the Today coach card and Body in the Coach tab conversation. Fraunces is kept for onboarding, where the coach's lines use Voice, and for titles, the large headlines and the time of the next departure. It will also carry marketing and presentations later. JetBrains Mono appears only in the Label style, on the coach card's label.

# 3. Charlotte and Edward

## The household

| Person | Age | Who they are |
| ----- | ----- | ----- |
| Charlotte | 48 | Charlotte uses MVP. She is home full time and handles the shopping, school, doctors and planning, and every message about the girls arrives on her phone. |
| Edward | 50 | Edward works full time on a hybrid schedule. He commutes 100 miles to the office on Tuesday and Wednesday and works from home the rest of the week. |
| Alexis | 10 | Alexis is in fourth grade at Cedar Grove Elementary. She plays violin in the school orchestra and takes private lessons, dances on Wednesday and sees a therapist once a week. |
| Mallory | 6 | Mallory is in kindergarten at Westview Kindergarten. She takes ballet on Thursday and has reading tutoring on Friday. |

The family lives on Linden Avenue. There is no nanny and no paid help.

## Her people

The second-to-last column is the line shown under each person's name on the Team tab. The last column is the number MVP holds for them, which every number takes from the 555-01 range reserved for fiction.

| Person | Group | Who they are, for the team | Has MVP | On screen | Number |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Edward | Inner circle | Her husband | Yes | Your husband | Mobile 555-0101 |
| Claire | Inner circle | Charlotte's sister, who lives an hour away. Too far for pickups, and they talk most days. | Yes | Your sister | Mobile 555-0102 |
| Dr. Lena Ortiz | Inner circle | The girls' pediatrician at Northside Pediatrics | No | Pediatrician, Northside Pediatrics | Northside Pediatrics 555-0160 |
| Karen Moss | Inner circle | Alexis's therapist at Brightwater Family Therapy for the past year, with sessions on Monday at 3:30 pm | No | Alexis's therapist, Brightwater | Brightwater Family Therapy 555-0170 |
| Ms. Reyes | Inner circle | Mallory's reading tutor, with sessions on Friday at 3:00 pm in the Westview library | No | Mallory's reading tutor | Mobile 555-0103 |
| Min-jung Park | Village | A Cedar Grove parent. Her daughter Sophie is in Alexis's class and her daughter Hana is in Mallory's class at Westview. The Parks drive the Monday carpool and live two streets from Linden Avenue. | Yes | Sophie and Hana's mom · Monday carpool | Mobile 555-0104 |
| Jenna Okafor | Village | A Cedar Grove parent. Her daughter Ada is in Alexis's class, and the Okafors drive the Wednesday carpool. | Yes | Ada's mom · Wednesday carpool | Mobile 555-0105 |
| Tom Alvarez | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0106 |
| Grace Liu | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0107 |
| Dev Raman | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0108 |
| Nina Brooks | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0109 |
| Rafael Costa | Village | A Cedar Grove parent in the village group | Yes | Cedar Grove parent | Mobile 555-0110 |

Charlotte has one village group, **Cedar Grove parents**, which she created on Thursday of her first week. It has eight members: Charlotte, Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael. The fourth-grade parents' WhatsApp group is separate and stays in WhatsApp. She forwards messages from it into MVP when she wants the coach to see them.

At the start of the demo week Charlotte has no chats. Her first, with Edward and Claire, starts in C-05c.

## Where Charlotte starts

Charlotte started using MVP the week before the demo week, on Monday, Oct. 5, and C-00 shows how. Her first capture was a photo of Westview's rotation calendar, taken before she had an account. She named both girls and both schools during onboarding, and she gave the coach Mallory's start time at Westview on her first board that night. During her first week she gave the coach the girls' weekly schedules, Westview's end time, the carpool and the rest of the people above. She also photographed Westview's family contact list, which now sits on the Westview school card, and on the Wednesday of that week she forwarded the Cedar Grove newsletter that had come the Sunday before she started, which led her to set her email to forward the newsletter to MVP automatically. By the demo week she shares messages from WhatsApp using the share menu rather than pasting them.

## What makes her week hard

The girls go to two schools with different hours, which means two drop-offs and two pickups on most days. On Tuesday and Thursday mornings Alexis has orchestra at 7:15 am, so Charlotte drives Alexis at 6:55 am and comes back for Mallory at 8:15 am. On Tuesdays Edward has already left for the office, so Mallory rides along on the first trip as well. The carpool only runs on Monday, Wednesday and Friday for the same reason. In the afternoon Mallory finishes at 2:30 pm and Alexis at 2:45 pm, twelve minutes apart, and between them the girls have five activities after school. Every school email, text and message from the parents' group lands on Charlotte's phone.

## What the schools send

These are the invented versions of the handouts and emails the two schools send home. Their structure follows real school material, but every name, address and number is invented. Phone numbers use the 555-01 range, which is reserved for fiction.

**Westview rotation calendar.** A one-page calendar for October, headed "Westview Kindergarten" with "October 2026" beneath it, with each school day marked by a letter from A to F, starting with A on Thursday, Oct. 1. The key at the bottom reads: A, library, return books. B, motor skills. C, science. D, motor skills. E, art and music. F, science and motor skills. It also lists back-to-school night, a field trip to Fir Hollow Farm and the fall harvest fair, and someone has gone over several days with a yellow highlighter.

| Day of C-00's week | Westview letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday, Oct. 5 | C | Science |
| Tuesday, Oct. 6 | D | Motor skills, so sneakers |
| Wednesday, Oct. 7 | E | Art and music |
| Thursday, Oct. 8 | F | Science and motor skills, so sneakers |
| Friday, Oct. 9 | A | Library, so the library book goes back |

| Day of the demo week | Westview letter | What it means for Mallory |
| ----- | ----- | ----- |
| Monday, Oct. 12 | B | Motor skills, so sneakers |
| Tuesday, Oct. 13 | C | Science |
| Wednesday, Oct. 14 | D | Motor skills, so sneakers |
| Thursday, Oct. 15 | E | Art and music |
| Friday, Oct. 16 | F | Science and motor skills, so sneakers |

**Westview family contact list.** A single printed page headed "Who to contact". General questions go to the front office at 555-0140. Absences, late arrivals and early pickup go to office@westviewk.org and to the classroom teacher, Ms. Hollis in Room 3. Changes to who picks a child up go to the front office in writing, and the office releases children only to people on the pickup list. Questions about learning support go to Dana Lee, and questions for the school counselor go to Priya Nair.

**Cedar Grove weekly newsletter.** Sent every Sunday afternoon to all Cedar Grove families and forwarded automatically to Charlotte's MVP address. The demo week's edition has a list of helpful links, followed by upcoming dates: an early dismissal at 1:30 pm on Thursday for conferences, with no after-school care; conferences on Thursday afternoon and Friday; a free dress day on Friday for all grades; and a fifth-grade field trip to Point Reyes on Wednesday.

## The Kids tab

These are Charlotte's child pages and school cards as they stand at 6:00 am on the Monday of the demo week. The text in each table appears on screen as written.

**Kids, as shown: Alexis**

| Section | Content |
| ----- | ----- |
| Header | Alexis · 10 · Fourth grade |
| School | Cedar Grove Elementary · Ms. Carter's class |
| Every week | Orchestra, Cedar Grove, Tuesday and Thursday 7:15 am · Violin, Lakeside Strings, Monday 4:00 pm · Dance, Studio Ten, Wednesday 3:45 pm · Therapy, Brightwater, Monday 3:30 pm |
| Going with, by day | Library book, Mondays · Violin and orchestra folder, Tuesdays and Thursdays · Dance bag, Wednesdays |

**Kids, as shown: Mallory**

| Section | Content |
| ----- | ----- |
| Header | Mallory · 6 · Kindergarten |
| School | Westview Kindergarten · Ms. Hollis, Room 3 |
| Every week | Ballet, Studio Ten, Thursday 4:15 pm, with the calendar mark · Reading tutoring with Ms. Reyes, Westview library, Friday 3:00 pm |
| Going with, by day | Sneakers on B, D and F days · Library book on A days · Ballet bag, Thursdays |

**Kids, as shown: the Westview card**

| Section | Content |
| ----- | ----- |
| Hours | 8:30 am to 2:30 pm · Pickup at the front entrance |
| Contacts | General questions: front office, 555-0140 · Absences, late arrivals and early pickup: office@westviewk.org and Ms. Hollis · Changes to who picks up: office@westviewk.org, in writing · Learning support: Dana Lee · Counselor: Priya Nair |
| Rules | Children are released only to people on the pickup list · A, library · B and D, motor skills · C, science · E, art and music · F, science and motor skills |
| Calendar | Picture day, Friday · Harvest fair, Friday, Oct. 23, 3:00 pm · Fir Hollow Farm field trip, Thursday, Oct. 29 |
| Rotation | This week: Monday B · Tuesday C · Wednesday D · Thursday E · Friday F |
| Documents | Rotation calendar, photo, last week · Family contact list, photo, last week |

**Kids, as shown: the Cedar Grove card**

| Section | Content |
| ----- | ----- |
| Hours | 8:00 am to 2:45 pm · Pickup at the Oak Street gate · Early dismissal Thursday at 1:30 pm, Changed |
| Contacts | General questions: front office, 555-0120 · Absences: attendance@cedargrovees.org and the classroom teacher |
| Rules | Orchestra meets at 7:15 am on Tuesdays and Thursdays · Free dress days are announced in the newsletter |
| Calendar | Conferences, Thursday afternoon and Friday · Free dress day, Friday |
| Rotation | None |
| Documents | Weekly newsletter, Sunday · Weekly newsletters from earlier weeks |

## The Team tab

These are Charlotte's Team screens. Rows for adults lead with the person's outlined initial, following "How people are shown".

**Team, as shown: Monday, Oct. 12, 6:00 am, before C-01**

| Part | Content |
| ----- | ----- |
| Header | Team · [New message] |
| Chats | No chats yet. Start one with anyone in your inner circle who's on MVP. |
| Village groups | Cedar Grove parents · 8 members · You created this group last week. |
| Inner circle | Edward · Your husband · On MVP<br>Claire · Your sister · On MVP<br>Dr. Lena Ortiz · Pediatrician, Northside Pediatrics<br>Karen Moss · Alexis's therapist, Brightwater<br>Ms. Reyes · Mallory's reading tutor |
| Village | Min-jung Park · Sophie and Hana's mom · Monday carpool · On MVP<br>Jenna Okafor · Ada's mom · Wednesday carpool · On MVP<br>Tom Alvarez · Cedar Grove parent · On MVP<br>Grace Liu · Cedar Grove parent · On MVP<br>Dev Raman · Cedar Grove parent · On MVP<br>Nina Brooks · Cedar Grove parent · On MVP<br>Rafael Costa · Cedar Grove parent · On MVP |
| Below the lists | [Add someone] [New village group] |

**Team, as shown: Wednesday, Oct. 14, 5:00 pm, after C-06c**

Claire's reply has arrived and Charlotte has not opened it, so the Team tab carries a dot.

| Part | Content |
| ----- | ----- |
| Chats | Claire · Claire: Yes, see you at 6:30. I'll bring dessert. · 4:58 pm · 1 new<br>Edward and Claire · You: Sunday night it is. · Tuesday |
| Village groups | Cedar Grove parents · 8 members · Min-jung Park: Sophie sees Dana Whitfield there and really likes her. · Tuesday |
| Inner circle and Village | As on Monday |

A row's latest message is cut to one line. Chats and groups are ordered by their latest message, newest first.

**Team, as shown: Edward's page, on Wednesday after C-06**

| Part | Content |
| ----- | ----- |
| Header | Back · Edward |
| Line | Your husband · On MVP |
| Actions | [Message] [Call] |
| Contact | Mobile · 555-0101 |
| This week | Thu · [Alexis] Pick up at Cedar Grove, 1:30 pm · thumbs up<br>Thu · [Mallory] Pick up at Westview, 2:30 pm · thumbs down<br>Sat · Library run, 10:00 am · thumbs up |
| Under This week | Edward sees only what you send. |
| Chats | Edward and Claire |

**Team, as shown: Claire's page, on Wednesday after C-06c**

| Part | Content |
| ----- | ----- |
| Header | Back · Claire |
| Line | Your sister · On MVP |
| Actions | [Message] [Call] |
| Contact | Mobile · 555-0102 |
| This week | Nothing in this week's plan with Claire. |
| Under This week | Claire sees only what you send. |
| Chats | Claire · Edward and Claire |

Dinner with Claire does not appear on Claire's page, because Claire is named as a guest and is neither its owner nor asked about it.

**Team, as shown: Dr. Ortiz's page, on Wednesday after C-06b**

| Part | Content |
| ----- | ----- |
| Header | Back · Dr. Lena Ortiz |
| Line | Pediatrician, Northside Pediatrics · Not on MVP |
| Actions | [Call] |
| Contact | Northside Pediatrics · 555-0160 |
| This week | Fri · [Mallory] Checkup, Northside Pediatrics, 3:30 pm, with the calendar mark |

A person who doesn't have MVP sees nothing in MVP, so the page has no line about what they see. The checkup is listed because the coach links it to Northside, which is Dr. Ortiz's practice.

**Team, as shown: Min-jung's page, on Wednesday after C-06**

| Part | Content |
| ----- | ----- |
| Header | Back · Min-jung Park |
| Line | Sophie and Hana's mom · Monday carpool · On MVP |
| Actions | [Call] |
| Contact | Mobile · 555-0104 |
| This week | Mon · [Alexis] Carpool to Cedar Grove, 7:40 am<br>Thu · [Mallory] Pick up at Westview, 2:30 pm · thumbs up |
| Under This week | Min-jung sees only what you send. |
| Groups | Cedar Grove parents |

Village members have no Message button, because messaging one village member directly is not part of this version.

"This week" on a person page is laid out as lanes, like Later today on Today: the day in the time column, abbreviated to three letters, then the chip, the item, and the answer icon on the right. The person's initial is left off the icon, because the page already belongs to that person.

The other person pages follow the same pattern. Karen Moss's page offers Call with Brightwater's number and lists Alexis's Monday therapy. Ms. Reyes's page offers Call and Text with her mobile, and lists Friday's tutoring with "Ms. Reyes: yes" after C-06b, because the page records the request even after the item leaves the plan. The five other village members' pages list nothing this week and show Cedar Grove parents under Groups.

**Team, as shown: Cedar Grove parents, on Tuesday at 5:00 pm**

| Part | Content |
| ----- | ----- |
| Header | Back · Cedar Grove parents |
| Line | 8 members · See members |
| Action | [New post] |
| Posts | The post and replies from C-05, as shown there |
| At the end of the list | You created this group last week. |
| Note above the reply field | Only the people in this group see this. The coach doesn't read it. |

"See members" lists You and the seven village members, each with their line, and "On MVP" is left off because every member has it. Before C-05 the group page shows only "You created this group last week." beneath New post.

**Team, as shown: the composer for the inner circle**

| Part | Content |
| ----- | ----- |
| Header | Back · New message |
| Audience | **Inner circle** \| Village |
| To | Everyone on MVP<br>Edward · Your husband<br>Claire · Your sister |
| Not selectable | Dr. Lena Ortiz · Not on MVP<br>Karen Moss · Not on MVP<br>Ms. Reyes · Not on MVP |
| Line under the list | People who aren't on MVP can't be in a chat. Call or text them from their page. |
| Message field | Write a message |
| Note above the button | "Only" and the people chosen, "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
| Button | Send |

Choosing "Everyone on MVP" ticks Edward and Claire. In Charlotte's household that is the same as choosing both by hand, because only two people in her inner circle have MVP.

**Team, as shown: the composer for the village**

| Part | Content |
| ----- | ----- |
| Header | Back · New message |
| Audience | Inner circle \| **Village** |
| To | Cedar Grove parents · 8 members |
| Message field | Write a message |
| Note above the button | Only the people in this group see this. The coach doesn't read it. |
| Button | Post |

## The week in the game plan

Each item shows the time the thing itself starts, such as ballet at 4:15 pm, and the departure on Today shows when to leave, such as 3:55 pm. This table is every item in the game plan for the demo week, as it stands at 6:00 am on Monday before C-01. Routine items repeat every week, and the others happen this week only. The last column records how each item changes during the demo. A school run shows the time school starts, such as 8:30 am at Westview, and the seed holds the run with its stops, due times and leaving times, which Today uses.

| Day | Time | On screen | Owner | Kind | Status or mark at start | Changes during the demo |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Monday | 7:40 am | Alexis · Carpool to Cedar Grove | Min-jung Park | Routine | | |
| Monday | 8:30 am | Mallory · To Westview | You | Routine | | |
| Monday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Monday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Monday | 3:30 pm | Alexis · Therapy, Brightwater | You | Routine | | From her Google Calendar. Mallory comes along. |
| Tuesday | 7:15 am | Alexis · Orchestra, Cedar Grove | You | Routine | | Mallory rides along. |
| Tuesday | 8:30 am | Mallory · To Westview | You | Routine | | |
| Tuesday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Tuesday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Tuesday | 3:00 pm | Mallory · Second tutoring session, Westview library | Nobody yet | This week | Suggested | In C-04 Charlotte drags it to the following Tuesday. |
| Tuesday | 4:00 pm | Alexis · Violin, Lakeside Strings | You | This week | Changed | Moved from Monday this week only. |
| Wednesday | 7:40 am | Alexis · Carpool to Cedar Grove | Jenna Okafor | Routine | | Becomes Nobody yet when Charlotte shares Jenna's message at 6:16 am. Charlotte takes it in C-03, and it shows You with no status. |
| Wednesday | 8:30 am | Mallory · To Westview | You | Routine | | |
| Wednesday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | |
| Wednesday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Wednesday | 3:45 pm | Alexis · Dance, Studio Ten | You | Routine | | From her Google Calendar. |
| Wednesday | 6:30 pm | Family · Dinner with Claire | You | This week | | |
| Thursday | 7:15 am | Alexis · Orchestra, Cedar Grove | You | Routine | | Mallory stays home with Edward. |
| Thursday | 8:30 am | Mallory · To Westview | You | Routine | | |
| Thursday | 1:30 pm | Alexis · Pick up at Cedar Grove, early dismissal | Nobody yet | This week | Changed | After C-01 it conflicts with yoga. In C-02 Edward is asked, and he says yes at 7:52 am. |
| Thursday | 2:15 pm | Yoga, Willow | You | This week | | Added in C-01, with a conflict with both pickups until Charlotte chooses. In C-06 the coach card recommends moving it to 12:15, and Charlotte chooses Min-jung instead, so it stays at 2:15. |
| Thursday | 2:30 pm | Mallory · Pick up at Westview | You | Routine | | After C-01 it conflicts with yoga. Edward is asked in C-02 and says yes, then can't in C-06. Min-jung is asked in C-06 and says yes at 12:30 pm. |
| Thursday | 4:15 pm | Mallory · Ballet, Studio Ten | You | Routine | | From her Google Calendar. Charlotte and Mallory leave home at 3:55 pm. |
| Friday | 7:40 am | Carpool to Cedar Grove, then Westview | You | Routine | | Charlotte drives Alexis, Ada and Sophie, with Mallory along to Westview. |
| Friday | All day | Mallory · Picture day, Westview | You | This week | | Charlotte adds a note in C-04. |
| Friday | All day | Alexis · Free dress day, Cedar Grove | Nobody yet | This week | Suggested | Pulled from the Cedar Grove newsletter. Charlotte adds it in C-01, and it then shows You as owner and no status. |
| Friday | 9:20 am | Your conference, Cedar Grove | You | This week | | |
| Friday | 2:45 pm | Alexis · Pick up at Cedar Grove | You | Routine | | |
| Friday | 2:30 pm | Mallory · Pick up at Westview | You | This week | | Added in C-06b, when tutoring is skipped this week. |
| Friday | 3:00 pm | Mallory · Tutoring with Ms. Reyes, Westview library | You | Routine | | Charlotte adds a note in C-04. In C-06b it conflicts with the checkup, Charlotte asks Ms. Reyes to skip this week, and it leaves the plan when Ms. Reyes answers. |
| Friday | 3:30 pm | Mallory · Checkup, Northside Pediatrics | You | This week | | Arrives from her Google Calendar in C-06b, in conflict with tutoring. In C-08b Charlotte adds the note "Ask Dr. Ortiz about Mallory's cough". |
| Friday | 3:45 pm | Mallory · Pick up at Westview | You | Routine | | Leaves the plan in C-06b, with tutoring. |
| Saturday | 10:00 am | Library run | Nobody yet | This week | | In C-04 Charlotte puts Edward's name against it, and it shows Asked Edward. In C-04b Edward answers "I've got it" with a note, and it shows "Edward: yes", the note and the Changed mark until she opens it. |

Two tasks are added to the game plan during the demo, each owned by Charlotte with no status: "Call Brightwater and ask for Dana Whitfield" on Wednesday, added in C-05, and "Send Westview the pickup note" on Wednesday, added in C-06. On Wednesday's Today, the first task appears on the checklist as "Call Brightwater", under "Before you leave".

## Travel times

These are the estimates MVP works out from Charlotte's zip code, 00123, for legs from home, and from the places themselves for legs between them. The seed holds them as fixed values, and each leaving time follows the rule in "Dates, times and places".

| From | To | Minutes |
| ----- | ----- | ----- |
| Home | Cedar Grove Elementary, Oak Street gate | 12 |
| Home | Westview Kindergarten | 10 |
| Westview Kindergarten | Cedar Grove Elementary | 12 |
| Home | Willow Yoga | 10 |
| Home | Studio Ten | 15 |
| Home | Lakeside Strings | 15 |
| Home | Brightwater Family Therapy | 20 |
| Home | Northside Pediatrics | 15 |
| Cedar Grove Elementary, Oak Street gate | Brightwater Family Therapy | 20 |
| Brightwater Family Therapy | Lakeside Strings | 15 |

## Messages that arrive this week

| When | From | What it says | What MVP does with it |
| ----- | ----- | ----- | ----- |
| Sunday, 4:10 pm | Cedar Grove weekly newsletter, forwarded automatically | Thursday is an early dismissal at 1:30 pm for conferences, with no after-school care. Conferences run Thursday afternoon and Friday. Friday is a free dress day. The fifth grade goes to Point Reyes on Wednesday. | Marks Thursday's 1:30 pm pickup as changed and suggests Friday's free dress day for Alexis. It leaves out the fifth-grade trip and the links. Charlotte's conference is already booked for Friday at 9:20 am. The read-back opens C-01. |
| Sunday, 6:30 pm | Lakeside Strings, text | Alexis's lesson moves to Tuesday at 4:00 pm this week only. | Moves violin to Tuesday and marks it as changed. |
| Sunday, 7:15 pm | Ms. Reyes, text | "Mallory's doing so well. Could we add a second session each week?" | Suggests Tuesdays at 3:00 pm. Charlotte moves the start in C-04. |
| Monday, 5:50 am, shared by Charlotte from WhatsApp at 6:16 am | Parents' WhatsApp group | Jenna Okafor: "Who can do Wednesday morning? I can't this week." | Opens Wednesday's carpool and becomes the coach card in C-03, with Charlotte's reply drafted. |
| Tuesday, 11:50 am | Brightwater Family Therapy, voicemail | Karen Moss is leaving the practice in four weeks. Brightwater will assign a new therapist, or the family can request one. | Becomes the coach card in C-05. |
| Tuesday, 3:30 pm, forwarded by Charlotte at 3:38 pm | Westview, email to families | Starting this week, changes to who picks a child up go to pickups@westviewk.org rather than the main office address, by 11:00 am on the day. | Updates the pickup contact and rule on the Westview card, marks both as changed, and keeps the old version in the card's history. The read-back is C-05b. |
| Wednesday, 9:00 am | Northside Pediatrics, portal | Mallory's six-year checkup is due. | Nothing yet. Charlotte books the checkup in the portal at 1:05 pm, the portal adds it to her Google Calendar, and MVP picks it up from there in C-06b. |
| Wednesday, 11:40 am | Edward, answering his request in MVP | Edward can't collect Mallory on Thursday, and can still collect Alexis. | Reopens Mallory's pickup in C-06. |

Picture day at Westview on Friday came in an email the week before, so MVP already has it.

## The moments

| ID | When | What happens | What it shows | For the script |
| ----- | ----- | ----- | ----- | ----- |
| C-00 | Monday, Oct. 5, the week before, 8:30 to 8:41 pm | Charlotte names herself and the girls, photographs Westview's rotation calendar, hands it to the coach and sees Mallory's plan for the week, then creates her account, connects her Google Calendar, finishes setup, meets the coach and answers the coach's question on her first board. | Onboarding, from the splash to her first board | Core |
| C-01 | Monday, Oct. 12, 6:15 am | Charlotte reads the newsletter read-back, shares Jenna's message from WhatsApp and talks for twenty seconds, and the coach offers three ways Thursday could go. | Capture, a conflict and options | Core |
| C-02 | Monday, Oct. 12, 6:40 am | Charlotte asks Edward to take Thursday's pickups, and Edward sees the request in his own MVP. | A request and its status | Core |
| C-03 | Monday, Oct. 12, 7:25 am | Charlotte gets both girls out of the house using Today. | The Today board | Core |
| C-03b | Monday, Oct. 12, 2:00 pm | Charlotte's reminder goes off, and she collects both girls and takes them to Brightwater, a run that never passes home. | The afternoon as a line, the Leave sheet, and Now stepping from stop to stop | Core |
| C-04 | Monday, Oct. 12, 8:50 pm | Charlotte works the game plan without the coach. | The week and its changes | Optional |
| C-04b | Tuesday, Oct. 13, 7:05 am | Edward says yes to the library run and adds a note. | A note on a yes, from the recipient's side | Optional |
| C-05 | Tuesday, Oct. 13, 12:20 pm | Alexis's therapist is leaving, and Charlotte asks her village group. | The village | Core |
| C-05b | Tuesday, Oct. 13, 3:40 pm | A Westview email changes the pickup rule, and the coach updates the Westview card. | A school card kept current | Optional |
| C-05c | Tuesday, Oct. 13, 8:15 pm | Charlotte asks Edward and Claire together how to tell Alexis about her therapist. | A group chat with the inner circle | Core |
| C-06 | Wednesday, Oct. 14, 11:45 am | Edward can't collect Mallory after all, and Charlotte chooses a different option from the one the coach recommends. | A change that reopens the plan | Core |
| C-06b | Wednesday, Oct. 14, 1:15 pm | Charlotte books Mallory's checkup outside MVP, it reaches the plan through her Google Calendar, and it runs into Friday's tutoring. | Her calendar keeping the plan current | Core |
| C-06c | Wednesday, Oct. 14, 4:50 pm | Charlotte messages Claire about dinner, and Claire's reply arrives as a notification. | A direct message and the unread mark | Optional |
| C-07 | Wednesday, Oct. 14, 9:10 pm | The title changes to Tonight and the board turns to preparation for Thursday. | Tonight | Optional |
| C-08 | Thursday, Oct. 15, 8:40 pm | Charlotte asks the coach how to get through picture day morning. | A coach answer with an MVP Recommends article | Core |
| C-08b | Thursday, Oct. 15, 9:05 pm | Charlotte asks whether Mallory's cough should keep her home, and the coach names Dr. Ortiz. | The coach naming the right person from her inner circle | Core |

## C-00 · Monday, Oct. 5, 8:30 pm · Charlotte's first night

*The girls are in bed and Charlotte has just downloaded MVP. Before any account, MVP asks her first name and who she is planning for, then for one thing from this week. She photographs the Westview rotation calendar on the fridge, checks the photo, answers the coach's question, and hands it over, and the coach turns it into a plan for Mallory's week before she has created an account. She then creates the account and connects her Google Calendar, the coach brings in what is already there, and she answers its first question on Today. The times below follow the screens in order and add up to about twelve minutes.*

**Onboarding, as shown: the splash · 8:30 pm**

> [MVP mark] Most Valuable Parent

**Onboarding, as shown: the welcome · 8:30 pm**

> [MVP mark]
>
> Busy parents are experts at spinning plates, so hand one of them to your coach.
>
> Start with your first name and zip code, so the coach knows who it's planning with and what's nearby.
>
> Your name: Charlotte
> Helps the coach know who's talking.
>
> Zip code: 00123
> Helps the coach work out travel times and your local school calendar.
>
> [Continue]
>
> Skip for now

**Onboarding, as shown: who are you planning for · 8:31 pm**

> Who are you planning for, Charlotte?
>
> Names and grades are enough for now.
>
> Alexis · 4 selected from Not in school yet · Pre-K · K · 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9–12
> Mallory · K selected from the same choices
>
> + Add another child
>
> [Continue]
>
> Skip for now

*If she skipped the welcome, the heading reads "Who are you planning for?"*

**Onboarding, as shown: show me one thing · 8:31 pm**

> Show me one thing from this week, such as a school handout, an email or a voice note, and I'll turn it into a plan.
>
> [Take a photo] [Attach a file] [Talk or type]
>
> Skip for now

*She taps Take a photo and photographs the calendar, which is headed "Westview Kindergarten" with "October 2026" beneath it.*

**Onboarding, as shown: check the photo · 8:31 pm**

> [the photo, full width]
>
> [Use this photo] [Retake]

*She taps Use this photo, and the thinking screen shows while the coach reads it. Retake reopens the camera. A file or a voice note skips this screen, because there is nothing to frame.*

**Onboarding, as shown: reading · 8:32 pm**

> [MVP mark]
>
> Reading your photo…

**Onboarding, as shown: the read-back · 8:32 pm**

> This is Westview Kindergarten's calendar for October, with a six-day letter rotation. A days are library, so books go back that day. B and D are motor skills and F is science and motor skills, so those three days need sneakers. C is science and E is art and music. The calendar also lists back-to-school night, the field trip to Fir Hollow Farm and the harvest fair.

> This calendar is for
> [Mallory · K] [Alexis · 4]

*Mallory is preselected, because the calendar is for kindergarten and Mallory is the child in kindergarten. Charlotte leaves the choice as it is. The coach then asks its one question, about the only thing it cannot tell from the page.*

> Several days are highlighted in yellow. Do the highlights mean anything to plan around?

> "No, that's just Mallory with a highlighter."

**Onboarding, as shown: the hand-off · 8:33 pm**

> Then the letters are all the rotation needs. I can make a plan for Mallory's week from here, with library and sneaker days on Mallory's checklists and back-to-school night on Thursday. The field trip and the harvest fair are in later weeks, so they stay on the Westview card until then.
>
> [Make Mallory's plan]
>
> Something's not right

*Charlotte taps Make Mallory's plan. "Something's not right" returns her to the input with the read-back still in view, so she can say what to fix and the coach reads it back again.*

**Onboarding, as shown: making the draft · 8:33 pm**

> [MVP mark]
>
> Making Mallory's plan…

**Onboarding, as shown: the draft week · 8:33 pm**

> Mallory's plan for this week
>
> Oct. 6 to 9
>
> Here is the rest of this week for Mallory. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night is on Thursday evening as a suggestion. None of it is saved yet.

| Shows | Example rows |
| ----- | ----- |
| Sneaker days, with "Sneakers" on that morning's checklist | Tuesday · D · Motor skills · Sneakers |
| Each remaining school day with its letter and what it means | Wednesday · E · Art and music |
| Sneaker days, continued | Thursday · F · Science and motor skills · Sneakers |
| The week's school event, marked Suggested | Thursday · Back-to-school night · Suggested |
| Library days, with "Library book" on that morning's checklist | Friday · A · Library · Library book |

**Onboarding, as shown: the account prompt**

> Keep Mallory's plan
>
> Create an account to save this plan and add the rest of your family.
>
> [Create account] [Not now]

*If she taps Not now, everything she has entered is discarded when she closes the app. Charlotte taps Create account, and the five setup screens follow. Her name is already known from the welcome, so the account screen asks only how she signs in. Back from the account screen returns to the draft with the account prompt open.*

**Onboarding, as shown: create your account · 01 of 05 · 8:34 pm**

> Create your account
>
> Email
>
> [Continue with Apple]
>
> [Continue]

*Continue with Apple creates the account with her Apple email address and goes straight to the next screen.*

**Onboarding, as shown: connect your calendar · 02 of 05 · 8:35 pm**

> Connect your calendar
>
> Connect the calendar you already use, and the coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it.
>
> [Google Calendar]
> [Apple Calendar]
> [Outlook]
>
> Not now

*Charlotte taps Google Calendar. A permission screen opens, drawn generic and grayscale, not to Google's brand, and it reads "Most Valuable Parent wants to see your calendar" with Allow and Cancel. She taps Allow and returns to the screen, which now shows the connection.*

> Connect your calendar
>
> Connected · Google Calendar
>
> [Continue]

*If she taps Not now, the next screen follows and connecting stays in Settings. In the prototype the permission screen is staged and connects nothing.*

**Onboarding, as shown: who's on your calendar · 03 of 05 · 8:36 pm**

*Both girls arrive from the children screen with their grades. Mallory's school is filled in from the calendar photo, and Charlotte types Alexis's.*

> Who's on your calendar?
>
> Add each child's school, so the coach knows whose emails and handouts are whose.
>
> Alexis · Fourth grade
> School: Cedar Grove Elementary
>
> Mallory · Kindergarten
> School: Westview Kindergarten · From your calendar photo
>
> + Add another child
>
> [Continue]

*For a parent who skipped the children screen, each row asks for a name, a grade and a school. A child marked "Not in school yet" has an Age field instead of a School field.*

**Onboarding, as shown: your household · 04 of 05 · 8:36 pm**

> Your household
>
> Who's at home with the kids?
> [Two parents] [One parent] [Two homes] [Something else]
>
> Language at home
> [English]
>
> [Continue]

*Charlotte chooses Two parents and leaves English.*

**Onboarding, as shown: who else helps · 05 of 05 · 8:37 pm**

> Who else helps?
>
> Add the adults you count on, such as a partner, a grandparent or a nanny. You decide what each of them sees, and nobody sees anything you don't send them.
>
> Edward · Husband
> Claire · Sister
>
> + Add someone
>
> [Done]

*Edward and Claire become the first members of her inner circle. Min-jung, Jenna and the Cedar Grove parents group come later in her first week.*

**Onboarding, as shown: getting everything ready · 8:38 pm**

> [MVP mark]
>
> Getting everything ready
>
> Saving your account · done
> Adding Alexis and Mallory · done
> Reading your Google Calendar · done
> Setting up Mallory's plan · working
> Getting Today ready · waiting
>
> This takes about a minute. You can put your phone down, and everything you've entered is safe.

*The screen moves on by itself. Greg's Figma screen has its own headline and step labels, and if they differ from these, his win once they are written into section 4.*

**Onboarding, as shown: nice to meet you · 8:39 pm**

> your coach · just now
>
> Nice to meet you, Charlotte.
>
> Here is what I have so far. Alexis is in fourth grade at Cedar Grove and Mallory is in kindergarten at Westview. Mallory has library on A days and needs sneakers on B, D and F days, so Mallory's checklists carry them every week. From your Google Calendar, Alexis has therapy at Brightwater on Mondays and dance at Studio Ten on Wednesdays, and Mallory has ballet at Studio Ten on Thursdays, so those are on the plan too. Edward and Claire are in your inner circle. The next thing I need is Mallory's start time at Westview, and I'll ask for it on Today.
>
> [✓] Remind me the night before a library day
>
> [Next]

*The reminder is ticked already. Tapping Next with it ticked brings up the phone's request to allow notifications, which is the first moment notifications are useful to her. The recap covers the week, the standing rules and what came in from her calendar, and leaves tomorrow to Today, so the two screens don't repeat each other. Greg's Figma version showed "Time saved: 20 minutes", which is left out because nothing in the product measures it.*

**Today, as shown: her first board · 8:40 pm**

> Monday, Oct. 5
>
> [moon icon] Tonight

**Today, as shown: ready tonight**

> Ready tonight
>
> Mallory
> Sneakers by the door

**Today, as shown: tomorrow starts**

| Time | Chips | Item |
| ----- | ----- | ----- |
| Start time needed | Mallory | Westview · D day |
| Start time needed | Alexis | Cedar Grove |

**Today, as shown: the coach card**

> Your coach · for Tuesday
>
> Tomorrow is a D day at Westview. What time does Mallory need to be at school in the morning?
>
> [Answer]

*The board is short on purpose, and nothing on it is invented. The sneakers come from the rotation she photographed, because Tuesday, Oct. 6 is a D day. Both girls come from the children screen, and the two gaps are the next things the coach needs. There is no MVP Recommends card, because MVP has seen nothing yet that would give an article a reason.*

*She taps Answer, and a sheet opens over Today.*

**Today, as shown: the answer sheet · 8:41 pm**

> Mallory's start time at Westview
>
> [time picker, set to 8:30 am]
>
> [Save]

*She sets 8:30 am and taps Save. The sheet closes, and the board changes in one step: Mallory's row fills in, and the coach card turns to the rest of the week. Her answer goes onto the Westview card with the source "From you".*

**Today, as shown: her first board after she answers · 8:41 pm**

| Time | Chips | Item |
| ----- | ----- | ----- |
| 8:15 am | Mallory | To Westview · D day |
| Start time needed | Alexis | Cedar Grove |

> Your coach
>
> The rest of this week is in your game plan. Sneakers go with Mallory on Tuesday and Thursday, and the library book goes back on Friday. Back-to-school night at Westview is on Thursday evening as a suggestion. From your Google Calendar, Alexis has dance at Studio Ten on Wednesday at 3:45, and Mallory has ballet there on Thursday at 4:15.
>
> [Open the game plan]
>
> Change the start time
>
> Westview card updated

*8:15 am is the leaving time, worked out from her zip code: ten minutes to Westview plus five, before the 8:30 am start. It matches the time of Mallory's routine run to Westview in the demo week. The row names no driver, because nobody has said yet who takes Mallory, and it carries no Changed mark, because the answer is hers. The card stays until she leaves Today, by the same rule as a card after a move. "Change the start time" reopens the sheet. Alexis's start time is the coach's next question, and it is asked on Tuesday, outside the demo.*

*If she skipped the capture, her first board has no departures, and the coach card asks for one thing to start with.*

> Your coach
>
> Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
>
> [Take a photo] [Attach a file] [Talk or type]

*The card is the capture here, so the capture bar is hidden. Each button goes straight to its kind of capture.*

## Taught when useful

These lines appear during Charlotte's first week. They are not demo moments, but they are the coach's words, so they are fixed here.

*On Tuesday of her first week, at 12:40 pm, Charlotte copies a message from the parents' WhatsApp group and pastes it into the coach.*

> Min-jung Park: I can drive Monday mornings this term if anyone wants to share. 7:40 from our house.

*The coach reads it back, then adds the line that teaches the share menu.*

> Min-jung offers to drive Alexis on Monday mornings at 7:40 from the Parks' house, and it's on Monday as a suggestion.
>
> Next time, you can send a message straight from WhatsApp. Press and hold the message, tap Forward, tap the share button, and choose MVP.

*This is how the Parks came to drive the Monday carpool.*

*On Wednesday of her first week, at 4:20 pm, she forwards the Cedar Grove newsletter from the Sunday before she started to her MVP address. After the read-back, the coach offers automatic forwarding, and she sets it up, so the demo-week newsletter arrives by itself.*

> This newsletter comes from the same Cedar Grove address every Sunday. If you set your email to forward that address to MVP, each one reaches the coach without you forwarding it.
>
> [Show me how] [Not now]

*For a parent who tapped Not now on the calendar screen, the first time she gives the coach an appointment. Charlotte connected hers, so she never sees this line.*

> Appointments like this one are probably on your calendar already. If you connect your calendar, they reach the plan without you sending them, and you hear from me when one runs into something.
>
> [Connect your calendar] [Not now]

*On Tuesday of her first week, Charlotte adds Min-jung Park from the Team tab after the carpool message. The number matches someone on MVP.*

**Team, as shown: add someone**

> Back · Add someone
>
> Name: Min-jung Park
>
> Mobile number: 555-0104
>
> Who they are: Sophie and Hana's mom · Monday carpool
> Shown under their name on your Team.
>
> [Inner circle] **[Village]**
>
> [Add]

> Min-jung Park is on MVP.
>
> [Done]

*She adds Ms. Reyes the same way, to her inner circle, on Wednesday of her first week. Ms. Reyes's number is not on MVP.*

> Ms. Reyes isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.
>
> [Invite by text] [Not now]

*Charlotte taps Not now. Invite by text would open her messages app with the text below, addressed to the number she entered, for her to send herself.*

> I'm using MVP to plan the girls' week. You can join here: mvp.example/join

*On Thursday of her first week she creates Cedar Grove parents, choosing Min-jung, Jenna, Tom, Grace, Dev, Nina and Rafael, all of whom she had added to her village.*

**Team, as shown: new village group**

> Back · New village group
>
> Group name: Cedar Grove parents
>
> Add people from your village
> [✓] Min-jung Park · [✓] Jenna Okafor · [✓] Tom Alvarez · [✓] Grace Liu · [✓] Dev Raman · [✓] Nina Brooks · [✓] Rafael Costa
>
> Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it.
>
> [Create group]

## C-01 · Monday, Oct. 12, 6:15 am · Charlotte talks to the coach

*The house is quiet and Charlotte opens MVP before anyone is up. The first thing on the Coach tab is the coach's read-back of Sunday's Cedar Grove newsletter, which reached MVP through automatic forwarding.*

**Coach, as shown: the newsletter read-back**

> From the Cedar Grove newsletter, two things are for Alexis. Thursday is an early dismissal at 1:30 for conferences, with no after-school care, so Thursday's pickup has moved. Friday is a free dress day. The fifth-grade trip and the rest of the newsletter are not for Alexis.
>
> From the Cedar Grove newsletter · Sunday
>
> [Add to the plan] [Show the newsletter]

*She taps Add to the plan, and the free dress day moves from Suggested into Friday. Then she opens WhatsApp, presses and holds Jenna's message, and shares it to MVP. MVP shows "Sent to the coach" and returns her to the Coach tab. She taps the microphone and talks for about twenty seconds, correcting herself partway through, because that is how people actually talk to a phone.*

> "Alexis gets out early Thursday, one thirty, it's conferences. Violin moved to Tuesday at four. Mallory needs something for picture day Friday, I think. Edward's home Thursday. And I really want the Thursday yoga class at two, actually it's two fifteen."

*The coach matches what she said to the messages it already has, handles the rest of the week without comment, and names the one day that needs a decision from her. Adding yoga puts it in conflict with both Thursday pickups, and the game plan shows "Conflicts with yoga" on both until she chooses.*

**Game plan, as shown: this week's changes, after the voice note and before she chooses**

| Day | Item | Owner | Status or mark |
| ----- | ----- | ----- | ----- |
| Tuesday | Mallory · Second tutoring session, 3:00 pm | Nobody yet | Suggested |
| Tuesday | Alexis · Violin, Lakeside Strings, 4:00 pm | You | Changed |
| Wednesday | Alexis · Carpool to Cedar Grove, 7:40 am | Nobody yet | |
| Thursday | Alexis · Pick up at Cedar Grove, early dismissal, 1:30 pm | Nobody yet | Changed · Conflicts with yoga |
| Thursday | Yoga, Willow, 2:15 pm | You | Conflicts with both pickups |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | You | Conflicts with yoga |
| Saturday | Library run | Nobody yet | |

> Thursday is the day that needs you. Alexis is out of Cedar Grove at 1:30 and Mallory is out of Westview at 2:30, so both pickups land during your 2:15 yoga class at Willow. The rest of the week already fits. Violin is at Lakeside Strings on Tuesday at 4:00 this week, and picture day at Westview is Friday, so Mallory's outfit goes on Thursday night's list.

*The coach offers three ways Thursday could go and recommends one. Each alternative is a real choice that costs her something different.*

> **Edward takes both pickups.** Recommended
> Edward is home Thursday and free from 1:15. Edward collects Alexis at the Oak Street gate at 1:30 and Mallory at Westview at 2:30, so Alexis is home by 1:45 and Mallory by 2:45. You leave for yoga at 2:00 and you are back at 3:30 to take Mallory to ballet. I would pick this one, because Edward is already home and nobody outside the house is asked for anything.
>
> **Alexis goes home with the Okafors.**
> Jenna Okafor collects Ada at the same gate at 1:30 and lives five minutes from you. Edward then only has Mallory at 2:30, which keeps his early afternoon free. It means asking Jenna for a favor in a week when she has already said she is stretched.
>
> **You do both pickups and move yoga.**
> Willow has a class at 8:30 on Saturday morning. The Friday 9:00 class runs into your conference at Cedar Grove at 9:20, so Saturday is the one that works.

*Charlotte taps the first option. The coach lays out the day and is plain that none of it holds until Edward answers.*

> Here is Thursday with Edward on both pickups. Edward is at the Oak Street gate at 1:30 for Alexis and at Westview at 2:30 for Mallory. You leave for Willow at 2:00, you are home at 3:30, and you leave with Mallory and the ballet bag at 3:55. Edward has not seen any of this yet, so both pickups stay open until Edward answers.
>
> [Ask Edward]

## C-02 · Monday, Oct. 12, 6:40 am · Charlotte asks Edward

*Tapping Ask Edward opens a message the coach has drafted in Charlotte's voice. She reads it, changes anything she wants to change, and sends it herself.*

**Charlotte's screen, as shown**

> To Edward
>
> Can you take both pickups Thursday? Cedar Grove lets out at 1:30 for conferences, so Alexis will be at the Oak Street gate at 1:30, and Mallory is at Westview at 2:30 as usual. I'm at yoga from 2:15 and back by 3:30, then I'll take Mallory to ballet. Snacks are in the pantry.
>
> Edward answers each item with
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm · [I've got it] [I can't do this]
> Thursday · Mallory · Pick up at Westview, 2:30 pm · [I've got it] [I can't do this]
>
> You send this. MVP never sends anything for you.
>
> [Send]

*Edward has MVP, so the request arrives as a card in his own MVP with a notification on his phone. He sees this request and nothing else of Charlotte's plan.*

> Charlotte asked you about Thursday's pickups.

**Edward's screen, as shown**

*Edward's own Today shows his monogram, E, and the phase title "This morning". It holds only the items he owns and the requests Charlotte sends him.*

> Monday, Oct. 12
>
> [sunrise icon] This morning
>
> Request from Charlotte · 6:40 am
>
> Can you take both pickups Thursday? Cedar Grove lets out at 1:30 for conferences, so Alexis will be at the Oak Street gate at 1:30, and Mallory is at Westview at 2:30 as usual. I'm at yoga from 2:15 and back by 3:30, then I'll take Mallory to ballet. Snacks are in the pantry.
>
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> [I've got it] [I can't do this]
>
> Thursday · Mallory · Pick up at Westview, 2:30 pm
> [I've got it] [I can't do this]
>
> Add a note for Charlotte

*Both pickups show "Asked Edward" in the game plan. Edward answers at 7:52 am, when he is up, by tapping "I've got it" on each item. He adds no note.*

**Edward's screen, as shown: after he answers · 7:52 am**

> Request from Charlotte · 6:40 am
>
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> I've got it · Change
>
> Thursday · Mallory · Pick up at Westview, 2:30 pm
> I've got it · Change
>
> Charlotte can see your answers. If anything changes, change your answer here.

*Charlotte gets a notification, and both pickups change to "Edward: yes".*

> Edward: yes to both pickups on Thursday.

## C-03 · Monday, Oct. 12, 7:25 am · Getting the girls out the door

*This is how Charlotte sends two girls to two schools prepared. The next departure leads the screen with its checklist, and the rest of Monday sits beneath it as a list. Today shows Monday and nothing else. The coach card is the only part that can reach beyond today, and here it holds Wednesday's carpool.*

**Today, as shown: the header**

> Monday, Oct. 12
>
> [sunrise icon] This morning

**Today, as shown: now**

> Home → Cedar Grove
>
> 7:40 am
> in 15 min
>
> With The Parks · Starts 8:00
>
> [perforation]
>
> Alexis
> Lunch
> Library book, due today
> Water bottle
>
> [Remind me]

*Alexis rides with the Parks, so the pass shows With and Starts instead of Drive and Arrive, and Now offers only Remind me.*

**Today, as shown: the coach card**

> Your coach · for Wednesday
>
> Jenna Okafor can't drive Wednesday morning and is asking the group. You're free at 7:40 on Wednesday, so I'd take it. A reply to the group is ready for you to send.
>
> [See reply]
>
> Not this week

**Today, as shown: later today**

| Time | Chips | Item |
| ----- | ----- | ----- |
| 8:30 am | Mallory | To Westview · B day |
| 2:30 pm | Mallory | Pick up at Westview |
| 2:45 pm | Alexis | Pick up at Cedar Grove |
| 3:30 pm | Both | Brightwater, with the calendar mark |

**Today, as shown: MVP Recommends**

> MVP Recommends · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove conferences are this week.

*Charlotte ticks the library book and the water bottle as Alexis heads out. At 7:40 am the Parks collect Alexis, so Alexis's departure leaves Now, and Mallory's moves up: 8:15 am, "in 35 min", with Mallory's own group under the perforation: Lunch, "Sneakers, it's a motor skills day" and "Reading folder, signed". Charlotte drives this one, so the pass reads "Home → Westview", with Drive 10 min, Arrive 8:25 and Starts 8:30, and Now gains Directions. Later today then shows "1 done this morning". If she taps the departure time, the Leave sheet shows her morning run, home to Westview and back, and she closes it without changing anything, because nothing in Monday morning gives her a reason to leave later.*

*She taps See reply on the coach card. The reply is in her voice. The WhatsApp group lives outside MVP, so MVP hands the text to WhatsApp and she sends it from there. Wednesday's carpool shows her as the owner, with no status, as soon as she chooses to take it. Because MVP can't see WhatsApp, the handoff also leaves "Reply to the parents' group" on her list, and she ticks it off when she is back.*

> To Cedar Grove 4th Grade Parents
>
> I can do Wednesday. Same time, 7:40?
>
> You send this. MVP never sends anything for you.
>
> [Send from WhatsApp]

## C-03b · Monday, Oct. 12, 2:00 pm · The afternoon run

*This is the afternoon as a line. Charlotte collects Mallory at Westview and Alexis at Cedar Grove, and takes both girls straight to Alexis's therapy at Brightwater, so the run never passes home until it ends. She set a reminder from Now at 1:40 pm, and the moment opens on it. Now shows one leg at a time and steps down the line as each stop comes due.*

**The reminder, as shown · 2:00 pm**

> Leave in 15 min for Westview, then Brightwater
>
> Take Mallory's book for the waiting room at Brightwater.
>
> [Directions] [Snooze 5 min]

**Today, as shown: the header · 2:05 pm**

> Monday, Oct. 12
>
> [sun icon] This afternoon

**Today, as shown: now**

> Home → Westview
> Then Cedar Grove, 2:45
>
> 2:15 pm
> in 10 min
>
> Drive 10 min · Arrive 2:25 · Pickup 2:30
>
> [perforation]
>
> Mallory
> A book for the waiting room at Brightwater
>
> [Remind me] [Directions]

*The reminder has gone off, so the button reads Remind me again. Directions opens her maps app with Westview, Cedar Grove and Brightwater in order.*

**Today, as shown: later today**

*Beside the heading: 2 done today.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 2:30 pm | Mallory | Pick up at Westview |
| 2:45 pm | Alexis | Pick up at Cedar Grove |
| 3:30 pm | Both | Brightwater, with the calendar mark |

**Today, as shown: MVP Recommends**

> MVP Recommends · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove conferences are this week.

*There is no coach card, because the coach needs nothing from her this afternoon. She taps the departure time, and the Leave sheet rises.*

**Today, as shown: the Leave sheet · 2:06 pm**

> When to leave
>
> This afternoon · 3 stops

| Station | Item | Leave |
| ----- | ----- | ----- |
| Home | | Leave at 2:15 pm |
| Westview | 2:30 pm · [Mallory] Pick up at Westview | Leave at 2:30 pm |
| Cedar Grove | 2:45 pm · [Alexis] Pick up at Cedar Grove | Leave at 3:05 pm |
| Brightwater | 3:30 pm · [Both] Therapy, with the calendar mark | Leave at 4:15 pm |
| Home | | Back about 4:35 pm |

> [Save]

*Save stays inactive until she changes a time. Brightwater's start time reads "Change this in Google Calendar." because the session comes from her calendar. No backups are written for this run, so the sheet has no Plan B or Plan C. Charlotte closes the sheet without changing anything.*

**Today, as shown: now, at 2:31 pm**

*Westview is due, so the first leg leaves Now and the next leg takes over from Westview.*

> Westview → Cedar Grove
> Then Brightwater, 3:30
>
> 2:30 pm
> Time to leave
>
> Drive 12 min · Arrive 2:42 · Pickup 2:45
>
> [perforation]
>
> [Directions]

*Beside Later today: 3 done today. Remind me has gone, because the leaving time has come.*

**Today, as shown: now, at 2:46 pm**

> Cedar Grove → Brightwater
> Then home, about 4:35
>
> 3:05 pm
> in 19 min
>
> Drive 20 min · Arrive 3:25 · Starts 3:30
>
> [perforation]
>
> Mallory
> A book for the waiting room at Brightwater
>
> [Remind me] [Directions]

*Beside Later today: 4 done today. The book stays on the checklist until she ticks it.*

**Today, for the wireframes only: running late · 2:21 pm**

*This board is not part of the moment. It shows the first leg when Charlotte has not left by the end of its five minutes.*

> Home → Westview
> Then Cedar Grove, 2:45
>
> 2:15 pm
> Time to leave
>
> Drive 10 min · Arrive 2:31 · Pickup 2:30
>
> [perforation]
>
> Mallory
> A book for the waiting room at Brightwater
>
> [Directions]

*Arrive is set in the warning ink with a clock icon, because 2:31 falls after the 2:30 pickup. From 2:15 to 2:20 the board reads the same with Arrive at 2:25 to 2:30 in ordinary ink, because the five minutes MVP added mean she is still on time.*

## C-04 · Monday, Oct. 12, 8:50 pm · Charlotte works the game plan

*Charlotte opens the game plan once the girls are in bed, and everything she does here she does without the coach. The point is that the plan belongs to her. The coach suggests, and the game plan is where she decides. It is also where she sees what the rest of the week still needs from her.*

**Game plan, as shown: this week's changes, when she opens it**

| Day | Item | Status |
| ----- | ----- | ----- |
| Tuesday | Mallory · Second tutoring session, 3:00 pm | Suggested |
| Tuesday | Alexis · Violin, Lakeside Strings, 4:00 pm | Changed |
| Thursday | Alexis · Pick up at Cedar Grove, 1:30 pm | Edward: yes |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | Edward: yes |
| Saturday | Library run | Nobody yet |

Tuesday already has two school runs before 8:30 am and violin at 4:00 pm, so Charlotte drags the suggested tutoring session onto the following Tuesday, where it starts next week. She adds a note to Friday's tutoring session, "Tell Ms. Reyes Tuesdays at 3:00 work from next week," so that she can say it in person.

She taps Friday's picture day and adds "Green dress, hanging in the laundry room," so that it is written down rather than remembered.

She puts Edward's name against Saturday's library run. Edward has MVP, so he receives a request card that reads "Can you do the library run Saturday morning?", and the item shows "Asked Edward".

She opens violin, which clears its Changed mark.

**Game plan, as shown: this week's changes, when she closes it**

| Day | Item | Status |
| ----- | ----- | ----- |
| Thursday | Alexis · Pick up at Cedar Grove, 1:30 pm | Edward: yes |
| Thursday | Mallory · Pick up at Westview, 2:30 pm | Edward: yes |
| Saturday | Library run | Asked Edward |

## C-04b · Tuesday, Oct. 13, 7:05 am · Edward takes the library run

*Edward opens the request Charlotte sent from the game plan the night before. He says yes and adds a note, which shows the one path a request can take that no other moment uses: a note with a yes. The note travels with the answer and changes nothing in the plan by itself.*

**Edward's screen, as shown**

> Request from Charlotte · Monday, 8:52 pm
>
> Can you do the library run Saturday morning?
>
> Saturday · Library run, 10:00 am
> [I've got it] [I can't do this]
>
> Add a note for Charlotte

*Edward taps "I've got it" and writes a note.*

> I'll take Mallory too, she wants new books.

*Charlotte gets the notification "Edward: yes to Saturday." In the game plan the library run shows "Edward: yes" with the note beneath it and the Changed mark, and the mark clears when she opens it. Mallory is not added to the item, because a note never edits the plan. If Charlotte wants Mallory on it, she adds her.*

**Game plan, as shown: the library run after Edward answers**

| Day | Item | Owner | Status or mark |
| ----- | ----- | ----- | ----- |
| Saturday | Library run, 10:00 am | Edward | Edward: yes · Changed |
| | Edward: I'll take Mallory too, she wants new books. | | |

## C-05 · Tuesday, Oct. 13, 12:20 pm · Asking the village

*Brightwater's voicemail arrived at 11:50 am. The coach does not look up therapists or recommend people, so it tells Charlotte who can help with each part of this, and names Karen as the right person for Alexis's side of it. The card concerns no particular day, so its label names none. The dateline reads "Tuesday, Oct. 13". Now, Later today and MVP Recommends follow Tuesday's items in the game plan, and this moment fixes only the coach card.*

**Today, as shown: the coach card**

> Your coach
>
> Karen Moss is leaving Brightwater in four weeks. Brightwater will assign Alexis a new therapist, and you can ask for a particular person instead of taking the first opening. Karen is the right person to help plan how Alexis finishes, so it is worth raising at Monday's session. For names, the Cedar Grove parents in your village know more than MVP does.
>
> [Ask my village]
>
> Remind me Monday

*She taps Ask my village, which opens a new post on the Team tab, drafted in her words and addressed to her village group. She can change any of it before it goes.*

**Team, as shown: the new post**

> New message
>
> Inner circle | **Village**
>
> To: Cedar Grove parents
>
> Alexis's therapist at Brightwater is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater if we can.
>
> Only the people in this group see this. The coach doesn't read it.
>
> [Post]

*Two replies arrive that afternoon. The screen below is as Charlotte sees it at 5:00 pm on Tuesday, with the newest reply first. The coach does not read them. Charlotte reads them herself, then adds "Call Brightwater and ask for Dana Whitfield" to Wednesday in the game plan.*

*Each reply arrives as a notification, such as "Jenna Okafor replied to your post in Cedar Grove parents." at 1:40 pm, and the group's row on the Team tab shows "1 new" until she opens it.*

**Team, as shown: the post at 5:00 pm**

> **You** · 12:20 pm
> Alexis's therapist at Brightwater is leaving next month. Has anyone seen someone there they'd recommend for a ten-year-old? She's been going about a year and I'd like to keep her at Brightwater if we can.
>
> **Min-jung Park** · 3:05 pm
> Sophie sees Dana Whitfield there and really likes her. She had a wait list in the spring, so I'd ask soon.
>
> **Jenna Okafor** · 1:40 pm
> Another vote for Dana. Ask for a Monday after school if you can get one, the evening sessions are hard on a school night.
>
> [Reply]

## C-05b · Tuesday, Oct. 13, 3:40 pm · The Westview card changes

*Westview emails every family about a new rule for pickup changes, and Charlotte forwards it to her MVP address from the car line. The email holds no event for the game plan. It changes reference, so the coach files it on the Westview card and says what changed. The next day, in C-06, the pickup note goes to the new address, which shows why the card matters.*

**Coach, as shown: the read-back**

> From the Westview email, one change for the Westview card. Changes to who picks Mallory up now go to pickups@westviewk.org, by 11:00 on the day, instead of the office address. The card shows the new rule and keeps the old one in its history.
>
> From Westview · email, Tuesday
>
> [Open the Westview card] [Show the email]

*She taps Open the Westview card. The pickup contact and the pickup rule both carry the Changed mark, and both clear once she has seen them.*

**Kids, as shown: the Westview card, contacts and rules after the change**

| Section | Content |
| ----- | ----- |
| Contacts | Changes to who picks up: pickups@westviewk.org, by 11:00 am on the day · Changed |
| Rules | Children are released only to people on the pickup list. Changes to who picks up must reach pickups@westviewk.org by 11:00 am on the day. · Changed |
| Earlier version | Changes to who picks up: office@westviewk.org, in writing · Until Tuesday |
| Documents | Pickup change email, Tuesday · Rotation calendar, photo, last week · Family contact list, photo, last week |

## C-05c · Tuesday, Oct. 13, 8:15 pm · Asking Edward and Claire

*The village gave Charlotte a name for Alexis's next therapist. How to tell Alexis is a different kind of question, and it belongs with the people closest to the family, so she takes it to her inner circle rather than the village or the coach. It is her first chat, and she starts it from Team.*

*She opens Team, taps New message and leaves Inner circle chosen. She ticks Edward and Claire, which is everyone in her inner circle on MVP. Dr. Ortiz, Karen Moss and Ms. Reyes are listed beneath them as "Not on MVP".*

**Team, as shown: the composer**

> New message
>
> **Inner circle** | Village
>
> To
> [✓] Everyone on MVP
> [✓] Edward · Your husband
> [✓] Claire · Your sister
>
> Dr. Lena Ortiz · Not on MVP
> Karen Moss · Not on MVP
> Ms. Reyes · Not on MVP
>
> People who aren't on MVP can't be in a chat. Call or text them from their page.
>
> Karen is leaving Brightwater next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
>
> Only Edward and Claire see this chat. The coach doesn't read it.
>
> [Send]

*"Everyone on MVP" shows as ticked once both are chosen, because Edward and Claire are everyone in her inner circle on MVP. She taps Send, and the chat opens.*

**Team, as shown: the chat at 8:42 pm**

> Back · Edward and Claire
>
> Only you, Edward and Claire see this chat. The coach doesn't read it.
>
> **You** · 8:15 pm
> Karen is leaving Brightwater next month. The Cedar Grove parents say Dana Whitfield is good, so I'm calling tomorrow to ask for her. How should we tell Alexis? I'd like to do it before Monday's session.
>
> **Claire** · 8:31 pm
> Tell her together, and tell her Karen is helping choose who's next. At ten she'll want to know she has a say.
>
> **Edward** · 8:40 pm
> Agree. Sunday night, not before school. I'll be home.
>
> **You** · 8:42 pm
> Sunday night it is.
>
> Message · [Send]

*Messages are listed oldest first, because a chat is read as a conversation, while the group page lists posts newest first. Claire's and Edward's messages each arrive as a notification, such as "Claire: Tell her together, and tell her Karen is helping choose who's next." Nothing in the chat reaches the plan. If Charlotte wants Sunday night on the plan, she adds it herself, and in the demo she doesn't.*

## C-06 · Wednesday, Oct. 14, 11:45 am · Edward can't do Mallory

*Edward was asked on Monday and said yes, and now his Thursday has changed. At 11:40 am he opens the request, taps Change on Mallory's pickup, chooses "I can't do this" and adds a note, and keeps "I've got it" on Alexis's. Charlotte gets the notification "Edward changed his answer for Thursday." This is the moment that shows nothing in the plan is ever settled. Today shows Wednesday, and Thursday's reopened pickup reaches Charlotte through the coach card, which says what Edward can't do and recommends one way through. In the game plan, Mallory's pickup now shows "Edward can't" and Alexis's still shows "Edward: yes". This board is the one the design rounds drew as the example of the quiet layout.*

**Edward's screen, as shown: changing his answer · 11:40 am**

> Request from Charlotte · Monday, 6:40 am
>
> Thursday · Alexis · Pick up at Cedar Grove, 1:30 pm
> I've got it · Change
>
> Thursday · Mallory · Pick up at Westview, 2:30 pm
> [I've got it] [I can't do this]
>
> Add a note for Charlotte
> Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30.
>
> [Send answer]

**Today, as shown: the header**

> Wednesday, Oct. 14
>
> [sunrise icon] This morning

**Today, as shown: now**

> Home → Westview
> Then Cedar Grove, 2:45
>
> 2:15 pm
> in 2 hr 30 min
>
> Drive 10 min · Arrive 2:25 · Pickup 2:30
>
> [perforation]
>
> Alexis
> Dance bag
>
> Before you leave
> Call Brightwater
>
> [Remind me] [Directions]

**Today, as shown: the coach card**

> Your coach · for Thursday
>
> Edward can't get Mallory at 2:30 on Thursday. I'd move your yoga to the 12:15 class, so you can collect Mallory yourself.
>
> [Move yoga to 12:15]
> Updates your game plan
>
> Other options

**Today, as shown: later today**

*Beside the heading: 2 done this morning.*

| Time | Chips | Item |
| ----- | ----- | ----- |
| 2:30 pm | Mallory | Pick up at Westview |
| 2:45 pm | Alexis | Pick up at Cedar Grove |
| 3:45 pm | Both | Studio Ten, with the calendar mark |
| 6:30 pm | Family | Dinner with Claire |

**Today, as shown: MVP Recommends**

> MVP Recommends · 3 min read
>
> Fifteen minutes with the teacher: making a conference count
>
> Because Cedar Grove conferences are this week.

*The button on the card is a shortcut to the coach's recommended option, and "Other options" holds the backups. The product offers both routes, and the demo takes the second. Charlotte taps Other options, and Thursday's Leave sheet rises on Today, scrolled to the coach's backups.*

**Today, as shown: Thursday's Leave sheet, at its foot**

> When to leave
>
> Thursday afternoon
>
> Other ways this could go
>
> Plan B · Min-jung collects Hana at Westview at 2:30 and lives two streets from you, so she can bring Mallory home by 2:45. You keep the 2:15 class.
> [Ask Min-jung]
>
> Plan C · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> [Skip yoga this week]
>
> Why

*Above the backups, the sheet draws Charlotte's Thursday afternoon from the week table and the travel times: home, leaving at 2:00 pm, then Willow for yoga at 2:15 pm with "Conflicts with Mallory's pickup", then home, back about 3:25 pm. Plan B is an ask, so choosing it opens the draft below and Mallory's pickup shows Min-jung's initial and an hourglass once it is sent. Plan C depends on nobody. Why opens the coach's full message on the Coach tab, which is unchanged.*

**Coach, as shown: the full message**

> Thursday · Edward: "Got pulled into a 2:00 Thursday, can't get Mallory at 2:30. I can still do Alexis at 1:30."
>
> Edward can still collect Alexis at 1:30, but Mallory's pickup at Westview at 2:30 is open again. Edward is on a call in the house from 2:00, and Alexis is home from 1:45.
>
> **Take the 12:15 class at Willow.** Recommended
> Willow has a 12:15 class on Thursday that finishes at 1:15. You collect Mallory at 2:30 yourself, and nobody else is asked for anything. I would pick this one.
>
> **Ask Min-jung to bring Mallory home.**
> Min-jung collects Hana at Westview at 2:30 and lives two streets from you, so Mallory is home by 2:45. You keep the 2:15 class.
>
> **Collect Mallory yourself and skip yoga this week.**
> Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.

*Charlotte taps Ask Min-jung under Plan B. She knows things the coach does not, in this case that the 12:15 class is not one she likes, and the demo shows that choosing against the recommendation is normal. The sheet closes and Min-jung's draft opens, as below. When she has sent it, she is back on Today, and the coach card says how Thursday stands and what only she can do.*

**Today, as shown: the coach card after Plan B**

> Your coach · for Thursday
>
> Mallory goes home with Min-jung once Min-jung says yes. Westview only releases Mallory to people on the pickup list, so Westview needs a note from you by 11:00 on Thursday.
>
> [Note to Westview]
> Opens an email for you to send to Westview
>
> Game plan updated

*The card has no Undo, because the request to Min-jung has already gone. The full version of the day, with Min-jung dropping Mallory at the house by 2:45 and the 2:15 class kept, is in the coach's message on the Coach tab.*

*Both messages are drafted in Charlotte's voice, and she sends each one herself. Min-jung has MVP, so her request arrives as a card in her own MVP. The Westview office is outside MVP, so MVP hands the note to Charlotte's email app, addressed to the pickup changes contact on the Westview card, which the Westview email updated in C-05b. Sending it adds "Send Westview the pickup note" to her list, where it stays until she ticks it off.*

> To Min-jung Park
>
> Hi Min-jung, could you bring Mallory home with Hana on Thursday? Edward got pulled into a meeting and I'm at yoga until 3:15. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
>
> Min-jung answers with
> [I've got it] [I can't do this]

> To Westview Kindergarten, pickup changes · pickups@westviewk.org
>
> Min-jung Park will pick up Mallory from Room 3 on Thursday at 2:30. Please let me know if you need anything else from me. Charlotte

**Min-jung's screen, as shown: the request · 11:50 am**

*Charlotte sends the request to Min-jung at 11:50 am. Min-jung has MVP, so it arrives as a card in her MVP with the notification "Charlotte asked you about Thursday's pickup." She sees this request and nothing else of Charlotte's plan.*

> Request from Charlotte · 11:50 am
>
> Hi Min-jung, could you bring Mallory home with Hana on Thursday? Edward got pulled into a meeting and I'm at yoga until 3:15. We're on Linden, right on your way, and Edward will be home to meet her. Happy to return the favor.
>
> Thursday · Mallory · Pick up at Westview, 2:30 pm
> [I've got it] [I can't do this]
>
> Add a note for Charlotte

*Min-jung taps "I've got it" at 12:30 pm and adds no note. Her card then shows "I've got it · Change" and the line "Charlotte can see your answers. If anything changes, change your answer here."*

*Min-jung answers at 12:30 pm, and Mallory's pickup changes to "Min-jung: yes".*

*If she had tapped Move yoga to 12:15 instead, yoga would move to 12:15 on Thursday and Mallory's pickup would change from "Edward can't" to "You", with no Changed mark, because the change is hers. Alexis's pickup would stay "Edward: yes". Nothing would change on her Google Calendar, because yoga is not on it, and Willow would still need booking. The card would then read as below until she leaves Today, and Undo would put yoga back at 2:15 and Mallory's pickup back to "Edward can't".*

> Your coach · for Thursday
>
> Yoga is at 12:15 on Thursday now, and you collect Mallory at 2:30. Book the class with Willow so your spot is held.
>
> [Book at Willow]
>
> Undo
>
> Game plan updated

*If she taps Remind me on Now, the sheet below opens, with the first choice preselected. Charlotte does not set a reminder on Wednesday, so the set state and the notification here exist for the wireframes.*

> Remind me to leave
>
> For 2:15 pm · Westview
>
> At 2:00 · 15 min before
> At 1:45 · 30 min before
> When it's time to leave · at 2:15, with traffic checked
>
> [Set reminder]

*Once set, the button reads "Reminder at 2:00", and the pass carries the reminder nowhere else. Reopening the sheet shows 15 min before selected, the button "Update reminder" and the link "Remove reminder". At 2:00 pm the notification arrives.*

> Leave in 15 min for Westview, then Cedar Grove
>
> Take Alexis's dance bag, and call Brightwater before you go.
>
> [Directions] [Snooze 5 min]

## C-06b · Wednesday, Oct. 14, 1:15 pm · A checkup lands on Friday

*Northside's portal reminded Charlotte at 9:00 am that Mallory's six-year checkup is due. At lunch she books it in the portal herself, taking the first opening, Friday at 3:30 pm, and the portal adds it to her Google Calendar. She sends MVP nothing. MVP reads the new event from her calendar, sees that it runs into Mallory's tutoring, and the coach card turns to Friday. This is the moment that shows her calendar keeping the plan current without any extra work from her.*

**Today, as shown: the header**

> Wednesday, Oct. 14
>
> [sun icon] This afternoon

**Today, as shown: now**

> Home → Westview
> Then Cedar Grove, 2:45
>
> 2:15 pm
> in 1 hr
>
> Drive 10 min · Arrive 2:25 · Pickup 2:30
>
> [perforation]
>
> Alexis
> Dance bag
>
> Before you leave
> Call Brightwater
> Send Westview the pickup note
>
> [Remind me] [Directions]

**Today, as shown: the coach card**

> Your coach · for Friday
>
> Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar, and it overlaps tutoring with Ms. Reyes. I'd skip tutoring this Friday, because Mallory's new Tuesday session with Ms. Reyes starts next week.
>
> [Skip tutoring this Friday]
> Opens a text for you to send to Ms. Reyes
>
> Other options

**Today, as shown: later today**

Later today is the same as in C-06, with "2 done today" beside the heading, because C-06b is after noon.

*Other options opens Friday's Leave sheet on Today, scrolled to the coach's backups. There is one honest backup, and the sheet says so.*

**Today, as shown: Friday's Leave sheet, at its foot**

> When to leave
>
> Friday afternoon
>
> Other ways this could go
>
> Plan B · Call Northside for a time after 3:45 or on another day, and Friday stays as it is.
> [Call Northside]
>
> I don't see another way that keeps both on Friday.
>
> Why

*Above the backup, the sheet draws Friday afternoon as it stands: home, then Cedar Grove for Alexis at 2:45, then home, then Northside for the checkup at 3:30 with "Conflicts with tutoring". Call Northside opens her phone app with Northside's number, staged in the prototype, and a call leaves no task. Why opens the coach's full message on the Coach tab.*

**Coach, as shown: the full message**

> Friday · Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar. Mallory is at tutoring with Ms. Reyes in the Westview library from 3:00 to 3:45, so the two overlap.
>
> **Skip tutoring this Friday.** Recommended
> You collect Mallory at Westview at 2:30 and Alexis at Cedar Grove at 2:45, and you leave home for Northside at 3:10. Ms. Reyes gets a text from you. I would pick this one, because Mallory's new Tuesday session starts next week, so Mallory sees Ms. Reyes again in four days.
>
> **Move the checkup.**
> Call Northside for a time after 3:45 or on another day, and Friday stays as it is. The call goes on your list for this afternoon.

*In the game plan, the checkup and the tutoring session both show "Conflicts with" the other until Charlotte chooses. The checkup carries the calendar mark and the source link "From your Google Calendar". Charlotte taps Skip tutoring this Friday on the card, and the coach drafts the text. Ms. Reyes doesn't have MVP, so the request goes as a text message with a link to the single web page, the route nobody else in Charlotte's week uses.*

> To Ms. Reyes
>
> Hi Ms. Reyes, Mallory has her checkup on Friday at 3:30, so she'll miss tutoring this week. Tuesdays at 3:00 work for us from next week. Thank you, Charlotte
>
> Ms. Reyes answers with
> [I've got it] [I can't do this]
>
> You send this. MVP never sends anything for you.
>
> [Send]

*She sends it at 1:20 pm, and Friday's tutoring shows "Asked Ms. Reyes". Ms. Reyes gets a text message from MVP with the link.*

**Ms. Reyes's phone, as shown: the text · 1:20 pm**

> Charlotte sent you a request through MVP. You can answer here: mvp.example/r/k7m2

**Ms. Reyes's web page, as shown**

> Request from Charlotte · 1:20 pm
>
> Hi Ms. Reyes, Mallory has her checkup on Friday at 3:30, so she'll miss tutoring this week. Tuesdays at 3:00 work for us from next week. Thank you, Charlotte
>
> Friday · Mallory · Tutoring with Ms. Reyes, Westview library, 3:00 pm
> [I've got it] [I can't do this]
>
> Add a note for Charlotte
>
> You don't need MVP to answer.

*Ms. Reyes answers "I've got it" on the web page at 3:10 pm. The page then shows her answer with a Change link and the line "Charlotte can see your answer. If anything changes, change your answer here." Charlotte gets the notification "Ms. Reyes: yes to Friday." Friday's tutoring and the 3:45 pm pickup leave the plan, Mallory's pickup moves to 2:30 pm, and the checkup stays at 3:30 pm. The same text covers the note Charlotte left on Friday's tutoring in C-04, so that note goes too. MVP changes nothing on her Google Calendar.*

## C-06c · Wednesday, Oct. 14, 4:50 pm · A message to Claire

*Dinner with Claire is at 6:30 pm. Charlotte checks in with her sister directly, which shows a direct message started from a person's page and a reply arriving while she is elsewhere in the app.*

*She opens Team, taps Claire and taps Message. There is no chat with Claire alone yet, so the composer opens with Inner circle chosen and only Claire ticked.*

> New message
>
> To: Claire
>
> Still on for 6:30 tonight?
>
> Only Claire sees this chat. The coach doesn't read it.
>
> [Send]

*At 4:58 pm Claire answers. Charlotte is on Today, so the reply arrives as a notification, the Team tab gains a dot, and the chat's row shows "1 new" until she opens it.*

> Claire: Yes, see you at 6:30. I'll bring dessert.

**Team, as shown: the chat**

> Back · Claire
>
> Only you and Claire see this chat. The coach doesn't read it.
>
> **You** · 4:50 pm
> Still on for 6:30 tonight?
>
> **Claire** · 4:58 pm
> Yes, see you at 6:30. I'll bring dessert.
>
> Message · [Send]

## C-07 · Wednesday, Oct. 14, 9:10 pm · Tonight

*After dinner the title changes to Tonight and Today turns to tonight's preparation. It shows what has to be ready tonight and how tomorrow starts, and it leaves the rest of Thursday to the game plan. Everyone asked about Thursday has answered, so the coach needs nothing from her and no coach card appears.*

**Today, as shown: the header**

> Wednesday, Oct. 14
>
> [moon icon] Tonight

**Today, as shown: ready tonight**

> Ready tonight
>
> Alexis
> Violin, by the door
> Orchestra folder, by the door
>
> Mallory
> Ballet bag packed for 3:55 pm
>
> Both
> Lunches

**Today, as shown: tomorrow starts**

| Time | Departure | Checklist |
| ----- | ----- | ----- |
| 6:55 am | You take Alexis to orchestra | [Alexis] Violin · [Alexis] Orchestra folder · [Alexis] Lunch · Early day, out at 1:30 pm |
| 8:15 am | You take Mallory to Westview · E day | [Mallory] Lunch |


*Each row opens the Leave sheet for that leg, so she can change tomorrow's leaving time tonight. On screen, the checklist under each departure is grouped by child, as in Now, so the chips in the table above become group headings.*
## C-08 · Thursday, Oct. 15, 8:40 pm · A question for the coach

*This is the coach as the second half of the product, answering the kind of question Charlotte would otherwise post on Reddit. The answer starts from the fact that she is struggling, gives her something specific to do tonight, and shows the family details it was based on. The staff article attached below it carries the longer version. Charlotte says "8am" because parents round, but the coach uses the real time.*

> "Mallory fights me every single morning about clothes and tomorrow is picture day. How do I get through 8am without a meltdown?"

> Mornings with Mallory are wearing you down, and picture day raises the stakes. Settle the outfit tonight: put the green dress out next to one other outfit Mallory likes, and let Mallory choose between the two before bed. A six-year-old who has already chosen has much less to fight about at 7:40, and the choice is real because you are happy with either answer. If Mallory has second thoughts in the morning, the other outfit is ready, and the green dress can go in Mallory's backpack for the photo.

**Coach, as shown under the answer**

> Based on
> Mallory, 6, kindergarten at Westview · Picture day on Friday · Your note about the green dress · You leave with Mallory at 7:40 am

**Coach, as shown: attached article**

> MVP Recommends · 4 min read
>
> Two outfits, not twenty: getting dressed without the standoff

## C-08b · Thursday, Oct. 15, 9:05 pm · A question for Dr. Ortiz

*A few minutes after the picture day answer, Charlotte asks something the coach must not answer itself. The coach doesn't give medical advice, so it names the person in her inner circle who can, gives her the way to reach that person tonight, and connects the question to the checkup already in her plan. This is the only moment that shows the coach handing a question to a professional.*

> "Mallory's had a cough since Tuesday. Should she skip picture day tomorrow?"

> Whether Mallory is well enough for school tomorrow is a question for Dr. Ortiz, so call Northside Pediatrics tonight. Northside's after-hours nurse line is the same number, 555-0160. Mallory already sees Dr. Ortiz on Friday at 3:30 for the six-year checkup, so the cough can go on the list for that visit as well.

**Coach, as shown under the answer**

> [Call Northside]
>
> Add the cough to Friday's checkup
>
> Based on
> Dr. Lena Ortiz, Northside Pediatrics, in your inner circle · Mallory's checkup on Friday at 3:30

*No article is attached, because a medical question gets a person, not reading. Call Northside opens her phone app with the number, and it leaves no task. Charlotte taps "Add the cough to Friday's checkup", and the checkup in the game plan gains the note "Ask Dr. Ortiz about Mallory's cough". The note is her action, so it carries no Changed mark. The coach's line underneath reads as below.*

> The note is on Friday's checkup.

## The day in full: Thursday

| Time | Who | What | Status |
| ----- | ----- | ----- | ----- |
| 6:55 am | Charlotte | Leaves with Alexis for orchestra. Mallory stays home with Edward. | |
| 7:15 am | Alexis | Orchestra at Cedar Grove | |
| 7:20 am | Charlotte | Home | |
| 8:15 am | Charlotte | Leaves with Mallory | |
| 8:25 am | Mallory | At Westview | |
| 1:15 pm | Edward | Leaves for Cedar Grove | Edward: yes |
| 1:30 pm | Edward | Collects Alexis at the Oak Street gate | Edward: yes |
| 1:45 pm | Edward | Home with Alexis | |
| 2:00 pm | Edward | Meeting until 3:00 pm, working from home | |
| 2:00 pm | Charlotte | Leaves for Willow Yoga | |
| 2:15 to 3:15 pm | Charlotte | Yoga | |
| 2:30 pm | Min-jung Park | Collects Mallory with Hana at Westview | Min-jung: yes |
| 2:45 pm | Min-jung Park | Drops Mallory at home | Min-jung: yes |
| 3:30 pm | Charlotte | Home | |
| 3:55 pm | Charlotte | Leaves with Mallory and the ballet bag | |
| 4:15 to 5:00 pm | Mallory | Ballet at Studio Ten | |
| 5:15 pm | Charlotte | Home with Mallory | |

## If Min-jung says no

*If Min-jung taps "I can't do this", Mallory's pickup shows "Min-jung can't" in the game plan, and the coach card comes back with the coach's first recommendation. Other options holds the one Charlotte has not tried, skipping yoga this week.*

> Your coach · for Thursday
>
> Min-jung can't bring Mallory home on Thursday. I'd move your yoga to the 12:15 class, so you can collect Mallory yourself.
>
> [Move yoga to 12:15]
> Updates your game plan
>
> Other options


*Other options opens Thursday's Leave sheet with one backup left. The coach's first recommendation is already on the card, and Min-jung has said no, so the sheet holds only the plan that depends on nobody.*

> Plan B · Collect Mallory yourself and skip yoga this week. Thursday runs like an ordinary Thursday, and Mallory rides with you to ballet as usual.
> [Skip yoga this week]
>
> I don't see another way for Thursday.

## Boards for the wireframes only

*These boards show states of Now that no moment reaches. Each is drawn so the engineer can build the state, and none is presented.*

### Wednesday, Oct. 14, 5:10 pm · A timed thing at home

*Dance at Studio Ten ran from 3:45 to 4:45 pm, and Charlotte and both girls are home by 5:00. No leg is left today, and dinner with Claire is the next thing with a time, so it leads Now. Everyone asked about Thursday has answered, so there is no coach card.*

> Wednesday, Oct. 14
>
> [sun icon] This afternoon
>
> 6:30 pm
>
> in 1 hr 20 min
>
> Dinner with Claire
>
> [Remind me]

*Later today shows its heading and "5 done today", with no rows. MVP Recommends shows the conference article, because its reason holds until Thursday. Remind me opens the sheet below.*

> Remind me
>
> For 6:30 pm · Dinner with Claire
>
> At 6:15 · 15 min before
> At 6:00 · 30 min before
>
> [Set reminder]

### Sunday, Oct. 18, 10:30 am · A task leads Now

*Sunday has nothing in the game plan except one task Charlotte added herself on Saturday, with two steps of her own. The washing machine is leaking again. With no timed thing today, the task leads Now. The coach card concerns Monday: violin returns to Lakeside Strings at 4:00, and it runs into Alexis's therapy at Brightwater at 3:30, a clash in Alexis's ordinary week that this week's move to Tuesday hid.*

> Sunday, Oct. 18
>
> [sunrise icon] This morning
>
> Nothing to drive to today.
>
> Fix the washing machine
>
> Check the drain filter
> Run an empty rinse cycle
>
> [Remind me] [Ask someone]

> Your coach · for Monday
>
> Violin is back at Lakeside Strings on Monday at 4:00, and Alexis has therapy at Brightwater at 3:30, so the two overlap every Monday. I'd ask Lakeside for 4:45 or later, so Alexis can go straight from therapy.
>
> [Text Lakeside]
> Opens a text for you to send to Lakeside Strings
>
> Other options

*Later today is hidden, because nothing else was planned and nothing is done yet. There is no MVP Recommends article, because nothing in Sunday gives one a reason. In the game plan, Monday's therapy and violin both show "Conflicts with" the other every Monday from next week.*

*Remind me opens the sheet below. It offers times of day, because the task has none of its own.*

> Remind me
>
> Fix the washing machine
>
> At 11:30 am · in an hour
> At 2:00 pm · this afternoon
> At 6:00 pm · this evening
>
> [Set reminder]

*Ask someone opens a sheet listing her people who have a mobile number, inner circle first: Edward, Claire, Ms. Reyes, Min-jung Park and Jenna Okafor. She chooses Edward, taps Next, and the coach drafts the request in her voice.*

> Ask someone
>
> Fix the washing machine
>
> [Next]

> To Edward
>
> Can you take a look at the washing machine today? It's leaking again.
>
> Edward answers with
> Sunday · Fix the washing machine · [I've got it] [I can't do this]
>
> You send this. MVP never sends anything for you.
>
> [Send]

*Text Lakeside on the coach card opens this draft, handed to her messages app, and sending it leaves the task "Text Lakeside about Mondays".*

> To Lakeside Strings
>
> Hi, could Alexis move to 4:45 or later on Mondays? Alexis has an appointment at 3:30 that runs until 4:15. Thank you, Charlotte
>
> You send this. MVP never sends anything for you.
>
> [Send from Messages]

*Other options opens Monday's Leave sheet, scrolled to its one backup.*

> Plan B · Skip violin this Monday. Alexis keeps therapy at Brightwater, and you can settle violin's time once Lakeside answers.
> [Skip violin on Monday]
> Opens a text for you to send to Lakeside Strings
>
> I don't see another way that keeps both on Monday.
>
> Why

### Sunday, Oct. 18, 11:15 am · The quiet line

*Charlotte ticks both steps and then the task. The task leaves Now and counts as done.*

> Nothing else today.

*The coach card for Monday stays beneath the line until she answers it, and Later today shows its heading with "1 done today" and no rows.*
## MVP Recommends for Charlotte

These are the two staff articles in Charlotte's week. Both are written by MVP staff in their own voice. The bylines are placeholders until real staff writers are named.

### Fifteen minutes with the teacher: making a conference count

*School · 3 min read · By Nora Lindqvist, MVP staff*

*Appears on Today from Monday to Thursday, because Cedar Grove conferences fall on Thursday and Friday.*

Most parent-teacher conferences run fifteen or twenty minutes, and the first five usually go to the teacher's overview. That leaves about ten minutes that are yours, so it helps to walk in knowing what you want from them.

Before you go, ask your child two questions: what is the best part of the day, and what is the hardest part. Children often say things at home that never come up in class, and the teacher will want to hear them. Then write down one or two things you want to understand better. A specific question, such as how your child handles group work or what happens when a math problem gets hard, gets a more useful answer than asking how things are going.

Tell the teacher about anything at home that affects school. A move, a new sibling, a change in activities or a child who is seeing a therapist can all explain what a teacher is noticing, and you decide how much to share.

Before you leave, agree on one thing each of you will do and how you will stay in touch about it. Teachers see a lot of families during conference week, and a short follow-up email a few days later keeps your conversation from getting lost.

If fifteen minutes is not enough, say so and ask for a second meeting. Most teachers would rather schedule one than rush a conversation that matters.

### Two outfits, not twenty: getting dressed without the standoff

*Mornings · 4 min read · By Sam Adeyemi, MVP staff*

*Attached to the coach's answer in C-08.*

For a lot of five- and six-year-olds, getting dressed is the first decision of the day and the first chance to push back. The fight is rarely about the clothes themselves. It is about who decides, and it tends to happen at the moment you have the least time.

Move the decision to the night before. Lay out two outfits you are happy with and let your child choose one before bed. Two is enough to feel like a real choice and few enough to settle quickly. Put the chosen outfit somewhere your child can reach, in the order it goes on.

Keep the second outfit nearby. A child who wakes up and changes their mind can switch without a negotiation, and you lose nothing because you approved both.

For days that matter, like picture day or a family event, give the important piece a job it can do later. A dress or a collared shirt can travel in a backpack and go on just before the photo, which takes the pressure off the morning for both of you.

Expect a few rough mornings while this becomes a habit. Most children settle into it within a couple of weeks, especially when the evening choice happens at the same time every night.

If mornings stay hard, or the resistance shows up across the whole day, mention it to your pediatrician or your child's teacher. Sometimes a struggle with clothes is really about texture or comfort, and they can help you work out whether that is part of it.

# 4. Interface copy

These are the labels, headings, buttons and placeholders on the demo screens that are not written out in the moments above. They are interface text rather than coach speech, so they follow plain language rather than the coach voice rules. The engineer should find every visible word in this section or in the moments.

## Navigation

| Where | Text |
| ----- | ----- |
| The five tabs, in order | Today · Coach · Game plan · Team · Kids |
| Kids tab icon | Two figures of different heights, so it fits a toddler and a teenager alike. The height difference stays obvious at tab size, because Team's icon is also two people. |
| Settings, on a phone | The parent's monogram at the top right of every tab's header, with the accessible label "Settings and account" |
| Settings, from tablet width up | Settings, at the bottom of the sidebar |
| Link out of any page opened inside a tab | Back, in place of the monogram. This covers child pages, school cards, articles and drafts. |
| What Settings holds | Your account · Your calendar · Notifications · Your forwarding address · Language at home · Privacy. Settings is not drawn for the demo. |

## Today

| Where | Text |
| ----- | ----- |
| Title, by phase of the day | "This morning" with a sunrise icon, "This afternoon" with a sun icon, or "Tonight" with a moon icon. The icons are `phase-morning`, `phase-afternoon` and `phase-tonight` from the icon set in spec §17, and the word always appears with the icon. |
| Dateline | Above the title: the day of the week and the date, such as "Monday, Oct. 12", with the month abbreviated as in "Dates, times and places". Tonight shows the day it is. |
| Status pill, beside the departure time | in 15 min, or in 2 hr 30 min for anything an hour or more away. From the leaving time: Time to leave, filled. |
| Departure time | The time in the Display style, such as "2:15 pm" |
| Route, at the top of the pass | Where she leaves from, an arrow read aloud as "to", and where she is going, such as "Home → Westview" or "Cedar Grove → Brightwater", followed by a chevron on a leg she travels herself. A child leaving with someone else gets no chevron. For a timed thing at home, the item instead, such as "Dinner with Claire", with no pass. |
| The next station, under the route | "Then", the next stop and when she is due there, such as "Then Cedar Grove, 2:45", or "Then home, about 4:35". When a separate run leaves within 30 minutes: "Then at" the time, such as "Then at 8:15, you leave for Westview". |
| Checklist group headings | The child's first name, such as "Mallory", or "Both" or "All three", in the children's green · Before you leave, in ink, for her own tasks |
| Actions under the departure | Remind me, with a bell icon · Directions, with a navigation arrow icon. Both are outlined buttons. Directions appears only when she is driving. |
| Fields under the time | Drive, with the minutes, such as "Drive 10 min" · Arrive, with the time, such as "Arrive 2:25", in the warning ink with a clock icon when it falls after the stop's time · Pickup, with the time, for a pickup, or Starts, with the time, for anything else · For a child leaving with someone else: With, such as "With The Parks", and Starts |
| Reminder sheet | Heading: Remind me to leave · Line: "For" the leaving time and the next stop, such as "For 2:15 pm · Westview" · Choices, with the first preselected: At 2:00 · 15 min before · At 1:45 · 30 min before · When it's time to leave · at 2:15, with traffic checked · Button: Set reminder · When a reminder is already set: the choice selected, the button Update reminder and the link Remove reminder |
| Reminder once set | The button reads "Reminder at" and the time, such as "Reminder at 2:00", in its active state, until the reminder goes off |
| Reminder notification | Title: "Leave in 15 min for", the first stop and, when the run has more, "then" and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater" · Body: the checklist as a sentence, such as "Take Mallory's book for the waiting room at Brightwater." · Actions: Directions · Snooze 5 min |
| Coach card label | "Your coach · for" and the day it concerns, such as "Your coach · for Thursday", beside the coach's dot. "Your coach · for today" when it concerns today. "Your coach" alone when the card concerns no particular day. |
| Coach card button | One button for the recommendation, named for what it does, such as "Move yoga to 12:15" or "Skip tutoring this Friday". When the coach asks for a fact, the button reads "Answer". |
| Line under the coach card button | When the button changes the plan or opens a draft, a line saying so, such as "Updates your game plan" or "Opens a text for you to send to Ms. Reyes". A button that only opens something she reads, such as "See reply", or a sheet for her answer, has no line. |
| Coach card secondary action | Other options, which opens the Leave sheet on Today scrolled to the coach's backups. A card with only one way forward names the alternative instead, such as "Not this week" or "Remind me Monday". |
| Coach card after a move | The coach's line saying how the plan stands now · A button for anything left for her to do, such as "Book at Willow", with an external-link icon when it opens another site · Link: Undo · Meta line: Game plan updated |
| Coach card after she answers a question | The coach's line saying how the plan stands now · A button for what comes next, such as "Open the game plan" · A link to change the answer, such as "Change the start time" · Meta line: what was updated, such as "Westview card updated" |
| Answer sheet for a start time | Heading: the child's name, "start time at" and the school, such as "Mallory's start time at Westview" · A time picker · Button: Save |
| Coach card for a new calendar event | The label, then the event, "is new on your Google Calendar", or the calendar she connected, and what it runs into, such as "Mallory's checkup at Northside Pediatrics at 3:30 is new on your Google Calendar, and it overlaps tutoring with Ms. Reyes." |
| Section heading | Later today |
| Beside "Later today" | The number done so far, shown once anything is done: before noon, such as "2 done this morning", and from noon, such as "3 done today" |
| Rows in Later today | The time, the chips and the item, such as "2:30 pm · [Mallory] Pick up at Westview" |
| Letter day | After the school's name, such as "To Westview · B day" in Later today, or "Westview · D day" in Tomorrow starts |
| Time not known yet, in Tomorrow starts | Start time needed, in the time column, in Meta |
| Coach card with nothing captured yet | Your coach · Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan. · Buttons: Take a photo · Attach a file · Talk or type |
| Capture bar | The coach's dot, then the placeholder "Type, talk or add an image" · Icons: Attach · Camera · Microphone, with those accessible labels |
| When the capture bar shows | Above the tab bar on Today, except while the coach card is asking for a capture |
| Heading of the evening checklist | Ready tonight |
| Heading for tomorrow's first departures | Tomorrow starts |
| MVP Recommends line | "MVP Recommends ·" and the reading time, such as "MVP Recommends · 3 min read" |
| Under the article title | A single sentence beginning "Because", such as "Because Cedar Grove conferences are this week." |
| Now with no timed thing left | Line in Meta: Nothing to drive to today. or Nothing else to drive to today. · The task in the Title style · Its steps as a checklist · Actions: Remind me · Ask someone |
| Now with nothing left | Nothing else today. |
| Anytime task in Later today | Anytime, in the time column |
| Leave sheet | Heading: When to leave · Line: the part of the day and the number of stops, such as "This afternoon · 3 stops", or the day, such as "Thursday afternoon" · For each station: the place, the item with its chips and start time, and "Leave at" and the time · Last station: "Back about" and the time · Under a station she is changing: "You reach", the stop and the time, then how that sits against the item, such as "You reach Westview at 2:25, five minutes before pickup." or "You reach Studio Ten at 4:20, five minutes after ballet starts." · Link on her own items: Change the start time · On a calendar item: Change this in Google Calendar. · Button: Save |
| Backups in the Leave sheet | Heading: Other ways this could go · Each backup: "Plan B ·" or "Plan C ·" and the coach's line, then one button named for what it does · When there is no second honest backup: the coach's line saying so, such as "I don't see another way that keeps both on Friday." · Link: Why |
| Every sheet | A grabber · A Close icon at the top right, with the accessible label "Close" |
| Reminder sheet with notifications off | Above the choices: Notifications are off, so this reminder can't reach you. · When she has said no before: the link Open settings |
| Reminder sheet for a timed thing at home | Heading: Remind me · Line: "For", the time and the item, such as "For 6:30 pm · Dinner with Claire" · Choices: At 6:15 · 15 min before · At 6:00 · 30 min before · Button: Set reminder |
| Reminder sheet for a task | Heading: Remind me · Line: the task · Choices: "At", a time and how far off it is, such as "At 11:30 am · in an hour", "At 2:00 pm · this afternoon", "At 6:00 pm · this evening" · Button: Set reminder |
| Ask someone sheet | Heading: Ask someone · Line: the task · Choices: her people with a mobile number, inner circle first · Button: Next |
| Coach card when an asked item is unanswered at her leaving time | The person's name, "hasn't answered about", the item, and what she can do herself, such as "Min-jung hasn't answered about Mallory's pickup at 2:30. Leave at 2:15 and you can collect Mallory yourself." · Button: I'll collect Mallory · Line: Updates your game plan |

## People

| Where | Text |
| ----- | ----- |
| A child | The child's first name in a name chip, such as "Mallory" |
| Every child in a row | Both, for two children · All three, for three |
| The whole household | Family |
| The parent | You |

## Coach

| Where | Text |
| ----- | ----- |
| Input placeholder | Type, talk or add an image, after the coach's dot |
| Controls on the capture bar | Attach · Camera · Microphone, as icons with these accessible labels. While the field holds typed text, the microphone becomes an arrow with the accessible label "Give this to the coach". There is no Send on the capture bar, because Send on its own means sending something to another person. |
| Example of typed text, for the wireframes only | Picture day is Friday, and the green dress is in the laundry room. |
| A capture that can't be read | I couldn't read this photo clearly. Try again with the whole page in the frame and good light. · Buttons: Retake photo, Choose another |
| A wait longer than twenty seconds | This is taking longer than it should. Your photo is safe, and you can try again. · Button: Try again |
| Source link under a captured item | "From" followed by the source and the day, such as "From the Cedar Grove newsletter · Sunday" |
| Buttons on a read-back | Add to the plan · Show the newsletter, with the source named as it applies |
| Confirmation after sharing from another app | Sent to the coach |
| Label on a voice note | Voice note · 0:20, with the recording's length |
| Tag on the recommended option | Recommended |
| Heading of the details under an answer | Based on |
| Day headings in the conversation | Today, for the current day · The day of the week, such as "Monday", for earlier days |
| Button to reach a professional | "Call" followed by the practice's short name, such as "Call Northside" |
| Link to add a question to an appointment | "Add" followed by what to add and the appointment, such as "Add the cough to Friday's checkup" |
| Line after that link is used | "The note is on" followed by the appointment, such as "The note is on Friday's checkup." |

## Requests

| Where | Text |
| ----- | ----- |
| Address line on a draft | "To" followed by the name, such as "To Edward" |
| Line above the preview of the recipient's buttons | "Edward answers each item with", with the recipient's name, or "Edward answers with" when the request has one item |
| Each item on a request | The day and the item as it appears in the plan, such as "Thursday · Mallory · Pick up at Westview, 2:30 pm", each with its own two buttons |
| Note field on a request | "Add a note for" followed by the parent's name, such as "Add a note for Charlotte" |
| After answering | Charlotte can see your answers. If anything changes, change your answer here. · Each item shows the answer given and a Change link |
| Notification when a request arrives | The parent's name, "asked you about" and the day's items, such as "Charlotte asked you about Thursday's pickups." |
| Notification when someone answers | The person's name and the answer, such as "Edward: yes to both pickups on Thursday." or "Ms. Reyes: yes to Friday." |
| Notification when someone changes an answer | The person's name and the day, such as "Edward changed his answer for Thursday." |
| Task left by a handoff | What was sent and where, such as "Send Westview the pickup note" or "Reply to the parents' group" |
| Address line for a WhatsApp group | "To" followed by the group's name, such as "To Cedar Grove 4th Grade Parents" |
| Line above the send button | You send this. MVP never sends anything for you. |
| Send button | Send |
| Send button when MVP hands the text to another app | Send from WhatsApp, or the app that applies, such as "Send from Mail" |
| Heading on a request received in MVP | "Request from Charlotte" and the time, such as "Request from Charlotte · 6:40 am" |
| Web page for someone without MVP | Heading: "Request from Charlotte" and the time, the same as in MVP · Line under the buttons: You don't need MVP to answer. |
| Text message to someone without MVP | "Charlotte sent you a request through MVP. You can answer here:" followed by the link |
| The recipient's buttons | I've got it · I can't do this, on each item |
| Button when changing an answer with a note | Send answer |
| After answering, on the web page | Charlotte can see your answer. If anything changes, change your answer here. |
| Link in the text message | mvp.example/r/ followed by the request's code, such as "mvp.example/r/k7m2" |

## Game plan

| Where | Text |
| ----- | ----- |
| Heading of the changes list | This week's changes |
| Heading of the week | This week |
| Heading of the following week | Next week |
| Owner on the parent's own items | You |
| Conflict mark | "Conflicts with" followed by the other item, such as "Conflicts with yoga", or the items together, such as "Conflicts with both pickups", or a number, such as "Conflicts with 3 items" |
| Owner with nobody responsible | Nobody yet |
| Source link on a calendar item | From your Google Calendar, or the calendar she connected |
| Trying to drag a calendar item | Change this in Google Calendar. |
| A person's answer on an item | The person's outlined initial and an icon: an hourglass for asked, a thumbs up for yes, a thumbs down for can't. The accessible label says "Asked Edward", "Edward: yes" or "Edward can't". |

## Team

| Where | Text |
| ----- | ----- |
| Tab heading | Team |
| Button at the top of the tab | New message |
| Section headings, in order | Chats · Village groups · Inner circle · Village |
| A chat's row | The other people's names, such as "Claire" or "Edward and Claire" · The latest message, with its author's name unless it is hers, when it is "You", cut to one line · Its time today, or its day · "1 new" in Meta when unread |
| Chats, before she has any | No chats yet. Start one with anyone in your inner circle who's on MVP. |
| A village group's row | The group's name · The number of members, such as "8 members" · The latest post or reply with its author, cut to one line · "1 new" in Meta when unread |
| A new group's row, before any post | You created this group last week., or the day that applies |
| A person's row | Their outlined initial, their name, and the line from "Her people" · "On MVP" after the line when they have it |
| Buttons below the lists | Add someone · New village group |
| Team tab with anything unread | A dot on the tab icon, with the accessible label "Team, 1 new" or the number that applies |
| Person page | Back · Their name · Their line and "On MVP" or "Not on MVP" · Actions: Message, for inner circle members on MVP · Call · Text, for anyone not on MVP with a mobile number · Contact: "Mobile" and the number, or the practice's name and number |
| Section on a person page | This week, as lanes: the day abbreviated to three letters, such as "Thu", the chip, the item and the answer icon, for each item this week that they own or have been asked about |
| This week, when empty | "Nothing in this week's plan with" followed by their name, such as "Nothing in this week's plan with Claire." |
| Line under This week, for someone on MVP | Their name and "sees only what you send.", such as "Edward sees only what you send." |
| Other sections on a person page | Chats, for inner circle members she has chats with · Groups, for village members |
| Composer heading | New message |
| Choice of audience in the composer | Inner circle · Village |
| Inner circle choices | Everyone on MVP · each member on MVP with their line · members without MVP beneath, each marked "Not on MVP" and not selectable |
| Line under the inner circle choices | People who aren't on MVP can't be in a chat. Call or text them from their page. |
| Village choice | Each village group with its number of members |
| Message field placeholder | Write a message |
| Note above the button, for a chat | "Only" followed by the people chosen and "see this chat. The coach doesn't read it.", such as "Only Edward and Claire see this chat. The coach doesn't read it." |
| Note above the button, for a group | Only the people in this group see this. The coach doesn't read it. |
| Button | Send, for a chat · Post, for a group |
| Chat heading | Back · The other people's names |
| Line at the top of a chat | "Only you," followed by the other people and "see this chat. The coach doesn't read it.", such as "Only you, Edward and Claire see this chat. The coach doesn't read it." |
| Author label on her own messages and posts | You |
| Field at the foot of a chat | Message, with the button Send |
| Village group page | Back · The group's name · "8 members · See members" · Button: New post · The posts, newest first, each with its replies |
| Reply field placeholder in a group | Reply |
| Notification for a chat message | The author's name, a colon and the message, such as "Claire: Yes, see you at 6:30. I'll bring dessert." |
| Notification for a reply to her post | The author's name and "replied to your post in" followed by the group, such as "Jenna Okafor replied to your post in Cedar Grove parents." |
| Add someone | Heading: Add someone · Fields: Name · Mobile number · Who they are, with the helper "Shown under their name on your Team." · Choice: Inner circle · Village · Button: Add |
| After adding someone on MVP | Their name and "is on MVP.", such as "Min-jung Park is on MVP." · Button: Done |
| After adding someone not on MVP | Their name and "isn't on MVP yet. Requests reach them by text message, and you can invite them to MVP.", such as "Ms. Reyes isn't on MVP yet." · Buttons: Invite by text · Not now |
| Invitation text | I'm using MVP to plan the girls' week. You can join here: followed by the link. "The girls" follows the household, such as "the kids" for a mixed household. |
| New village group | Heading: New village group · Field: Group name · Heading: Add people from your village · Each village member on MVP, with a tick · Line: Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it. · Button: Create group |

## Onboarding

| Where | Text |
| ----- | ----- |
| Splash | The MVP mark with "Most Valuable Parent" beneath it |
| Welcome screen | Headline: Busy parents are experts at spinning plates, so hand one of them to your coach. · Line: Start with your first name and zip code, so the coach knows who it's planning with and what's nearby. · Field: Your name, with the helper "Helps the coach know who's talking." · Field: Zip code, with the helper "Helps the coach work out travel times and your local school calendar." · Button: Continue · Link: Skip for now |
| Children screen | Heading: "Who are you planning for," followed by her name, such as "Who are you planning for, Charlotte?", or "Who are you planning for?" if she skipped the welcome · Line: Names and grades are enough for now. · Field: Child name · Grade choices: Not in school yet · Pre-K · K · 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9–12 · Link: + Add another child · Button: Continue · Link: Skip for now |
| First capture screen | Headline: the coach's line in C-00 · Buttons: Take a photo · Attach a file · Talk or type · Link: Skip for now |
| Check the photo | The photo, full width · Buttons: Use this photo · Retake |
| Hand-off | The coach's line, saying what the draft will hold and what it keeps for later · Button: "Make" followed by the draft's name, such as "Make Mallory's plan" · Link: Something's not right |
| Thinking screens | "Reading your photo…", or "Reading your file…" or "Listening…" as the capture applies, while the coach reads it, and "Making" followed by the draft's name, such as "Making Mallory's plan…", while it builds the draft |
| Confirmation under a read-back | Label: This calendar is for, with the kind of document named, such as "This newsletter is for" · Choices: each child's name and grade, such as "Mallory · K". If she skipped the children screen: a Child name field and the grade choices. |
| Heading of the draft | The child's name, "plan" and what the draft covers, such as "Mallory's plan for this week", with the dates beneath it in Meta, such as "Oct. 6 to 9" |
| Heading of the account prompt | "Keep" followed by the draft's subject, such as "Keep Mallory's plan" |
| Line on the account prompt | Create an account to save this plan and add the rest of your family. |
| Buttons on the account prompt | Create account · Not now |
| Step counter | "01 of 05" to "05 of 05", on the five setup screens only |
| Account screen | Heading: Create your account · Field: Email · Buttons: Continue with Apple, Continue |
| Plan screen, proposed | Headline: Pick a plan and start your free trial today! · Toggle: monthly · annual · Plan: Basic · $8.99 / month · 7-day free trial · Monthly membership · AI coach · Team feedback · Button: Buy · Plan: Family · $13.99 / month · 7-day free trial · Monthly membership · AI Coach · Up to six users · Team feedback · Button: Buy · Line: Purchases will open Stripe in a new tab. |
| Calendar screen | Heading: Connect your calendar · Line: Connect the calendar you already use, and the coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it. · Buttons: Google Calendar · Apple Calendar · Outlook · Link: Not now · After connecting: Connected, followed by the calendar's name, such as "Connected · Google Calendar" · Button: Continue |
| Calendar permission, staged | At the top, the calendar's name in plain text, such as "Google Calendar", with no logo · Most Valuable Parent wants to see your calendar · Buttons: Allow · Cancel. Drawn generic, not to any calendar's brand. |
| School screen | Heading: Who's on your calendar? · Line: Add each child's school, so the coach knows whose emails and handouts are whose. · For each child: the name, the grade written out, such as "Fourth grade", and a School field · Note under a school filled in from a capture: From your calendar photo, or the capture that applies · For a child not in school yet: an Age field in place of School · Link: + Add another child · Button: Continue |
| Household screen | Heading: Your household · Question: Who's at home with the kids? · Choices: Two parents, One parent, Two homes, Something else · Field: Language at home · Button: Continue |
| Helpers screen | Heading: Who else helps? · Line: Add the adults you count on, such as a partner, a grandparent or a nanny. You decide what each of them sees, and nobody sees anything you don't send them. · Fields: Name, Who they are · Link: + Add someone · Button: Done |
| Getting ready screen | Headline: Getting everything ready · Steps: Saving your account · Adding the children by name, such as "Adding Alexis and Mallory", or "Adding your children" when she skipped the children screen and named them later · Reading the connected calendar by name, such as "Reading your Google Calendar", shown only when she connected one · Setting up the draft by name, shown only when she made one, such as "Setting up Mallory's plan" · Getting Today ready · Each step shows done, working or waiting · Line: This takes about a minute. You can put your phone down, and everything you've entered is safe. |
| Getting ready, when account creation fails | Your account wasn't saved. Everything you entered is still here. · Button: Try again |
| Coach introduction | Byline: your coach · just now · Greeting: "Nice to meet you," followed by her name · The recap, as in C-00 · Reminder, ticked: Remind me the night before a library day, or the reminder that fits her capture · Button: Next |

## Kids

| Where | Text |
| ----- | ----- |
| Tab heading | Kids |
| Section headings on the tab | Kids · Schools |
| A child's row on the tab | The name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove" |
| A school's row on the tab | The school's full name, with the children who attend it beneath it, such as "Westview Kindergarten" over "Mallory", and the Changed mark when anything on its card has changed |
| Source link on a fact the parent told the coach | From you |
| Button for adding a school | Add a school |
| Header on a child page | The child's name, age and grade, such as "Mallory · 6 · Kindergarten" |
| Section headings on a child page | School · Every week · Going with, by day |
| Heading on a school card | The school's name, such as "Westview Kindergarten" |
| Section headings on a school card | Hours · Contacts · Rules · Calendar · Rotation · Documents |
| Button on a school card | Add to this card |
| Heading of a card's history | Earlier version |
| Source link on a card fact | "From" followed by the document, such as "From the family contact list · photo" |
| Buttons on a card read-back | Open the Westview card · Show the email, with the school and source named as they apply |

## MVP Recommends article

| Where | Text |
| ----- | ----- |
| Link back out of an article | Back |
| Byline | "By" followed by the writer's name and "MVP staff", such as "By Nora Lindqvist, MVP staff" |

# Appendix A: the facts we invented

The user stories left gaps, and everything in this table is a fact we invented to close one of them. Each fact goes into the seed file's metadata, so that the engineer can tell a story fact from a demo choice and so that any of these decisions can be overruled later.

## Charlotte and Edward

| Gap | What we decided | Why |
| ----- | ----- | ----- |
| The demo calendar | The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026. C-00 is Monday, Oct. 5, 2026. The seed anchors the demo week at `2026-10-12`. | Matches the date the Ready for dev frames already show, and keeps C-00 and the demo week on one October rotation sheet. |
| Ages | Charlotte 48, Edward 50, Alexis 10 in fourth grade, Mallory 6 in kindergarten | The girls' ages and grades come from the September 25 notes. The adult ages are new. |
| Schools | Alexis at Cedar Grove Elementary, 8:00 am to 2:45 pm, collected at the Oak Street gate. Mallory at Westview Kindergarten, 8:30 am to 2:30 pm, Room 3. | The girls attend different schools, and the different hours make both the morning and the afternoon real. |
| Home | Linden Avenue, 12 minutes from Cedar Grove and 10 from Westview | Gives the Parks a reason to be the easy option, since they live two streets away. MVP never asks for the address. It works out travel times from her zip code, and the seed's travel table stands for those estimates. |
| Travel times | Worked out from her zip code, with five minutes added to each leaving time | A zip code is enough for a parent's planning, and a home address would add precision without changing what she does. Directions routes from wherever she is. |
| Hard mornings | Orchestra at 7:15 am on Tuesday and Thursday means two trips, at 6:55 am and 8:15 am. On Tuesday Mallory rides along on both because Edward has left for the office. | Explains why Tuesday and Thursday mornings are the hardest, and why the carpool only runs on the other three days. |
| Carpool | Mornings only. The Parks drive Monday, the Okafors Wednesday and Charlotte Friday, with Mallory riding along on Friday to Westview. | The WhatsApp message comes from Jenna Okafor, and Friday explains why Mallory leaves at 7:40 am that day. |
| Edward's week | At the office Tuesday and Wednesday. Home Thursday, free from 1:15 pm until a 2:00 pm meeting is added on Wednesday. | Thursday has to be a day Edward is home so he can be asked, and the new meeting shows an accepted item reopening. |
| Who has MVP | Edward, Claire, Min-jung Park and Jenna Okafor have MVP. Dr. Ortiz, Karen Moss and Ms. Reyes do not. | Village members need MVP to take part in a village group, and Edward and Min-jung receive requests inside MVP. |
| Village group | Cedar Grove parents, created by Charlotte in her first week, with eight members including Min-jung and Jenna | Gives C-05 a group inside MVP to post to, separate from the WhatsApp group. |
| Alexis's week | Therapy Monday 3:30 pm at Brightwater, violin usually Monday at Lakeside Strings and this week Tuesday at 4:00 pm, dance Wednesday 3:45 pm at Studio Ten, orchestra Tuesday and Thursday 7:15 am | Violin follows the teacher's text. |
| Mallory's week | Ballet Thursday 4:15 pm at Studio Ten, reading tutoring Friday 3:00 pm with Ms. Reyes in the Westview library | Keeps Thursday afternoon real without crowding it. |
| The tutor's request | Ms. Reyes texts on Sunday evening asking for a second weekly session. The coach suggests Tuesdays at 3:00 pm and Charlotte moves the start to the following week. | Arriving on Sunday lets the suggestion appear on Monday morning, and it gives Charlotte something to overrule in the game plan without the coach. |
| Charlotte's time | Yoga Thursday 2:15 to 3:15 pm at Willow Yoga. Willow also has a Thursday class at 12:15 pm and a Saturday class at 8:30 am. | She names the class herself. The other two classes make the coach's options real. |
| Conferences | Cedar Grove conferences on Thursday afternoon and Friday. Charlotte's is Friday at 9:20 am. | Explains the early dismissal, rules out the Friday yoga class and gives the Today article its reason. |
| The therapist | Karen Moss is leaving Brightwater in four weeks. The village recommends Dana Whitfield. | Replaces a plain reschedule with a question that needs people, which is what the village is for. |
| Min-jung Park | Sophie is in Alexis's class, Hana is in Mallory's class at Westview, and the Parks live two streets away. Charlotte entered these details when she added the Parks to her village. | Gives the village a practical role in the plan. The coach knows these details because Charlotte entered them, not because it reads the village. |
| Westview pickup list | Westview releases children only to people on the pickup list, so a note from the parent is needed. | A rule parents will recognize. It keeps the coach from contacting the school on her behalf and shows the third way a message leaves MVP. |
| Picture day | Friday at Westview. The green dress is hanging in the laundry room. | Carries through the voice note, the game plan and the coach question. |
| Pediatrician | Dr. Lena Ortiz at Northside Pediatrics. Mallory's six-year checkup is due, and Charlotte books it in the Northside portal on Wednesday at 1:05 pm for Friday at 3:30 pm. | Gives the coach a named doctor for any medical question. |
| Charlotte's sister | Claire, an hour away | An inner circle member who gives advice but cannot do pickups. |
| Library run | Saturday at 10:00 am, with nobody on it until Charlotte asks Edward | Gives Charlotte an item to hand to someone directly from the game plan. |
| Navigation | Today, Coach, Game plan, Team and Kids, with settings behind the parent's monogram | Adults are on Team and the children and their organizations are under Kids, so a parent can guess where anything lives. Kids replaces Settings because parents look at their children's schools every week and at settings rarely. |
| Class teachers | Alexis is in Ms. Carter's class at Cedar Grove. Mallory is in Ms. Hollis's class, Room 3, at Westview. | Gives each child page and school card a named teacher. |
| Cedar Grove contacts | Front office 555-0120, attendance@cedargrovees.org | Fills the Cedar Grove card. The phone number is in the reserved 555-01 range, and the invented domain stays, by the same decision. |
| Westview pickup email | On Tuesday at 3:30 pm Westview moves pickup changes to pickups@westviewk.org, due by 11:00 am on the day. | Gives the demo one card update, and the new address is used the next day in C-06. |
| Charlotte's setup answers | Zip code 00123. Alexis in fourth grade at Cedar Grove Elementary and Mallory in kindergarten at Westview Kindergarten. Two parents at home, English as the home language, and Edward and Claire as the adults who help. | Her household as the rest of the document describes it. ZIP codes beginning 001 are not assigned to any real place. Min-jung and Jenna join in her first week, through the village. |
| The calendar header | The rotation calendar is headed "Westview Kindergarten" with "October 2026" beneath it. | Gives the coach a grade to match, so it can preselect Mallory, and a month a real school sheet would carry. |
| Westview events | Back-to-school night on Thursday, Oct. 8. The harvest fair at 3:00 pm on Friday, Oct. 23. The Fir Hollow Farm field trip on Thursday, Oct. 29. | Puts back-to-school night in C-00's own week, so the first draft adds one event, and puts the other two in later weeks, so the hand-off can say the coach is keeping them on the Westview card. Keeps the harvest fair clear of Friday tutoring in the demo week. |
| Westview hours | Charlotte gives the start time on her first board at 8:41 pm on Monday, Oct. 5, answering the coach card, and the end time later that week. The card shows both as "From you". | Makes the answer the moment the first board completes, and gives the hours a source. |
| The onboarding times | The splash and welcome at 8:30 pm, the children screen and capture at 8:31 pm, the read-back at 8:32 pm, the hand-off and the draft at 8:33 pm, the account at 8:34 pm, the calendar at 8:35 pm, the school and household screens at 8:36 pm, the helpers at 8:37 pm, getting ready at 8:38 pm, the introduction at 8:39 pm, Today at 8:40 pm and her answer at 8:41 pm | Gives each screen a time for the wireframes and seed. |
| Her first board | She lands on Today at 8:40 pm with sneakers on tonight's list and both girls under "Tomorrow starts". The coach card asks for Mallory's start time, and when she answers, the board fills in with an 8:15 am leaving time and the card turns to the rest of the week. | Shows the household she just set up, gives her one thing to do tonight, and makes her first answer change the board in front of her. |
| First capture | On Monday, Oct. 5, the week before the demo week, at 8:30 pm, Charlotte photographs Westview's rotation calendar before creating an account. | Shows value before the account, and explains how MVP knows Mallory's sneaker days in C-03. |
| The highlights | The yellow highlighting on the calendar is Mallory's, and means nothing. | Gives the coach one honest question to ask, and lets Charlotte's answer tell it the child's name. |
| Westview rotation | A six-day letter rotation, A to F. The demo week runs B to F from Monday to Friday, which puts the Tuesday after C-00 on a D day. | B, D and F are motor skills days, which is where Mallory's sneakers come from. |
| Westview contacts | Front office 555-0140, office@westviewk.org, Ms. Hollis in Room 3, Dana Lee for learning support and Priya Nair as counselor | Gives the Westview note in C-06 a real address to go to, taken from the school card. The phone number is in the reserved 555-01 range. Greg chose to keep the invented domains on October 14, 2026. |
| Cedar Grove newsletter | Sent every Sunday afternoon and forwarded to MVP automatically, with a free dress day and a fifth-grade trip alongside the early dismissal | Gives the coach something to filter out, since most of a newsletter never applies to one child. |
| How Charlotte shares | She forwarded her first Cedar Grove newsletter on the Wednesday of her first week and set up automatic forwarding from the coach's offer. She shares WhatsApp messages through the share menu, which she learned on the Tuesday of that week. | Her first week has only one Sunday, which brings the demo-week newsletter, so the first forward is an older newsletter. |
| The source material | The handouts and newsletter are modeled on real school material that Greg supplied, with every name, number and address replaced | The real material carries a real school's staff names and contact details, which must never appear in the demo. |
| Forwarding address | Charlotte's private MVP address is charlotte-k7m@forward.mvp.example. | The .example domain is reserved and can never belong to anyone. It is replaced when MVP has its own domain. |
| The parents' WhatsApp group | Named "Cedar Grove 4th Grade Parents" | Gives the C-03 reply an address line. |
| Westview's email subject | "Changes to pickup requests start this week" | Gives the forwarded email in C-05b a subject line. |
| The rotation calendar's month | The October sheet starts with A on Thursday, Oct. 1, so C-00's week runs C, D, E, F, A and the demo week runs B to F. | Lets one photo serve both C-00 and the demo week, and puts a sneaker day on the morning after C-00. |
| Her calendar | Charlotte uses Google Calendar and connects it during setup in C-00. It holds Alexis's therapy at Brightwater on Mondays at 3:30 pm, Alexis's dance at Studio Ten on Wednesdays at 3:45 pm and Mallory's ballet at Studio Ten on Thursdays at 4:15 pm, each as a repeating event. | Gives the coach something real to bring in at setup, and explains why those three items carry the calendar mark through the week. Google Calendar is the most common calendar to connect and the simplest to stage. |
| The checkup booking | Charlotte books Mallory's checkup in the Northside portal for Friday at 3:30 pm, the first opening, and the portal adds it to her Google Calendar. | Shows something booked outside MVP reaching the plan without her sending it, and gives the calendar a conflict to find. |
| Northside travel | Northside Pediatrics is 15 minutes from home. | Lets the coach give a leaving time for the checkup. |
| Ms. Reyes's answer | Ms. Reyes answers "I've got it" on the web page at 3:10 pm on Wednesday. | Uses the text-message route for someone without MVP, which no other moment shows. |
| Dinner with Claire | Wednesday at 6:30 pm, owned by Charlotte, shown with the Family chip | Gives the Family chip a real use on Wednesday's Today and shows a guest named in a row's text. Dinner appears because it is an event in the week, not a meal to plan. |
| Wednesday's drive | 22 minutes with two stops: 10 minutes from home to Westview and 12 from Westview to Cedar Grove. Monday morning's drive to Westview alone is 10 minutes with one stop. | Taken from the travel times. The design rounds drew 12 minutes, which is the second leg only. |
| Reminder times | The reminder sheet preselects 15 minutes before leaving and offers 30 minutes. "When it's time to leave" uses the fixed travel times in the prototype. | The times follow the design rounds, and the prototype cannot check traffic. |
| Willow's booking link | willow.example | The .example domain is reserved and can never belong to anyone, like the forwarding address. It is staged in the prototype. |
| Wednesday's call | "Call Brightwater", under "Before you leave" on Wednesday's checklist, is the task Charlotte added in C-05 to ask for Dana Whitfield. | Shows one of her own tasks sitting on the checklist beside a child's item. |
| Meals | Mostly vegetarian, with a plain version set aside for Mallory, who is a picky eater | Kept in the seed for accuracy. Dinner does not move this week, so it does not appear in the demo. |
| Phone numbers | Edward 555-0101, Claire 555-0102, Ms. Reyes 555-0103, Min-jung 555-0104, Jenna 555-0105, the five other village members 555-0106 to 555-0110, Northside Pediatrics 555-0160 and Brightwater 555-0170 | Every person page shows a number, and every number is in the 555-01 range reserved for fiction. |
| The rest of the village group | Tom Alvarez, Grace Liu, Dev Raman, Nina Brooks and Rafael Costa, Cedar Grove parents with MVP | Gives the group the eight members it already claimed. Their initials avoid C, E, A and M, so no outlined initial matches Charlotte's, Edward's or a child's chip. |
| When the group was created | Thursday of her first week, Oct. 8 | Follows adding Min-jung on Tuesday and Ms. Reyes on Wednesday, and comes before the demo week. |
| Chats | None before the demo week. The first, with Edward and Claire, starts in C-05c, and a direct message with Claire starts in C-06c. | A two-week-old account with no chats is believable, and it lets the demo show a chat being started. |
| How to tell Alexis | Claire suggests telling Alexis together and saying Karen is helping choose who's next. Edward suggests Sunday night. | A private family question that belongs with the inner circle rather than the village, which shows why MVP keeps the two apart. |
| Claire's dessert | Claire answers "Yes, see you at 6:30. I'll bring dessert." | A reply that needs nothing from the plan. |
| Edward's library note | "I'll take Mallory too, she wants new books." | Uses the one request path no other moment shows, a note with a yes. |
| Mallory's cough | Mallory has had a cough since Tuesday, and Charlotte asks about it on Thursday night. | Gives the coach a medical question to hand to Dr. Ortiz, next to a checkup already in the plan. |
| Northside's after-hours line | Northside's after-hours nurse line is the main number, 555-0160. | Lets the coach give her a way to reach Dr. Ortiz's practice that night without giving medical advice. |
| Request link | mvp.example/r/k7m2, and invitations use mvp.example/join | The .example domain is reserved and can never belong to anyone, like the forwarding address. |
| Min-jung's request time | Charlotte sends it at 11:50 am, and Min-jung answers at 12:30 pm. | Places the send between the coach's message and Min-jung's answer. |
| Leaving times | Every leaving time is the due time minus the drive minus five minutes, rounded down to five minutes. A leg never leaves a stop before that stop is due. This moves the afternoon pickups to 2:15 pm, orchestra to 6:55 am, yoga to 2:00 pm and the checkup to 3:10 pm. | Several times in versions 3.11 to 3.14 broke the five-minute rule. One rule, applied everywhere, lets the engineer compute every time rather than copy it (issues T27, D1). |
| The Monday afternoon run | Charlotte collects Mallory at Westview at 2:30 pm and Alexis at Cedar Grove at 2:45 pm, and drives straight to Brightwater for Alexis's 3:30 pm session, leaving Cedar Grove at 3:05 pm. Mallory comes along and waits with her. | Gives the demo a run that does not pass home, which is the point of the line. The book for the waiting room was already on Monday's checklist. |
| Cedar Grove to Brightwater | 20 minutes | Close to the 20 minutes from home, so neither choice changes the leaving time much. |
| Alexis's therapy | Each session runs from 3:30 to 4:15 pm, and they are home about 4:35 pm. | Gives the line an end, and gives the Monday clash with violin its numbers. |
| Charlotte's Monday reminder | She sets a reminder from Now at 1:40 pm, 15 minutes before she leaves, and it goes off at 2:00 pm. | C-03b opens on the notification. This replaces the earlier rule that she sets no reminder in the demo. |
| Wednesday's dance | Dance runs from 3:45 to 4:45 pm, and they are home by 5:00 pm. | Lets the Wednesday 5:10 pm board show dinner with Claire leading Now. |
| The washing machine | The washing machine leaks, and on Saturday Charlotte adds "Fix the washing machine" to Sunday with two steps of her own, "Check the drain filter" and "Run an empty rinse cycle". | Gives Sunday, which has nothing in the game plan, a task to lead Now. The steps are hers, because the coach does not advise on repairs. |
| Alexis's ordinary Monday | Violin is usually Monday at 4:00 pm at Lakeside Strings, which runs into therapy at 3:30 pm. This week violin moves to Tuesday, so the demo week has no clash, and the coach raises it on Sunday for the following Monday. | Kept as a conflict for the coach to find, because a parent cannot be expected to catch it, and that is the job MVP does (issue C34). |
| Brightwater to Lakeside Strings | 15 minutes | Gives the coach's recommendation of 4:45 or later its reason: the session ends at 4:15, and the drive and five minutes make 4:35. |
| Lakeside's contact | Charlotte has Lakeside's number from its text on Sunday evening. Lakeside is not on MVP, so a message to it is handed to her messages app. | Gives the Sunday coach card somewhere to send the request. |
| The backups | Plan B and Plan C on Thursday's sheet are the second and third options from C-06, and Friday's Plan B is the second option from C-06b, in the coach's words from those messages. | Shows the backups without inventing new ones, and shows Friday's sheet saying honestly that it has only one. |

# Appendix B: what is still open

1. **The navigation changes to Today, Coach, Game plan, Team and Kids, which is a spec decision.** Team holds the adults, with the inner circle, the village and village groups as its sections. Kids replaces Settings as the fifth tab, and settings move behind the parent's monogram. The plain fallback, if the sports naming is judged too much for this tab, is Kids and People. The tab names face customers, so they also need a brand sign-off.
2. **Village groups and chats live inside MVP, which is a spec decision.** Only members see a group's posts, only the people in a chat see the chat, and everyone in either needs MVP. Groups that exist elsewhere, such as WhatsApp groups, stay outside, and the parent forwards messages from them. The spec's §10 needs chats, person pages, adding someone, creating a group and the unread mark (issue M6).
3. **The three ways a request reaches someone need to go into the spec.** This includes what someone else's MVP shows them. This document now writes Edward's, Min-jung's and Ms. Reyes's screens for each request in Charlotte's week. View as shows the recipient's Today and those screens, and the recipient's other tabs are not part of the demo (issue S1).
4. **The rules for Today need to go into the spec.** They cover showing only today, the quiet layout and its four parts, the coach card as the one exception, the phase of the day, the dateline above the title, and what a card with no day opens. A later version could follow the family rather than the clock, ending the morning when the last child is dropped off, and that idea belongs on the roadmap.
5. **The game plan rules need to go into the spec.** They cover routine items shown more quietly unless they carry a status or mark, one entry per item in "This week's changes", and how conflicts are detected.
6. **How the coach card is visually marked is partly decided.** The coach now appears as a solid dot in coach amber beside "Your coach", and the coach card is the only card on Today, so it no longer needs color alone to stand out. Whether the card carries any other signal is still open.
7. **The single-Thursday premise is gone, and it still appears in the project instructions and the spec.** The spec's definition of checkpoints needs to match the moment IDs here.
8. **The status model has changed and the spec needs to match it.** Version 3.5 separates the owner, including "Nobody yet", from the four statuses, and treats Changed and Conflict as marks that can sit on any item.
9. **The prototype runs on a fixed calendar.** The demo week is Oct. 12 to 18, 2026, and the dateline shows the date. The device clock is still never read. A demo presented weeks later will show dates in the past, and the single anchor in the seed is how it moves (issue C26).
10. **It is not decided whether the four families live in the same town.** If they do, the place names reused from version 2.2 can stay.
11. **The MVP Recommends bylines are placeholders,** and it is not decided who writes the six articles still needed.
12. **Nobody has explained what "PAS eater" means.** It stays out of the demo until someone can.
13. **A fifth household has been suggested.** This stays parked.
14. **Marcus gets no personal time in his week.** This carries into his rewrite.
15. **The four entry points need to go into the spec,** including the platform limit on the share menu for a web app.
16. **Everything given before the account needs a storage rule in the spec.** This document assumes her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
17. **The source link needs to go into the spec,** along with "From you" for facts the parent tells the coach and the rule that new captured items arrive as Suggested.
18. **The Kids tab, child pages and school cards need spec sections.** The spec still needs to define how long a card's history is kept, and how the coach decides that a captured fact is reference for a card rather than an event for the game plan. Cards for studios, teams and clinics belong on the roadmap.
19. **Onboarding now asks two things before the first capture, which changes the wording of a locked decision.** "Value before account" still holds, because the account still comes after she has seen her draft. What changes is the line "It asks for one thing before it asks who she is", because the welcome and the children screen now come first. Greg made this decision in the design session so the coach knows whose capture it is. Heather needs to see it, and the creative brief and spec need the new order.
20. **The zip code's purpose is settled, and the board is corrected.** The welcome board shows 00123 and the helper from section 4.
21. **The small cup is the MVP mark.** Greg confirmed it on October 14, 2026, so it is the mark rather than an illustration, and Hearth's rule on illustration does not apply to it.
22. **The getting ready screen uses the wording in section 4.** Greg's Figma screen takes the section 4 headline and steps, and it loses its percentage, because a number that stalls or jumps looks broken (issue O6).
23. **"Time saved" is left out of the coach's introduction.** A number would need a rule for how it is worked out, and nothing in the product measures it.
24. **The Figma onboarding copy needs these changes before it is reused.**
   - The welcome headline is rewritten from two short sentences into one, keeping Greg's image.
   - The body line no longer says "MVP Coach".
   - The location helper no longer promises activities.
   - "Ages tell the coach a lot" moves to the age field for a child not yet in school, and loses its em-dash.
   - "your kids busy day" is no longer used.
   - The step counter now runs to five, because connecting her calendar is a setup step, so Greg's five-step counter is right again.
   - "Nice to meet you, Charlotte!" ends with a full stop, because the coach is warm without exclaiming.
   - The draft's date line "Oct. 5 - 9" becomes "Oct. 6 to 9", because the draft covers the rest of the week from Tuesday.
25. **The coach's line asking for next month's rotation sheet is not written,** because it falls outside the demo week.
26. **The real product and the prototype now follow one rule on dates.** Both show the day and the date on Today's dateline. Whether the game plan's day headings should also show dates is open, and the prototype leaves them as day names.
27. **MVP never writes to her calendar.** Greg confirmed it on October 14, 2026: MVP reads her calendar and builds the game plan from it, and nothing is ever written back. Writing to her calendar stays parked as F18 for the real product.
28. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, the same as the share menu.
29. **How quickly the plan follows her calendar needs a number in the spec,** along with what happens when she deletes an event that someone has already been asked about.
30. **The school screen is headed "Who's on your calendar?"** It now follows a screen about connecting her calendar, so the two may read as the same thing. A heading such as "Where do they go to school?" would avoid it, and the choice is Greg's.
31. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar, which would let the coach see his Thursday meeting without being told. The prototype does not show it.
32. **Decided October 14, 2026.** Greg confirmed the three assumptions from the design rounds. The coach card sits directly under Now, so the decision fits on the first screen. The wireframes show children as filled gray chips, and Family and adults as outlined. Chips lead each row, before the item.
33. **Today is phone-width only in review build 1.** At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar. A wide Today is parked as F20 on the spec's roadmap, and the wide Today screens from before the redesign are not used.
34. **The capture bar sits on Today and Coach.** Today's floating "Send to coach" button is retired in version 3.14. Whether Game plan, Team and Kids carry the capture bar is still open.
35. **Child photos are not adopted.** The Kids page offered optional photos, with the name chip as the fallback, and they would need a privacy rule first.
36. **The places need addresses for Directions.** Westview, Cedar Grove and Studio Ten have no addresses yet, and the maps app is staged in the prototype. This waits on item 10, whether the four families share a town.
37. **Directions is assumed to appear only when she is driving.** A child who leaves with another family gets "Remind me" only, as in C-03.
38. **The coach card loses its game plan link.** The quiet card has one button and "Other options", and the day it concerns is in its label. "Open Thursday in the game plan" is no longer on Today, and the full message on the Coach tab is the way to the day.
39. **JetBrains Mono stays, for the Label style only.** It sets the coach card's label and nothing else (see "Type").
40. **Decided.** The children's green and the coach amber are tokens in the design library, as `kid`, `kid-bg`, `coach`, `coach-ink` and `coach-bg`.
41. **Coach moves never touch her calendar while item 27 is open.** The change list proposed that "Move yoga to 12:15" also move the event on her calendar. Yoga is not on Charlotte's calendar, because she added it by voice in C-01, so her week never needs it, and writing to her calendar stays the open question in item 27. The "Move yoga to 12:15" button carries no icon, because a calendar icon would suggest that the move changes her calendar (issue T11).
42. **A two-home household has two starting points and one zip code field.** Travel times come from the zip code she gives on the welcome screen. Whether a household with two homes gives a zip code for each is open (issue O15). Charlotte has one home, so her week does not need it.
43. **Alexis's start time at Cedar Grove is the coach's next question after her first board.** The line is not written, because it falls on Tuesday, Oct. 6, outside the demo.
44. **Decided October 14, 2026.** Body large and Body strong join the scale with the uses in "Type", Subtitle's role is confirmed, and `body-small` is removed from the design library (issue C28).
45. **A talk-to-the-coach flow on the Figma boards page is parked.** The frame named "wireframes" on the "Design - lombardi" page (`2506:1261`) shows Charlotte talking to the coach from Today on a Thursday night, with the read-back landing on the coach card and on tonight's list. No moment in this document describes it, so it is parked as F21 on the spec's roadmap and is not built (issue K5).
46. **Messaging one village member directly is not part of this version (spec F22).** Chats are for the inner circle, and the village is reached through village groups. Whether village members can be messaged one to one is open. The alternative is a Message button on village members' pages, which would need the same "On MVP" rule as chats.
47. **The coach doesn't draft chat messages (spec F23).** It drafts requests, village posts and handoffs, but chats are written by the parent alone in this version. Whether the coach should offer to start a chat, such as "Ask Edward and Claire", is open.
48. **Chats can't be renamed, left or changed in this version (spec F24).** A chat's name is the names of the people in it. Adding someone to a chat, leaving one and muting one belong on the roadmap.
49. **Invitations and calls leave no task,** unlike a message handed to another app. An invitation is not part of the plan, and a call is not a message she might forget to send. The spec's §9 needs this exception beside the handoff rule.
50. **Sharing a chat message to the coach is not decided (spec F25).** A chat might hold something the plan needs, such as Edward offering to drive. The share menu would let her send it to the coach as she does from WhatsApp, and nothing in this version does it.
51. **Person statuses are icons with an initial.** Greg chose icons over names on October 14, 2026, because names made rows too long. The words survive in notifications, coach lines and accessible labels. Whether a parent recognizes an hourglass as "asked" without the word is worth checking in user testing.
52. **Fraunces leaves the coach's in-app voice.** The coach speaks in Inter in the app and keeps Fraunces only in onboarding. Whether onboarding's coach lines should also move to Inter, so the coach sounds the same from the first screen, is open.
53. **Whether parents find the Leave sheet is worth checking in user testing.** It opens from the large departure time and from the leg line with its chevron, and there is no separate Change link, so Today stays quiet.
54. **The notification title names two stops.** For a run with more than two stops it names the first and the last before home, and drops the stops between them. Whether that is enough to recognize the run on a lock screen is worth checking.
55. **Friday's carpool run is not written.** It collects Ada and Sophie on the way to Cedar Grove, and their homes have no travel times. No moment shows Friday's Today, so nothing in the demo needs it.
56. **Backups are written only for the runs the demo shows.** Thursday's and Friday's sheets in C-06 and C-06b, and Monday's in the Sunday board, carry backups. Every other sheet shows no backups in the prototype, which is not the same as the sheet saying there is no honest backup. The real product works them out.
57. **Running late to a pickup could offer a note to whoever is waiting.** It is parked as F27 on the spec's roadmap.
58. **Whether the edge of the sheet reads clearly as it covers Now** is worth checking on a real phone. The canvas sheet and the paper behind it are close in tone, and the rounded corners carry the edge with no line or shadow, because Today allows only two drawn lines. If the edge is too faint, the fix is a token in the library, not a new line.
59. **A compact strip with the route and leaving time could stay above the sheet once it covers Now.** It is parked as F29 on the spec's roadmap, and user testing will show whether parents lose track of the time while they read the rest of the day.

# Appendix C: change log

## Version 3.15, October 15, 2026

Works out every state of Now, gives Today one way to change a time, and gives the coach ready backups, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | Now follows one rule: the next thing today that needs her at a set time, then her leading task, then a quiet line. A timed thing at home can lead Now. Asked and Nobody yet items, someone else's trips and items with no time stay in Later today. |
| 2 | A departure is a leg on a run, and a run is drawn as a line of stops that need not start or end at home. Now shows the current leg, a line naming the next station, and steps down the line as each stop comes due. A leg passes through coming up, time to leave, running late and passed. |
| 3 | The Leave sheet is the one place Today changes a time. It draws the run as a line, lets her change when she leaves any stop, and changes the start time only on her own items. Tomorrow starts rows open it at night. |
| 4 | The coach keeps Plan B and Plan C at the foot of the Leave sheet, and Other options opens that sheet on Today. At least one backup depends on nobody else, wherever one exists. |
| 5 | Sheets become one pattern, with a grabber, a Close icon, four kinds of body, a set state and two heights. The reminder sheet gains a notifications-off state. |
| 6 | Every leaving time follows one rule, which moves the afternoon pickups to 2:15 pm, orchestra to 6:55 am, yoga to 2:00 pm and the checkup to 3:10 pm. School runs in the game plan show the time school starts. |
| 7 | C-03b replaces the Monday afternoon board as a built moment. Boards for running late, Wednesday at 5:10 pm and Sunday are added for the wireframes only. The Sunday board raises the Monday clash between therapy and violin. |
| 8 | The done count reads "today" from noon, the coach card label gains "for today", and section 4 gains the Leave sheet, the backups, every sheet's parts and the new reminder sheets. |
| 9 | Appendix A gains the leaving time rule, the Monday run, two travel times, the therapy session's length, the Monday reminder, Wednesday's dance, the washing machine, Alexis's ordinary Monday, Lakeside's contact and the source of the backups. Appendix B gains items 53 to 57. |
| 10 | Now reads like a boarding pass: the route, the leaving time with a status pill, and the Drive, Arrive and Pickup or Starts fields, above a perforation. The drive line is retired. Checklists in Now, Ready tonight and Tomorrow starts are grouped under each child's name in the children's green, and her tasks under "Before you leave", with no chips and no counts. "Call Brightwater before you leave" becomes "Call Brightwater", and Alexis's violin and orchestra folder become two items. |
| 11 | The header and Now stay in place on Today. The canvas sheet rises over both when she scrolls, and when the header and Now are taller than the screen, they scroll until Now's actions clear the capture bar before they hold still. Ready tonight behaves the same way at night. |
| 12 | The route's chevron, and the Leave sheet behind it, appear only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks in C-03, has no chevron, and its route and time are not tappable. |
| 13 | Ready tonight on Charlotte's first board in C-00 is grouped under Mallory's name, as in C-07, so the rule that checklists are grouped by child has no exception. |

## Version 3.14, October 14, 2026

Records Greg's design decisions after reviewing the board drafts. No moment, coach line or person changes.

| # | Change |
| ----- | ----- |
| 1 | The coach speaks in Inter everywhere in the app. The Today coach card moves from Voice to Body large, and Voice is kept for the coach's lines in onboarding and for article titles. |
| 2 | The capture bar replaces "Send to coach" on Today. It is docked above the tab bar, starts with the coach's dot, reads "Type, talk or add an image", and hides while the coach card asks for a capture. The skipped-capture coach card holds Take a photo, Attach a file and Talk or type. Appendix B item 34 is decided for Today and Coach. |
| 3 | A person's answer shows as their initial and an icon: hourglass, thumbs up or thumbs down. The words remain in notifications, coach lines and accessible labels. |
| 4 | A person page's "This week" is laid out as lanes, with the day abbreviated to three letters and the answer icon on the right. |
| 5 | Appendix B gains items 51 and 52. |
| 6 | Today has two surfaces: the header and Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with rounded top corners. |
| 7 | The countdown sits under the departure time and reads "in 15 min" without "Next ·". |
| 8 | A staged plan screen, Choose a plan (0e-p), follows the account. Its words are recorded as proposed. |
| 9 | Greg's answers: the cup is the MVP mark, MVP never writes to her calendar, the household switcher opens from the monogram, and the invented email domains stay. |

## Version 3.13, October 14, 2026

Adds Team as a working tab, chats with the inner circle and the recipient's side of every request, so every tab can be tested at every moment, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Talking with her people". The parent messages one member of her inner circle directly or several in a group chat, choosing them when she starts it, and "Everyone on MVP" chooses all of them. Only people with MVP can be in a chat, the coach never reads chats, and nothing in a chat changes the plan. The same composer posts to a village group. Adding someone, inviting by text and creating a village group are described. |
| 2 | Section 2 gains "Every tab at every moment", covering what the Coach, Game plan, Team and Kids tabs show when opened between moments, and what View as shows. |
| 3 | "Her people" gains a number for each person and the five other members of Cedar Grove parents. Section 3 gains "The Team tab", with the tab before and after chats, four person pages, the group page and both composers. |
| 4 | Four moments are added. In C-04b Edward says yes to the library run with a note. In C-05c Charlotte asks Edward and Claire how to tell Alexis about her therapist. In C-06c she messages Claire about dinner. In C-08b the coach names Dr. Ortiz for a question about Mallory's cough. |
| 5 | C-02, C-06 and C-06b gain the recipient's screens: Edward answering and changing his answer, Min-jung's card and Ms. Reyes's text and web page. C-05's composer heading changes from "New post" to "New message", and C-05 gains its reply notifications. |
| 6 | The game plan's library run and checkup rows gain C-04b and C-08b. Section 4's Team table is rewritten, and the Requests and Coach tables gain rows. Appendix A gains eleven rows, Appendix B items 2 and 3 are updated, and items 46 to 50 are added. |
| 7 | "Type" grows to nine styles. Body large and Body strong join it, Subtitle's role is confirmed, and `body-small` leaves the library. Appendix B item 44 is decided. |

## Version 3.12, October 14, 2026

Records Greg's decisions after the readiness scrub and fixes three small faults. No moment or on-screen line changes.

| # | Change |
| ----- | ----- |
| 1 | "Type" grows to seven styles. Title is Inter 20, extra bold, for section names on Today and the line naming the next departure. Subtitle is Inter 17, semibold, for headings inside a page or card, and its role is proposed (Appendix B item 44). Label is JetBrains Mono 13, extra bold, for the coach card's label only. The table gives each style's name in the design library. |
| 2 | Appendix B item 32 is decided, because Greg confirmed the three assumptions from the design rounds. |
| 3 | Today is phone-width only in review build 1, and a wide Today is parked as F20. "Send to coach" appears on Today only in review build 1, and item 34 stays open for later. |
| 4 | Appendix B items 6, 22, 39, 40 and 41 are decided: the coach card is marked by the dot and the coach's tint, the getting ready screen keeps section 4's wording, JetBrains Mono stays for the Label style, the two colors are tokens, and the yoga button carries no icon. |
| 5 | The free dress day starts with Nobody yet as owner, following the rule that a suggested item has no owner until she chooses it. |
| 6 | The terms table now says section 2 lists four statuses and two marks. Appendix B gains items 44 and 45. |

## Version 3.11, October 14, 2026

Puts dates back on Today, rebuilds Charlotte's first board and settles travel times on the zip code, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | The demo runs on a fixed calendar, with the demo week from Monday, Oct. 12 to Sunday, Oct. 18, 2026. Today's dateline shows the day and the date, such as "Monday, Oct. 12", and the draft on 0c shows the dates it covers. Everything else keeps naming the day of the week. The seed keeps demo times and gains one anchor date, and the device clock is still never read. This reverses version 3.6. Every Today header, the terms table, the moments table and the moment headings now carry dates. |
| 2 | C-00 moves to Monday, Oct. 5, the week before the demo week, so one October rotation sheet covers both. Her first week's letters become C, D, E, F and A, the draft's rows and line change to match, the field trip moves to Thursday, Oct. 29, the harvest fair is Friday, Oct. 23, and her first newsletter forward moves to the Wednesday of her first week. The Westview card's Documents row reads "last week" for the rotation photo. |
| 3 | The rotation calendar is headed "Westview Kindergarten" with "October 2026", and the read-back calls it "calendar for October". |
| 4 | Her first board shows "Ready tonight" with Mallory's sneakers, both girls under "Tomorrow starts" with "Start time needed", and the coach card asking for Mallory's start time. Answering opens a sheet, fills in Mallory's row with an 8:15 am leaving time, and turns the card to the rest of the week with "Open the game plan". The board has no article. "Nothing is ever settled" gains how the coach card handles an answer, and "Today shows today" says when a card that needs no answer still appears. |
| 5 | Travel times are worked out from her zip code, with five minutes added to each leaving time, and MVP never asks for a home address. "Onboarding" gains the rule, the travel table is described as the zip code estimates, and Appendix A gains a row for it. Appendix B item 20 records the zip code's purpose as settled. |
| 6 | Section 4 gains the answer sheet, "Start time needed", the coach card after an answer, the Answer button and the draft's date line. Appendix A gains the demo calendar and travel times. Appendix B items 9, 20, 24 and 26 are updated, and items 42 and 43 are added. |

## Version 3.10, October 13, 2026

Writes in the Today redesign and the related decisions from the design rounds on the Today variations and the Kids tab icon.

*Corrected October 14, 2026, without a new version: the coach's messages in the Coach tab conversation are set in Inter, as Body, and the Voice style is used on the Today coach card and in onboarding, matching the design library.*

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Type", with five styles: Display, Title, Voice, Body and Meta. Everything the coach says is set in Fraunces again, as the Voice style, replacing the October 8 correction to version 3.9. There are no uppercase labels, so the MVP Recommends line and the article labels are now in sentence case. |
| 2 | "Today shows today" is rewritten for the quiet layout: Now, the coach card, Later today and MVP Recommends, in that order. The coach card is the only card, the checklist merges the going with items and her tasks under Now, the per-person rows and the column headings are gone, and at most one article appears. The coach card appears only when the coach needs an answer, so C-07 loses its card. |
| 3 | Section 2 gains "How people are shown". Children appear as name chips in one shared green, with "Both", "All three" and "Family" as group chips, adults as outlined initials and the coach as a solid amber dot. The per-person colors and the children's monograms are retired. |
| 4 | The Kids tab icon becomes two figures of different heights. |
| 5 | The capture button on Today reads "Send to coach", with an up arrow, in place of "Add". The paragraph on the capture bar no longer mentions a send button, which version 3.9 had left in by mistake. |
| 6 | Now gains "Remind me" and "Directions", the reminder sheet, the drive line and the reminder notification, in "Now: reminders and directions" and section 4. |
| 7 | "Nothing is ever settled" gains how a coach card's button carries out the recommendation, with no second confirmation, an Undo link, and "Other options" for the full choice. MVP changes only its own plan, never her calendar, and never books anything. |
| 8 | The Today boards in C-00, C-03, C-05, C-06, C-06b, C-07 and the Monday afternoon board are rewritten in the new layout. C-06 is the design rounds' example. In C-06 and C-06b Charlotte reaches the coach's full options through "Other options", and C-06 shows what the card's own button would have done, and the card for Min-jung saying no follows the same form. The coach's lines in C-00 say "Mallory's checklists" in place of "her going with lists", which also removes a pronoun for a child. |
| 9 | The game plan gains Wednesday's dinner with Claire. Appendix A gains the dinner, Wednesday's drive, the reminder times, Willow's booking link and Wednesday's call. Appendix B gains items 32 to 41, and items 4 and 6 are updated. |
| 10 | Several lines from the change list are corrected so they follow existing rules and facts. The coach card no longer says "collect her", because the coach never uses a pronoun for a child. The line after the yoga move no longer starts "Moved to 12:15", which was a fragment that described what the coach had done. The notification body is one sentence instead of two fragments. Adults and Family are outlined on paper rather than on white. Wednesday's drive is 22 minutes, from the travel times, instead of 12. Only Mallory's pickup changes to "You" after the yoga move, because Alexis's still shows "Edward: yes". The move carries no Changed mark, because the change is hers. The move does not touch her calendar (Appendix B, item 41). Today's rows say "Pick up at", the same as the game plan and requests, where the design rounds wrote "Collect at". Onboarding's capture button reads "Attach a file", the same as the capture sheet, where version 3.9 had "Add a file". |

## Version 3.9, October 6, 2026

Closes the gaps the calendar wireframe pass reported, and writes in the four decisions that pass drew from.

*Corrected October 8, 2026, without a new version: everything the coach says is now set in Inter, with Fraunces reserved for headlines and titles, and the phase of the day and the calendar mark use the icon names from spec §17 instead of Lucide names. The day of the week moves above Today's title as a dateline, following Greg's Ready for dev frames.*

| # | Change |
| ----- | ----- |
| 1 | Requests are answered item by item, with an optional note and a Change link. A "can't" note reopens the item and the coach turns it into options. A "yes" note shows under the item with the Changed mark. There are no read receipts. Section 2 says so, and C-02 and C-06 are rewritten to match. |
| 2 | She hears about every answer and every changed answer through a notification and the item's status. Section 4 gains the notification wording, the note field, the line after answering and the item rows. |
| 3 | Every handoff to another app leaves a task on her list, because MVP cannot see whether it was sent. C-03 gains the WhatsApp reply's address line and its task. |
| 4 | The capture bar has no Send. The microphone becomes an arrow, labeled "Give this to the coach", while the field holds typed text. |
| 5 | Game plan items show the time the thing starts, so Thursday's ballet is at 4:15 pm, and Today's departure shows the 3:55 pm leaving time. |
| 6 | "Taught when useful" gains the WhatsApp message Charlotte pastes, the coach's read-back and times, and the share instructions now say Forward and then the share button, which is how WhatsApp works on an iPhone. |
| 7 | Appendix A gains the forwarding address, the WhatsApp group's name, Westview's email subject and the rule for the rotation calendar's month. |
| 8 | Section 4 gains the provider name on the permission screen, the getting ready labels for a parent who skipped steps, and the calendar mark on the child page. Charlotte's week now uses all three request routes. |

## Version 3.8, October 6, 2026

Adds the parent's own calendar, at Greg's direction. MVP connects to it once during setup, reads it, and keeps the plan in step with it.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "Her calendar". MVP connects to Google Calendar, Apple Calendar or Outlook, reads it and never changes it. The coach sorts each event by whom it concerns, calendar items come in owned by her with no status, and a new or moved event that runs into the plan raises a conflict and a coach card. Calendar items carry a calendar mark and are moved in her calendar rather than dragged in the game plan. |
| 2 | Onboarding gains a calendar screen (0q) right after the account, with a staged permission screen. Setup now has five screens, and the counter runs from 01 of 05 to 05 of 05. Getting ready gains the step "Reading your Google Calendar", and the coach's introduction reports what came in from her calendar. The onboarding times move by one minute from the calendar screen on, and C-00 now ends at 8:40 pm. |
| 3 | Charlotte's Google Calendar is added to Appendix A. Alexis's therapy and dance and Mallory's ballet now come from it and carry the calendar mark on Today and in the game plan. |
| 4 | C-06b is added. Charlotte books Mallory's checkup in the Northside portal, it reaches the plan through her Google Calendar, it runs into Friday's tutoring, and she asks Ms. Reyes by text message to skip this week. The Wednesday portal message and the task to call Northside are changed to match, and Friday's rows in the game plan table are updated. |
| 5 | Section 4 gains the calendar screen, the staged permission screen, the calendar mark, the coach card wording for a new calendar event, the source link and the drag message for calendar items, and "Your calendar" in Settings. "Taught when useful" gains the line offering the calendar to a parent who skipped it. |
| 6 | Appendix B gains items 27 to 31, covering writing to her calendar, Apple Calendar on the web, how quickly the plan follows, the school screen's heading, and Edward's own calendar. Item 24 is corrected, because the step counter now runs to five. |

## Version 3.7, October 2, 2026

Adds the hand-off in onboarding and makes the first draft a week, at Greg's direction.

| # | Change |
| ----- | ----- |
| 1 | A check-the-photo screen (0v) follows the first photo, with Use this photo and Retake. It applies to photos only. |
| 2 | The read-back ends with a hand-off. The coach says what it will make and what it keeps for later, and Charlotte starts the draft with "Make Mallory's plan". A "Something's not right" link lets her correct the read-back first. |
| 3 | The first draft covers the rest of this week instead of the rest of the month, because a month is too much to get right and too much can change. The draft is headed "Mallory's plan for this week", and the button, thinking screen, account prompt and getting ready step say "Mallory's plan", because a plan is something the coach can make and a week is not. |
| 4 | The draft adds back-to-school night, which falls in C-00's week. The field trip and the harvest fair go on the Westview card for their own weeks. |
| 5 | Section 4 gains the check-the-photo screen and the hand-off. The prepared calendar photo must carry no month name or year. |

## Version 3.6, October 1, 2026

Removes every fixed date, so the demo can be presented in any week.

| # | Change |
| ----- | ----- |
| 1 | "Dates, times and places" now says the demo shows no calendar date, month name or year, and the seed files hold none. Days are named by the day of the week, and anything further away is relative to the demo week. |
| 2 | The date line on Today becomes a day line, showing only the day of the week, such as "Monday". Every "[date from seed]" is removed. |
| 3 | The rotation calendar no longer names a month. The coach says "this month" and "the rest of the month", and the draft is headed "Mallory's month". |
| 4 | The rule that the demo week must start after the 15th is removed, with the Appendix A row for the calendar's month. |
| 5 | Appendix B item 9 now records that the prototype must not depend on a date. Item 26 is added, noting that the real product will show dates. |

## Version 3.5, October 1, 2026

Records the decisions from the design session after correction pass 5 and answers the gaps listed in the wireframe notes.

| # | Change |
| ----- | ----- |
| 1 | Onboarding is now fifteen screens in three parts. A welcome screen (first name and zip code) and a children screen (names and grades) come before the first capture, both skippable. Thinking screens cover the wait for the read-back and the draft. After setup, a getting ready screen covers account creation, and the coach introduces itself before Today. The section is renamed "Onboarding". |
| 2 | The coach always confirms which child a capture is for, preselecting by grade with one tap. The highlight question stays the coach's one question, and Charlotte's reply drops the sentence about kindergarten. |
| 3 | The account screen asks only for an email address or Apple sign-in, because her name comes from the welcome. The school screen replaces ages with each child's school, and asks an age only for a child not yet in school. |
| 4 | "Here is the rest of September for Mallory" moves from the read-back to the draft screen, after the wait. |
| 5 | Onboarding and setup headlines are set in Fraunces, as display type, which corrects version 3.4. |
| 6 | Failure and waiting states are written: a capture that can't be read, a wait over twenty seconds, account creation that fails, and leaving during account creation. Demo timings are two seconds for each thinking screen and four for getting ready. |
| 7 | The coach's introduction recaps the month rather than tomorrow, carries a ticked library reminder that asks for notification permission, and leaves out "Time saved". |
| 8 | Her first board is at 8:39 pm, with "Mon" in the date line. A board for a parent who skipped the capture is written. |
| 9 | The status model separates the owner, including "Nobody yet", from the four statuses, and treats Changed and Conflict as marks that can sit on any item. This resolves owned items that carried Changed and "Nobody yet" appearing as both owner and status. |
| 10 | Conflicts with several items are named together, such as "Conflicts with both pickups". C-01 gains the game plan's "This week's changes" while the conflict is open. |
| 11 | The date line sits on the title's row, shortened on a phone. Pages inside a tab show Back instead of the monogram. A coach card about no particular day opens its message on the Coach tab. |
| 12 | Jenna's message is shared at 6:16 am, after the newsletter read-back, everywhere it appears. The C-03 coach card gains its game plan link. The C-06 board loses the Westview note task, which appears only after she chooses, and gains the conference article. |
| 13 | A Monday afternoon board is written for the wireframes, with no demo moment. Edward's own Today is described, with his monogram and "This morning". |
| 14 | Section 4 gains copy for the welcome, children, thinking, confirmation, school, getting ready and introduction screens, the web page for someone without MVP, village group lines, the "On MVP" mark, Kids tab rows, "From you", the Add sheet, and what Settings holds. The capture bar's middle control is renamed Attach. |
| 15 | Kids tab rules gain hidden empty sections, source links shown when a fact is opened, and a Changed mark on a school's row. |
| 16 | The Team definition now says versions 3.1 and 3.2 called it Your people. |
| 17 | Appendix A gains the zip code, the calendar header and month rule, the Westview event dates and hours, and the onboarding times. Appendix B is rewritten: resolved items are removed, and new items cover the locked decision, the zip code, the brand mark, the getting ready copy, "Time saved" and the Figma copy changes. |

## Version 3.4, October 1, 2026

Merges the capture-first onboarding with the existing Figma onboarding screens.

| # | Change |
| ----- | ----- |
| 1 | "Onboarding starts with capture" now sets out the whole flow as nine screens in two halves: splash, capture, read-back and draft with the account prompt, followed by four setup screens for the account, children, household and the adults who help, and then Today. |
| 2 | The capture screens carry no step counter. The counter runs from 01 of 04 to 04 of 04 on the setup screens only. |
| 3 | The first screen gains a "Skip for now" link for a parent with nothing to hand over, and the children screen is defined in two states, filled in from a capture and empty. |
| 4 | C-00 now runs from the splash to Charlotte's first board on Today. Mallory arrives on the children screen filled in from the calendar photo, Charlotte adds Alexis, chooses Two parents and English, and adds Edward and Claire as the adults who help. Her first board shows Tuesday's letter day, E, and a coach card asking what time Mallory needs to be at Westview. |
| 5 | The draft month is headed "Mallory's September". |
| 6 | Section 4 gains copy for the splash, the skip link, the draft heading, the step counter and all four setup screens, including corrected versions of the Figma lines. |
| 7 | Appendix A records Charlotte's setup answers and her first board. Appendix B gains item 20, on the new onboarding order for the spec, and item 21, on the four copy fixes the Figma onboarding screens need. |

## Version 3.3, September 30, 2026

Settles the navigation and adds the Kids tab, child pages and school cards.

| # | Change |
| ----- | ----- |
| 1 | The tabs are now Today, Coach, Game plan, Team and Kids. Your people is renamed Team, because Your people and a family tab overlapped. Kids replaces Settings as the fifth tab, and settings open from the parent's monogram at the top right of every tab, or from the bottom of the sidebar at wider sizes. |
| 2 | Section 2 gains "The Kids tab and school cards", covering child pages, the six sections of a school card, how the coach files reference on a card, the Changed mark and history on card facts, the Add button, and the predictable moments when the coach asks for updates. |
| 3 | A new section, "The Kids tab", gives Alexis's and Mallory's pages and the full Westview and Cedar Grove cards as they stand at the start of the demo week. |
| 4 | C-05b is added, an optional moment on Tuesday afternoon. A Westview email moves pickup changes to a new address, and the coach updates the Westview card, marking the changes and keeping the old version in its history. |
| 5 | In C-06, the coach now says Westview needs the note by 11:00 on Thursday, and the note goes to pickups@westviewk.org, the address that changed in C-05b. |
| 6 | The terms table gains Team, Kids, child page and settings, and the school card entry is updated. Section 4 replaces the school card copy with copy for the Kids tab, child pages and school cards, and adds the settings monogram. |
| 7 | Appendix B item 1 now records the navigation decision, including the fallback of Kids and People, and item 18 records that school cards live on the Kids tab, with what the spec still needs to define. Appendix A records the new invented facts. |

## Version 3.2, September 30, 2026

Adds how things get into MVP, an onboarding moment for Charlotte, and the phase-of-the-day title on Today.

| # | Change |
| ----- | ----- |
| 1 | Section 2 gains "How things get into MVP", which defines four entry points (the share menu, a forwarding address, the camera and voice), the three kinds of input the coach handles (one-off events, recurring rules and reference), the read-back, and the source link on every captured item. |
| 2 | Section 2 gains "Onboarding starts with capture". The first screen asks for one thing from this week, and the account comes after the parent has seen her first draft. |
| 3 | C-00 is added, set two weeks before the demo week. Charlotte photographs Westview's rotation calendar before creating an account, and the coach asks one question about the highlighting before drafting Mallory's month. Two coach lines for teaching the share menu and forwarding follow it. |
| 4 | A new section, "What the schools send", holds invented versions of the Westview rotation calendar, the Westview contact list and the Cedar Grove newsletter, based on real material with every name and number replaced. |
| 5 | C-01 now opens with the coach's read-back of the Cedar Grove newsletter, which keeps two items for Alexis and leaves out the rest. Charlotte shares Jenna's message through the share menu instead of forwarding it. Alexis's free dress day is added to Friday. |
| 6 | Mallory's rows show Westview's letter day, and her Monday checklist now reads "Sneakers, it's a motor skills day", tying it to the rotation. |
| 7 | The Westview note in C-06 is addressed to office@westviewk.org, taken from the Westview school card. |
| 8 | Today's title now names the phase of the day, "This morning", "This afternoon" or "Tonight", with a lucide icon. C-03 and C-06 show "This morning" and C-07 shows "Tonight". The evening checklist is renamed "Ready tonight" so that it does not repeat the title. |
| 9 | The terms table gains phase of the day, capture, share menu, forwarding address, source link and school card. |
| 10 | Section 4 gains the phase titles, the capture bar and its placeholder, read-back buttons, the onboarding screens and the school card. |
| 11 | Appendix A records the new invented facts, including the reserved 555-01 phone numbers and a check on the invented email domain. Appendix B gains five items for the spec. |

## Version 3.1, September 29, 2026

A correction pass after the first wireframes, answering the gaps and contradictions listed in the wireframe notes and recording Greg's decisions on seven open questions.

| # | Change |
| ----- | ----- |
| 1 | A "Terms used in this document" table is added to section 1, because several names exist only inside this project and confused readers who had not seen the wireframes. |
| 2 | The tab called Team becomes Your people. It holds the inner circle, the village and the parent's village groups, and village groups are created and managed inside MVP. C-05 now posts to Charlotte's village group, Cedar Grove parents, instead of the WhatsApp group. |
| 3 | Section 2 now sets out three ways a request reaches someone: a card in MVP, a text message with a link, or a handoff to another app. C-02 shows Edward receiving his request in his own MVP, and the Westview note becomes a handoff to email and a task on Charlotte's list. |
| 4 | The rule that nothing leaves MVP any other way is reworded to say that nothing goes to another person unless the parent sends it herself. The old wording contradicted the WhatsApp reply in C-03. |
| 5 | The status names are settled. The seed file uses internal names, and the screen always names the person involved. Items the parent owns herself show "You" and carry no status, which answers what a blank status meant. Changes she makes herself are never flagged back to her. |
| 6 | Conflicts are added as a separate mark. C-01 now shows yoga in conflict with both Thursday pickups until Charlotte chooses. |
| 7 | Today shows only today. The coming-up list moves off Today, the coach card is kept as the one exception with the reason stated, and C-07 shows tonight's preparation and tomorrow's first departures rather than the whole of Thursday. |
| 8 | The game plan holds every item, including routine ones, and opens with "This week's changes". C-04 shows that list before and after Charlotte's changes. |
| 9 | The standing week becomes "The week in the game plan", which lists every item with its on-screen wording, owner, kind, starting status and how it changes during the demo. |
| 10 | C-06 now has its own Wednesday board, and Thursday's reopened pickup reaches Charlotte through the coach card, which quotes Edward's answer. |
| 11 | Ms. Reyes's text moves to Sunday evening, so the tutoring suggestion on Monday morning no longer appears before the message that causes it. |
| 12 | The coach's answer in C-08 now says 7:40, matching the time Mallory leaves in Friday's carpool. Charlotte's own "8am" stays, because a parent can round and the coach can't. |
| 13 | The village replies in C-05 have fixed times and a fixed viewing time, and the newest reply is listed first. |
| 14 | Every board uses the same four columns, including Evening. |
| 15 | Checklist headings use the child's name, such as "Going with Alexis", in place of "Going with her". |
| 16 | The "Her people" table gains a column saying who has MVP and a column with the line shown on screen, written to Charlotte rather than about her. |
| 17 | References to saffron are removed, because how the coach card is visually marked is now undecided. |
| 18 | Section 4 collects every label, heading, button and placeholder on the demo screens, which fills the 21 gaps left open in the first wireframes. |

## Version 3.0, September 29, 2026

A rewrite, starting with Charlotte and Edward only, after the review of version 2.2 found that the document no longer matched the product.

| # | Change |
| ----- | ----- |
| 1 | The document now has two jobs, agreeing the shape of the demo and fixing the on-screen language and seed data. The presenter script moves to its own document and refers to moments here by ID. |
| 2 | The single-Thursday frame is gone. Each family is shown across a stretch of their week as a series of moments, and the household switcher moves between those moments. |
| 3 | Nothing in a plan is presented as settled. Section 2 defines the statuses every item carries, and the coach no longer calls anything set or covered. |
| 4 | "Team" is replaced by the inner circle and the village, with the rule that people see only what the parent sends them. |
| 5 | Messages that go to other people are written in the parent's voice, in the first person, and she sends them herself. The version 2.2 handoffs were written in the third person. |
| 6 | Today is described as a household board, with the next departure at the top, a list of what goes with each child, a row per person and a single coach card. Charlotte's moments give the board's text verbatim. |
| 7 | The seven ordered steps become eight things every family shows. A coach answer to a parenting question is added, along with an MVP Recommends article for it, because version 2.2 never showed the coach answering a question. |
| 8 | Alexis and Mallory now attend different schools, Cedar Grove Elementary and Westview Kindergarten, with different hours. |
| 9 | Charlotte's section is rebuilt as eight moments from Monday to Thursday, including a change that reopens an accepted pickup and a choice she makes against the coach's recommendation. |
| 10 | Charlotte's two MVP Recommends articles are written in full. |
| 11 | Charlotte's full standing week and travel times are added, so the game plan can be seeded for every day. Times now carry am and pm. |
| 12 | Dates are written as days of the demo week, with facts outside the week written as offsets from its Monday. |
| 13 | The orthodontist, the ballet shoes and Edward's Tuesday voicemail from version 2.2 are dropped, because nothing in the demo depended on them. |
| 14 | Spelling is American throughout. |

## Versions 2.0 to 2.2, September 29, 2026

Version 2.0 restructured the document around the notes from the September 22 and 25 calls, version 2.1 added the game plan and team sections and reduced the weight on meals, and version 2.2 was a writing pass. Their full change logs remain in version 2.2, which is also the reference for Calypso, Alexandra and Ben, and Marcus until their sections are rewritten.
