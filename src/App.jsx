import { SessionProvider } from './demo/SessionContext';
import Shell from './shell/Shell';
export default function App() { return <SessionProvider><Shell /></SessionProvider>; }
