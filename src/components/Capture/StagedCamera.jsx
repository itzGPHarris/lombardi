import StagedPhoto from './StagedPhoto.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';

// The camera, staged (spec §7, "Prototype"; fixtures C-03a): the prototype reads no live photos, so the
// camera shows the moment's prepared photo with "Use this photo", as on 0a-b. Using it puts the photo in
// the capture bar as a thumbnail, beside what she has typed, until she gives both to the coach.
export default function StagedCamera({ captureId }) {
  const { dispatch, household } = useSession();
  const { back } = useNavigation();
  const capture = household.seed.captures.find((entry) => entry.id === captureId);
  const use = () => {
    dispatch({ type: 'TODAY', action: { type: 'ATTACH', capture: captureId } });
    back();
  };
  // The flyer's prepared photo is not in the repository yet, so the screen shows a plain tile.
  return <StagedPhoto src={null} alt={capture?.sourceName} onUse={use} onRetake={() => {}} onBack={back} />;
}
