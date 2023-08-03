import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'GTWalsheim': ['GT-Walsheim', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config