import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'GTWalsheim': ['GT-Walsheim', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config