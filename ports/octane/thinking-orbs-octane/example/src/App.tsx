import { useEffect, useState } from 'octane';
import type { OrbState } from 'thinking-orbs-octane';
import { ThinkingOrb } from 'thinking-orbs-octane';

const STATES: OrbState[] = [
  'working',
  'searching',
  'solving',
  'listening',
  'connecting',
  'weaving',
  'composing',
  'breathing',
  'shaping'
];

export function App() {
  const [dark, setDark] = useState(true);

  // drive the ancestor `data-theme` attribute — the signal `theme="auto"` reads
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <main>
      <header>
        <strong>thinking-orbs · octane</strong>
        <button type="button" onClick={() => setDark((d) => !d)}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </header>
      <section className="grid">
        {STATES.map((state) => (
          <div key={state} className="card">
            <ThinkingOrb state={state} size={64} />
            <ThinkingOrb state={state} size={20} />
            <span>{state}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
