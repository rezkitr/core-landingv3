/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryBlack: '#282828',
        secondaryBlack: '#292929',
        softGray: '#F3F3F3',
        softGray10: '#F6F6F6',
        softGray20: '#EAEAEA',
        alternativeGray: '#3E3E3E',
        alternativeGray10: '#A6A6A6',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
