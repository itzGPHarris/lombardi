// Interface copy for onboarding and setup, from fixtures section 4, "Onboarding". The coach's lines
// in onboarding come from the seed's conversation, not from here.
export const splash = 'Most Valuable Parent';
export const welcome = {
  headline: 'Your week has a lot of moving parts, and the MVP Coach helps you keep track of everything.',
  line: 'Just the basics to start us off in the right direction.',
  name: 'Your name',
  zip: 'Zip code',
  continue: 'Continue',
  skip: 'Skip for now',
};
export const children = {
  heading: 'Who are you planning for, {person}?',
  headingNoName: 'Who are you planning for?',
  firstName: "Your kiddo's first name",
  birth: 'Birth month and year',
  addAnother: '+ Add another child',
  continue: 'Continue',
};
export const grades = {
  headingTwo: '{child} is likely in {grade}, and {child2} is likely in {grade2}.',
  headingOne: '{child} is likely in {grade}.',
  headingMany: 'Here are the grades the MVP Coach suggests.',
  line: "The MVP Coach works these out from each child's birth month. Change any grade that's wrong.",
  label: "{child}'s grade",
  list: [
    'Not in school yet', 'Pre-K', 'Kindergarten', 'First grade', 'Second grade', 'Third grade', 'Fourth grade',
    'Fifth grade', 'Sixth grade', 'Seventh grade', 'Eighth grade', 'Ninth grade', 'Tenth grade', 'Eleventh grade',
    'Twelfth grade',
  ],
  continue: 'Continue',
};
export const coachFirstCapture = "Show me one thing from this week, such as a school handout, an email or a voice note, and I'll turn it into a plan.";
export const firstCapture = { takeAPhoto: 'Take a photo', attachAFile: 'Attach a file', talkOrType: 'Talk or type', skip: 'Skip for now' };
export const checkPhoto = { use: 'Use this photo', retake: 'Retake' };
export const handOff = { make: "Make {child}'s plan", somethingWrong: "Something's not right" };
export const thinking = { photo: 'Reading your photo…', file: 'Reading your file…', listening: 'Listening…', making: "Making {child}'s plan…" };
export const confirm = { calendar: 'Whose calendar is this?', newsletter: 'Whose newsletter is this?', choice: '{child} · {grade}' };
export const draft = { heading: "{child}'s plan for this week", suggested: 'Suggested' };
export const accountPrompt = { heading: "Keep {child}'s plan", line: 'Create an account to save this plan and add the rest of your family.', create: 'Create account', notNow: 'Not now' };
export const stepCounter = '0{count} of 04';
export const account = { heading: 'Create your account', email: 'Email', apple: 'Continue with Apple', continue: 'Continue' };
export const plan = {
  headline: 'Pick a plan and start your free trial today!',
  toggle: ['monthly', 'annual'],
  basic: ['Basic', '$8.99 / month', '7-day free trial', 'Monthly membership', 'AI coach', 'Team feedback'],
  family: ['Family', '$13.99 / month', '7-day free trial', 'Monthly membership', 'AI Coach', 'Up to six users', 'Team feedback'],
  buy: 'Buy',
  line: 'Purchases will open Stripe in a new tab.',
};
export const calendar = {
  heading: 'Connect your calendar',
  line: "Connect the calendar you already use, and the MVP Coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it.",
  choices: ['Google Calendar', 'Apple Calendar', 'Outlook'],
  notNow: 'Not now',
  connected: 'Connected · {calendar}',
  continue: 'Continue',
  permission: 'Most Valuable Parent wants to see your calendar',
  allow: 'Allow',
  cancel: 'Cancel',
};
export const school = {
  heading: 'Where do they go to school?',
  line: 'Add each child\'s school and start time, so the MVP Coach knows whose emails and handouts are whose and when to leave.',
  school: 'School',
  startTime: 'Start time',
  fromCalendarPhoto: 'From your calendar photo',
  age: 'Age',
  addAnother: '+ Add another child',
  continue: 'Continue',
};
export const household = {
  heading: 'Your household',
  question: 'How is your household set up?',
  choices: ['Two parents', 'One parent', 'Two homes', 'Something else'],
  language: 'Language at home',
  subheading: 'Who else helps?',
  line: 'Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP.',
  name: 'Name',
  relationship: 'Relationship',
  addSomeone: '+ Add someone',
  done: 'Done',
};
export const gettingReady = {
  headline: 'Getting everything ready',
  saving: 'Saving your account',
  adding: 'Adding {children}',
  reading: 'Reading your {calendar}',
  settingUp: "Setting up {child}'s plan",
  today: 'Getting Today ready',
  line: "This takes about a minute. You can put your phone down, and everything you've entered is safe.",
  failed: "Your account wasn't saved. Everything you entered is still here.",
  tryAgain: 'Try again',
};
export const intro = {
  byline: 'MVP Coach · just now',
  greeting: 'Welcome to the team, {person}.',
  reminder: 'Remind me the night before a library day',
  calendarLine: 'Add events from my calendar to my plan',
  next: 'Next',
};
