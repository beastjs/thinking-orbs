# thinking-orbs-beast

Dotted thought-orb loading indicators for [Beast](https://beast-docs.vercel.app)
and [Octane](https://octanejs.dev). Port of
[thinking-orbs](https://orbs.jakubantalik.com) — nine hand-tuned animated
states, two purpose-tuned sizes, automatic dark/light.

## Install

```bash
bun add thinking-orbs-beast
```

## Usage

In a Beast component:

```btsx
import { ThinkingOrb } from "thinking-orbs-beast";

ThinkingOrb(state="searching" size={64})
```

In an Octane `.tsx` / `.tsrx` component:

```tsx
import { ThinkingOrb } from 'thinking-orbs-beast';

<ThinkingOrb state="searching" size={64} />;
```

Props are identical to the React package: `state`, `size` (`64 | 20`),
`theme` (`'auto' | 'dark' | 'light'`), `speed`, `paused`, `style`, plus any
canvas attribute (`aria-label`, `className`, …). Theme auto-detection,
reduced-motion static frames, and offscreen/hidden-tab pausing behave exactly
as on the web.

## How it ships

The component is authored in [`src/ThinkingOrb.btsx`](src/ThinkingOrb.btsx).
`npm run build` (also run on `prepack`) compiles it with `beast compile`,
which validates the output through Octane, into `src/ThinkingOrb.tsrx`. The
package entry imports that generated TSRX, so:

- **Beast apps** (`beastOctane()`) and **plain Octane apps**
  (`octane/compiler/vite`) both consume it with no extra configuration —
  neither needs Beast to compile this package.
- `octane` is a peer dependency, which is the manifest signal Octane's
  compiler uses to claim an installed package and keep it out of Vite's dep
  prebundle.
- `src/index.d.ts` carries the component signature, since plain `tsc` cannot
  read `.tsrx`.

Edit the `.btsx`, never the `.tsrx`; rerun `npm run build` and commit both.

## How parity is achieved

The geometry is not re-implemented. This package depends on
`thinking-orbs/engine` — the same framework-free frame functions and canvas
painters the React component runs — and only owns the Octane lifecycle.

## Compatibility

`beast-tsrx@0.2.60` pins `octane@0.2.6`, so the peer range is `>=0.2.6`.
Verified against a Beast app on `octane@0.2.6` and a plain Octane app on
`octane@0.2.10`.

## Example

`example/` is a Beast app (`App.btsx`, `beastOctane()`) that installs this
package via `file:..` and renders all 9 states × 2 sizes with a live theme
toggle.

```bash
cd example && npm install && npm run dev
```
