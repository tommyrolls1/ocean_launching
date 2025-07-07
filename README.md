# Ocean Animated Dither Background

This is a simple React site using Vite, @react-three/fiber, and postprocessing to render a dynamic animated dithered ocean background using custom shaders.

## Usage
- The animation fills the entire viewport.
- Mouse interaction is enabled for ripple effects.

## Development
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```

## Deployment
- You can deploy the `dist` folder to GitHub Pages, Cloudflare Pages, or any static host after running:
  ```sh
  npm run build
  ```

## Main Files
- `src/Dither.js` — The animation component (shaders and logic)
- `src/Dither.css` — Styles for the animation background
- `src/App.jsx` — Uses the Dither component as the full background
