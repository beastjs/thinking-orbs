// Hand-written declarations for `index.ts`. The component lives in generated
// TSRX, which plain `tsc` cannot read, so consumers get its signature here.
import type { ThinkingOrbProps } from './types';

export declare function ThinkingOrb(props: ThinkingOrbProps): void;
export type { ThinkingOrbProps, OrbState, OrbSize, OrbTheme } from './types';

export { MODE_DRAWS, MODE_FRAMES, resolvePreset, STATE_TO_MODE } from 'thinking-orbs/engine';
export type { Dot, Line, OrbFrame, ModeFrame, ModeKey, Resolved } from 'thinking-orbs/engine';
