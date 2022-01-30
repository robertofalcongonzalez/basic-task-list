module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04142F',
        secondary: '#EAF0F5',
        tertiary: '#8A94A6',
        'hash-text': '#702EE6',

      },
      spacing: {
        '0.5': '2px',
        '3.5': '14.7px',
        '14px': '14px'
      },
      screens: {
        'lg': '1230px',
      }
    },
  },
  plugins: [],
}
