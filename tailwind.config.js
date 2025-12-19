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
        forest: {
          deep: '#0a1a10',
          mid: '#152a1c',
          light: '#1e3d28',
        },
        cream: {
          DEFAULT: '#f7f5f0',
          dark: '#ebe8e0',
          darker: '#d9d5c9',
        },
        text: {
          dark: '#0a1a10',
          medium: '#3d5244',
          light: '#6b7f70',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}