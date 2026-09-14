import type { CSSProperties, CanvasHTMLAttributes } from 'octane';
import type { OrbSize, OrbState } from 'thinking-orbs/engine';

export type { OrbSize, OrbState };

/**
 * Theme mode.
 *
 * - `auto` (default) — detect from the host project, in priority order:
 *   1. the nearest ancestor with `data-theme="dark|light"` or a
 *      `.dark` / `.light` class (watched live),
 *   2. `prefers-color-scheme` (subscribed live).
 * - `dark` / `light` — force a substrate.
 *
 * Dark renders light ink on the transparent canvas (for dark
 * backgrounds); light renders dark ink (for light backgrounds).
 */
export type OrbTheme = 'auto' | 'dark' | 'light';

/** Props for the ThinkingOrb Beast/Octane component. */
export interface ThinkingOrbProps extends Omit<CanvasHTMLAttributes<HTMLCanvasElement>, 'style'> {
  /** Which animation to show. @default 'working' */
  state?: OrbState;

  /** Tuned size preset — 64 or 20 CSS px. @default 64 */
  size?: OrbSize;

  /** Theme mode; `auto` detects from the host project. @default 'auto' */
  theme?: OrbTheme;

  /**
   * Animation speed multiplier on top of the preset's baked speed.
   * @default 1
   */
  speed?: number;

  /** Freeze the animation on the current frame. @default false */
  paused?: boolean;

  style?: CSSProperties;
}
