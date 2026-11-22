// Interface copy for Today, from fixtures section 4, "Today". Fixed words are written as they
// stand. A row the fixtures write as a pattern is a template whose slots take only a name from the
// seed ({child}, {person}, {place}, {from}, {to}) or a value the demo calendar works out ({time},
// {day}, {phase}, {count}, {minutes}). The coach's own lines here sit under keys that start with
// "coach", so the voice check reads them as the coach's.

export const statusPill = {
  inMinutes: 'in {minutes} min',
  inHours: 'in {count} hr {minutes} min',
  inHoursOnly: 'in {count} hr',
  timeToLeave: 'Time to leave',
  runningLate: 'Running late',
  needsOwner: 'Needs an owner',
  tomorrow: 'Tomorrow',
};

export const pass = {
  routeArrowLabel: 'to',
  atHome: 'At home',
  then: 'Then {place}, {time}',
  thenHome: 'Then home, about {time}',
  thenAt: 'Then at {time}, you leave {from} for {to}',
  conflict: 'Conflict:',
  tripTitle: 'Take {children} to school',
};

export const fieldLabels = {
  drive: 'Drive',
  arrive: 'Arrive',
  pickup: 'Pickup',
  starts: 'Starts',
  with: 'With',
};

export const fieldValues = {
  minutes: '{minutes} min',
};

export const timetable = {
  leaveHome: 'Leave home',
  leave: 'Leave {place}',
  backHome: 'Back home',
};

export const fields = {
  drive: 'Drive {minutes} min',
  arrive: 'Arrive {time}',
  pickup: 'Pickup {time}',
  starts: 'Starts {time}',
  with: 'With {group}',
};

export const checklist = {
  ownTasks: 'Before you leave home',
  foldedGroup: '{child} · {count} packed',
  foldedOwnTasks: 'Before you leave · {count} done',
  foldedChecklist: 'Everything is packed for {time}',
  foldedEveningReady: 'Everything is ready for {day} {phase}.',
  eveningHeading: 'Reminders for {day} {phase}',
  addSomethingElse: 'Add something else for {child}',
  newRowPlaceholder: 'What else does {child} need?',
  removeLabel: 'Remove',
  justTonight: 'Just tonight',
  everyNight: 'Every night',
  justToday: 'Just today',
  everyDay: 'Every day',
  noticeTonight: "{item} is off {child}'s list for tonight.",
  noticeUntilAdded: "{item} is off {child}'s list until you add it back.",
};

export const actions = {
  remindMe: 'Remind me',
  remindMeLeaveHome: 'Remind me to leave home',
  remindMeAgain: 'Remind me again',
  directions: 'Directions',
  reminderAt: 'Reminder at {time}',
  call: 'Call',
  sendFrom: 'Send from {app}',
  message: 'Message',
};

export const reminderSheet = {
  headingLeave: 'Remind me to leave {from}',
  headingWithSomeone: 'Remind me',
  line: 'For {time} · {place}',
  lineWithSomeone: 'For {time} · {child} leaves home with {group}',
  minutesBefore: 'At {time} · {minutes} min before',
  whenTimeToLeave: "When it's time to leave {from} · at {time}, with traffic checked",
  whenFamilyComes: 'At {time} · when {group} come',
  setReminder: 'Set reminder',
  updateReminder: 'Update reminder',
  removeReminder: 'Remove reminder',
  notificationsOff: "Notifications are off, so this reminder can't reach you.",
  openSettings: 'Open settings',
};

export const reminderNotification = {
  title: 'Leave {from} in 15 min for {place}',
  titleThen: 'Leave {from} in 15 min for {place}, then {to}',
  snooze: 'Snooze 5 min',
};

export const coachCard = {
  label: 'MVP Coach',
  labelFor: 'MVP Coach · for {day}',
  labelNextWeek: 'MVP Coach · for next week',
  agreed: 'Agreed',
  undo: 'Undo',
  otherOptions: 'Other options',
  noThanks: 'No thanks',
  notNow: 'Not now',
  updatesYourGamePlan: 'Updates your game plan',
  gamePlanUpdated: 'Game plan updated',
  readingPhoto: 'Reading your photo…',
  readingFile: 'Reading your file…',
  listening: 'Listening…',
  takeAPhoto: 'Take a photo',
  attachAFile: 'Attach a file',
  talkOrType: 'Talk or type',
  coachEmptyWeek: "Your week is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.",
};

export const laterToday = {
  heading: 'Later today',
  doneThisMorning: '{count} done this morning',
  doneToday: '{count} done today',
  anytime: 'Anytime',
  startTimeNeeded: 'Start time needed',
  calendarMarkLabel: 'From your calendar',
  letterDay: '{letter} day',
};

export const editorial = {
  line: 'MVP Editorial · {minutes} min read',
};

export const nothingLeft = {
  nothingToDrive: 'Nothing to drive to today.',
  nothingElseToDrive: 'Nothing else to drive to today.',
  nothingElse: 'Nothing else today.',
};

export const forTomorrow = {
  heading: 'For tomorrow',
  leaveAt: 'Leave {from} at {time}',
};

export const captureBar = {
  placeholder: 'Type, talk or add an image',
  attach: 'Attach',
  camera: 'Camera',
  microphone: 'Microphone',
  give: 'Give this to the coach',
};

export const leaveSheet = {
  heading: 'Leave {from} for {to}',
  headingDay: 'Leave {from} for {to} {day}',
  stops: '{count} stops',
  lineToday: 'This {phase} · {count} stops',
  lineDay: '{day} {phase}',
  instructions: "Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change.",
  leaveAt: 'Leave {from} at',
  backAround: 'Back around {time}',
  youReach: 'You reach {place} at {time}',
  youReachOnTime: 'You reach {place} at {time}.',
  youReachBeforePickup: 'You reach {place} at {time}, {count} minutes before pickup.',
  youReachAfterPickup: 'You reach {place} at {time}, {count} minutes after pickup.',
  youReachBeforeStart: 'You reach {place} at {time}, {count} minutes before {item} starts.',
  youReachAfterStart: 'You reach {place} at {time}, {count} minutes after {item} starts.',
  earlier: '5 min earlier',
  later: '5 min later',
  changeStartTime: 'Change the start time',
  changeInCalendar: 'Change this in Google Calendar.',
  save: 'Save',
  backups: 'Backup plans',
  planB: 'Plan B ·',
  planC: 'Plan C ·',
};

export const sheet = {
  close: 'Close',
};

export const timedThingAtHome = {
  line: 'For {time} · {item}',
};

export const askSomeone = {
  heading: 'Ask someone',
  next: 'Next',
};

export const newConflictNotice = {
  link: 'Show me {day}',
};
