import { createRoot } from 'octane';
import App from './App.btsx';

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(App, {});
