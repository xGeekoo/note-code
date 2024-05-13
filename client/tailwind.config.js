/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif']
      },
      colors: {
        clr: {
          black: '#121826',
          white: '#FFFFFE',
          gray: {
            light: '#CED6E1',
            dark: '#364153'
          },
          blue: '#406AFF',
          editor: {
            black: '#1E1E1E',
            white: '#FFFFFE'
          }
        }
      }
    }
  },
  plugins: []
};
