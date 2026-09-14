# @beastjs/thinking-orbs

Dotted thought-orb loading indicators for [Octane](https://octanejs.dev) and [Beast](https://beast-docs.vercel.app). Nine hand-tuned animated states, each shipped at two purpose-tuned sizes, rendered on a plain 2D canvas.

## Install

```bash
bun add @beastjs/thinking-orbs
```

Octane libraries ship source: `octane` is a peer dependency, and your app's Octane compiler (e.g. `beastOctane()` from `beast-tsrx/vite`) compiles this package alongside your code. There is no build step.

## Usage

```btsx
import { ThinkingOrb } from "@beastjs/thinking-orbs";

ThinkingOrb(state="searching" size={64})
```

## States

Nine verbs an agent can be doing, each a distinct animation:

```btsx
// particles on tilted orbits
ThinkingOrb(state="working")
// a scan meridian sweeps a dotted globe
ThinkingOrb(state="searching")
// bands scramble, then click back solved
ThinkingOrb(state="solving")
// a waveform rolls through the rings
ThinkingOrb(state="listening")
// a constellation wires itself
ThinkingOrb(state="connecting")
// three strands plait around the sphere
ThinkingOrb(state="weaving")
// an undulating multi-band sash
ThinkingOrb(state="composing")
// a ring slowly morphing
ThinkingOrb(state="breathing")
// dotted outline: circle → triangle → square
ThinkingOrb(state="shaping")
```

## Sizes

Two tuned presets — separate designs, not a scale factor. `64` for chat-avatar scale, `20` for inline-text scale. Each carries its own dot count, dot size and speed tuning:

```btsx
ThinkingOrb(state="working" size={64})
ThinkingOrb(state="working" size={20})
```

## Theme

Strictly monochrome — light ink for dark backgrounds, dark ink for light backgrounds — with the mode picked automatically from the host project:

```btsx
// default — detects from the project
ThinkingOrb(theme="auto")
// pin: light dots for dark backgrounds
ThinkingOrb(theme="dark")
// pin: dark dots for light backgrounds
ThinkingOrb(theme="light")
```

`auto` resolves in three layers and updates live when any of them change:

1. an ancestor `data-theme="dark|light"` attribute or `dark`/`light` class (the Tailwind / shadcn convention), watched via `MutationObserver`;
2. otherwise `prefers-color-scheme`, subscribed for live OS theme switches;
3. SSR-safe — the canvas paints only on the client, after the theme has resolved.

## Other props

```btsx
ThinkingOrb(
  ~ state="solving"
  ~ size={20}
  ~ speed={1.5}
  ~ paused={false}
  ~ aria-label="Analysing repository…"
  ~ )
```

- `speed` multiplies the preset's baked speed.
- `paused` freezes the current frame.
- `aria-label` overrides the per-state default.

All other canvas attributes (`class`, `style`, `data-*`, …) pass through.

## Accessibility & performance

- `role="img"` with a sensible per-state `aria-label` out of the box.
- `prefers-reduced-motion: reduce` renders a static representative frame — no animation — and still follows the live theme.
- Every instance pauses automatically when scrolled offscreen (`IntersectionObserver`) or when the tab is hidden, and resumes in phase — all instances share one clock.
- Plain 2D canvas arcs only: no `ctx.filter`, no SVG filters, no WebGL — the same pixels everywhere, cheap on low-end devices. Device-pixel-ratio capped at 2.

## License

MIT. Beast & Octane port of [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) by Jakub Antalik.
