const baseConfig = require('@easylink/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Extend the UI package's content paths
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // Include UI package components
    '../../packages/ui/src/components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        favorit: ['var(--font-favorit)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
