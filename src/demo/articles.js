import conference from '../data/articles/conference.json';
import pictureDay from '../data/articles/picture-day.json';

// The MVP Editorial library (spec §12), by article id.
export const articles = { [conference.id]: conference, [pictureDay.id]: pictureDay };
