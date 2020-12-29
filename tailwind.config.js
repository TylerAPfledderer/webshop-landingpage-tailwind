module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: '#FF7982',
      blue: '#09183F',
      gray: '#F4F8FD',
      white: '#fff'
    },
    fontFamily: {
      'sans': 'Mulish'
    },
    extend: {
      colors: {
        'peach': '#FF8D53'
      },
      spacing: {
        'full-vh': '100vh',
        'full-vw': '100vw'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
