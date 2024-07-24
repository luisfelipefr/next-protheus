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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      font: {
        primary: '#585858',
        secondary: '#000000',
        tertiary: '#676262',
        balance: '#FFFFFF',
        background: '#D9D9D9',
      },
      label: {
        primary: '#EF7F0D',
        hover: '#AC5B09',
      },
    },
  },
  plugins: [],
}
export default config
