# thinking-orbs-octane

Dotted thought-orb loading indicators for [Octane](https://octanejs.dev).
Port of [thinking-orbs](https://orbs.jakubantalik.com) — nine hand-tuned
animated states, two purpose-tuned sizes, automatic dark/light.

## Install

```bash
npm install thinking-orbs-octane
```

Requires an app built with Octane's compiler (e.g. `octane/compiler/vite`).

## Usage

```tsx
import { ThinkingOrb } from 'thinking-orbs-octane';

<ThinkingOrb state="searching" size={64} />;
```

Props are identical to the React package: `state`, `size` (`64 | 20`),
`theme` (`'auto' | 'dark' | 'light'`), `speed`, `paused`, `style`, plus any
canvas attribute (`aria-label`, `className`, …). Theme auto-detection,
reduced-motion static frames, and offscreen/hidden-tab pausing all behave
exactly as on the web.

## How it ships

Octane libraries ship **source**, not a prebuilt bundle. This package lists
`octane` as a peer dependency, which is the manifest signal Octane's compiler
uses to claim an installed package: the app's compiler compiles `src/*.tsx`
alongside the app's own code, and keeps the package out of Vite's dep
prebundle. There is no build step here.

## How parity is achieved

The geometry is not re-implemented. This package depends on
`thinking-orbs/engine` — the same compiled, framework-free frame functions and
canvas painters the React component runs — and only owns the Octane
lifecycle (refs, effects, the rAF loop). Same engine, same canvas calls, same
pixels.

## Example

`example/` is a Vite + Octane app that installs this package via `file:..`
(so it exercises the installed-package path, not project source) and renders
all 9 states × 2 sizes with a live theme toggle.

```bash
cd example && npm install && npm run dev
```
