import { useCallback } from 'react';
import { useNavigation } from '../components/Layout/navigation.js';
import { useSession } from '../demo/SessionContext.js';

// What a button the seed names by its action does on her side (spec §6, "Actions"; §5 and §9). A draft
// opens as a page with Back; a tab opens; a school card opens. A call, a site and the original of a
// capture are handed to another app, which the prototype stages: nothing opens and nothing is left
// behind (spec §9, "Two handoffs leave no task"). Any step a button plays, it plays through the
// moment's step table, so a tap out of order changes nothing.
export default function useActions() {
  const { dispatch } = useSession();
  const { openPage, openTab } = useNavigation();
  return useCallback((action) => {
    const colon = action.indexOf(':');
    const [kind, target] = colon < 0 ? [action, null] : [action.slice(0, colon), action.slice(colon + 1)];
    switch (kind) {
      case 'open-request': openPage('draft', target); return true;
      // "Ask my parent group": the composer with People chosen and the coach's draft (spec §10).
      case 'open-post': openPage('compose', `post:${target}`); return true;
      case 'open-tab': openTab(target); return true;
      case 'open-school':
        dispatch({ type: 'STEP', trigger: `open-card:${target}` });
        openPage('school', target);
        return true;
      case 'call':
      case 'open-site':
      case 'show-original':
      case 'staged':
        return true;
      default: return false;
    }
  }, [dispatch, openPage, openTab]);
}
