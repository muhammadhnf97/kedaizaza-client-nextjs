/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'first': '#383E56',
        'second': '#F69E7B',
        'third': '#EEDAD1',
        'forth': '#D4B5B0'
      }
    },
  },
  plugins: [],
}
