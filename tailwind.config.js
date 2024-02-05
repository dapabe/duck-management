/** @type {import('tailwindcss').Config & {daisyui: import("daisyui").Config}} */
export default {
  content: ['./packages/renderer/index.html', './packages/renderer/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['business'],
  },
};
