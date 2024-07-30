import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('/images/iconLogo.png')",
        home: "url('/images/backgrounds/bgHome.jpg')",
      },
    },
    fontFamily: {
      sans: '"Inter var", sans-serif',
    },
  },
  plugins: [],
}
export default config
