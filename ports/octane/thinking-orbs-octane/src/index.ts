export { ThinkingOrb } from './ThinkingOrb';
export type { ThinkingOrbProps, OrbState, OrbSize, OrbTheme } from './types';

// Same power-user surface as the web package, re-exported so consumers do
// not need a second dependency to drive their own canvas.
export { MODE_DRAWS, MODE_FRAMES, resolvePreset, STATE_TO_MODE } from 'thinking-orbs/engine';
export type { Dot, Line, OrbFrame, ModeFrame, ModeKey, Resolved } from 'thinking-orbs/engine';
