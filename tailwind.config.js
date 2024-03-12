/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6E0FF',
          200: '#C9BAFC',
          300: '#AC94FA',
          400: '#8F6DF7',
          500: '#7247F5',
          600: '#5521F2',
          700: '#4618C7',
          800: '#37119B',
          900: '#280B70'
        },
        secondary: {
          100: '#FFF2EC',
          200: '#FFDCD1',
          300: '#FFC6B6',
          400: '#FFAF9B',
          500: '#FF9980',
          600: '#FF8366',
          700: '#FF6D4C',
          800: '#FF5733',
          900: '#FF4019'
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
      serif: ['"IBM Plex Serif"', 'serif'],
      display: ['"IBM Plex Serif"', 'serif'],
      body: ['Inter', 'sans-serif']
    }
  },
  plugins: [require('flowbite/plugin')]
}
