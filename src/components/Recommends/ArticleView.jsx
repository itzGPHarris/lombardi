import PageShell from '../Layout/PageShell.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { articleView } from '../../demo/tabs.js';
import { articles } from '../../demo/articles.js';
import styles from './ArticleView.module.css';

// The MVP Editorial article (spec §12; frame 2853:13636): Back, the label line, the title as a
// headline, the line beginning "Because" when Today chose the article for something in her week, then
// the byline and body. Charlotte's drafted text and bylines are withdrawn until MVP staff approve the
// articles (issue R15), so the page shows the frame's placeholder lines and writes no article copy.
// It never carries the coach's dot or tint.
const placeholderWidths = ['94%', '86%', '91%', '52%', '94%', '74%', '83%', '61%', '94%', '79%', '44%'];

export default function ArticleView({ articleId }) {
  const { household } = useSession();
  const view = articleView({ seed: household.seed, articles, articleId });
  if (!view) return <PageShell title="" />;
  return (
    <PageShell title={view.title} headline above={view.line ? <p className={styles.line}>{view.line}</p> : null}>
      {view.reason && <p className={styles.reason}>{view.reason}</p>}
      {!view.approved && (
        <div className={styles.placeholder} aria-hidden="true">
          {placeholderWidths.map((width, index) => <span key={index} className={styles.bar} style={{ width }} />)}
        </div>
      )}
    </PageShell>
  );
}
