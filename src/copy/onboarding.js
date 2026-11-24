// Interface copy for onboarding and setup, from fixtures section 4, "Onboarding". The coach's lines
// in onboarding come from the seed's conversation, not from here.
export const splash = 'Most Valuable Parent';
export const splashTagline = 'Master the parental logistics of life for every season. Build community. Solve for the win. Be the MVP.';
// The welcome holds her name and zip code, then each child and the grade the MVP Coach suggests (0w,
// fixtures 3.54, issue O35). It has no skip link.
export const welcome = {
  headline: 'Your week has a lot of moving parts, and the MVP Coach helps you keep track of everything.',
  line: 'Just the basics to start us off in the right direction.',
  name: 'Your name',
  zip: 'Zip code',
  subheading: 'Who are you planning for?',
  gradesLine: "The MVP Coach works out each grade from the birth month. Change any grade that's wrong.",
  firstName: "Your kiddo's first name",
  birth: 'Birth month and year',
  grade: "{child}'s grade",
  addAnother: '+ Add another child',
  continue: 'Continue',
};
export const grades = [
  'Not in school yet', 'Pre-K', 'Kindergarten', 'First grade', 'Second grade', 'Third grade', 'Fourth grade',
  'Fifth grade', 'Sixth grade', 'Seventh grade', 'Eighth grade', 'Ninth grade', 'Tenth grade', 'Eleventh grade',
  'Twelfth grade',
];
export const coachFirstCapture = "Show me one thing from this week, such as a school handout, an email or a voice note, and I'll turn it into a plan.";
export const firstCapture = { takeAPhoto: 'Take a photo', attachAFile: 'Attach a file', talkOrType: 'Talk or type', skip: 'Skip for now' };
export const checkPhoto = { use: 'Use this photo', retake: 'Retake' };
export const handOff = { make: "Make {child}'s plan", somethingWrong: "Something's not right" };
export const thinking = { photo: 'Reading your photo…', file: 'Reading your file…', listening: 'Listening…', making: "Making {child}'s plan…" };
export const confirm = { calendar: 'Whose calendar is this?', newsletter: 'Whose newsletter is this?', choice: '{child} · {grade}' };
export const draft = { heading: "{child}'s plan for this week", suggested: 'Suggested' };
// Each of the coach's lines in the onboarding conversation is labeled this way (fixtures C-00).
export const coachLabel = 'MVP Coach:';
// The failure and waiting states, from fixtures section 4, "Coach" and "Onboarding" (spec §3).
export const failures = {
  unreadable: "I couldn't read this photo clearly. Try again with the whole page in the frame and good light.",
  retakePhoto: 'Retake photo',
  chooseAnother: 'Choose another',
  slow: 'This is taking longer than it should. Your photo is safe, and you can try again.',
  tryAgain: 'Try again',
};
// The account prompt holds the sign-in (0c). With nothing captured it opens over 0a headed "Create your
// account", with no line and no Not now (0c-b).
export const accountPrompt = {
  heading: "Keep {child}'s plan",
  line: 'Create an account to save this plan and add the rest of your family.',
  apple: 'Continue with Apple',
  email: 'Email',
  continue: 'Continue',
  notNow: 'Not now',
  headingNoCapture: 'Create your account',
};
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
  permission: 'Most Valuable Parent wants to see your calendar',
  allow: 'Allow',
  cancel: 'Cancel',
};
export const school = {
  heading: 'Where do they go to school?',
  line: 'Add each child\'s school and start time, so the MVP Coach knows whose emails and handouts are whose and when to leave.',
  connected: 'Your {calendar} is connected.',
  school: 'School',
  startTime: 'Start time',
  fromCalendarPhoto: 'From your calendar photo',
  age: 'Age',
  addAnother: '+ Add another child',
};
// The household sits on the school screen under its own subheadings, with Done at the foot (0f).
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
  greetingNoName: 'Welcome to the team.',
  reminder: 'Remind me the night before a library day',
  calendarLine: 'Add events from my calendar to my plan',
  next: 'Next',
};
