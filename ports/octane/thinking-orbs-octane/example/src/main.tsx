import { createRoot } from 'octane';
import { App } from './App';

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
