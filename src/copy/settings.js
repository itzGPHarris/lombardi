// Interface copy for Settings, from fixtures section 4, "Settings", and section 3, "Settings".
export const title = 'Settings';
export const cards = {
  account: { heading: 'Your account', line: 'You sign in and pay for MVP with this account.', rows: { name: 'Name', email: 'Email', ageRange: 'Your age range', plan: 'Plan', billing: 'Billing' }, addAgeRange: 'Add your age range', ageRanges: ['Under 25', '25 to 34', '35 to 44', '45 to 54', '55 and over'], manageBilling: 'Manage billing' },
  calendar: { heading: 'Your calendar and forwarding address', line: 'These are how things reach the MVP Coach without you opening MVP.', rows: { calendar: 'Calendar', forwarding: 'Forwarding address', automatic: 'Forwarded automatically' }, connected: '{calendar}, connected', disconnect: 'Disconnect {calendar}', copy: 'Copy the address', notConnected: 'Not connected', connect: 'Connect your calendar' },
  coachAdds: { heading: 'What the coach adds for you', line: 'The coach adds these to your plan, and you can take anything out.', events: 'Events from your {calendar}', schoolDay: 'School-day changes for {children}', trips: 'Trips you can take yourself' },
  notifications: { heading: 'Notifications', line: 'MVP can tell you these things on your phone.', notifications: 'Notifications' },
  language: { heading: 'Language at home', line: 'The MVP Coach writes to you in this language.', language: 'Language' },
  privacy: { heading: 'Privacy', line: 'Here is who sees what you put in MVP.', rows: ['Nobody sees your plan, your calendar or your MVP Coach conversations. People see only what you send them.', "The MVP Coach doesn't read your chats or groups."] },
};
export const on = 'On';
