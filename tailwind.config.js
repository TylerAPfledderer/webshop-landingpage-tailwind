module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: {
        darker: '#b2545b',
        dark: '#e56c75',
        base: '#FF7982'
      },
      blue: {
        light: '#9ca2b2',
        base : '#09183F'
      },
      gray: '#F4F8FD',
      white: '#fff'
    },
    fontFamily: {
      'sans': 'Mulish',
      'display': "Merriweather, Georgia, serif"
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/bg.png')"
      },
      borderWidth: {
        "1" : "1px"
      },
      colors: {
        'peach': '#FF8D53'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      spacing: {
        "0"    : "0",
        "0.25" : "0.25rem",
        "0.5"  : "0.5rem",
        "0.75" : "0.75rem",
        "1"    : "1rem",
        "1.25" : "1.25rem",
        "1.5"  : "1.5rem",
        "1.75" : "1.75rem",
        "2"    : "2rem",
        "2.25" : "2.25rem",
        "2.5"  : "2.5rem",
        "2.75" : "2.75rem",
        "3"    : "3rem",
        "3.25" : "3.25rem",
        "3.5"  : "3.5rem",
        "3.75" : "3.75rem",
        "4"    : "4rem",
        "4.25" : "4.25rem",
        "4.5"  : "4.5rem",
        "4.75" : "4.75rem",
        "5"    : "5rem",
        "6"    : "6rem",
        "6.25" : "6.25rem",
        "6.5"  : "6.5rem",
        "6.75" : "6.75rem",
        "7"    : "7rem",
        'full-vh': '100vh',
        'full-vw': '100vw'
      },
      transitionProperty: {
        "max-h": "max-height",
        "p"    : "padding"
      },
      zIndex: {
        "-1" : "-1"
      }
    },

  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
      backgroundImage: ["hover", "focus-within"],
      borderWidth: ["focus"],
      borderRadius: ["focus"]
    },
  }
}
