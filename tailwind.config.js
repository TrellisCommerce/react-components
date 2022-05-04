const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './lib/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,.ts,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      88: '22rem',
      96: '24rem',
      104: '26rem',
      112: '28rem',
      120: '30rem',
      128: '32rem',
      136: '34rem',
      144: '36rem',
      152: '38rem',
      160: '40rem',
    },
    minHeight: (theme) => ({
      0: '0',
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    extend: {
      colors: {
        primary: {
          lighter: '#7bcae4',
          DEFAULT: '#1B202B',
          dark: '#1388b0',
        },
        secondary: {
          lighter: '#f6e05e',
          DEFAULT: '#33333',
          dark: '#d69e2e',
        },
        tertiary: {
          lighter: '#ffb629',
          DEFAULT: '#eeaa28', //1a202c
          dark: '#e99900',
        },
        dark: {
          lighter: '#f6e05e', // 06A7E2
          DEFAULT: '#ecc94b', //ecc94b
          dark: '#d69e2e',
        },
        highlight: {
          lighter: '#f6e05e',
          DEFAULT: '#ecc94b', //1a202c
          dark: '#d69e2e',
        },
      },
      spacing: {
        xl: '10rem',
        lg: '6.25rem',
        md: '4rem',
        sm: '1.5rem',
        xs: '.75rem',
        '2/3': '66.666667%',
        '3/4': '75%',
        '1/2': '50%',
      },
      fontFamily: {
        // Dont forget to add google fonts link into public/index.html
        sans: ['Nunito', 'system-ui'],
        lato: ['Lato', 'system-ui'],

        // SB Specific: Dont Change
        sbHeading: ['Epilogue', 'system-ui'],
        sbBody: ['Nunito', 'system-ui'],
      },
      animation: {
        fade: 'fadeIn .5s ease-in',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
        ['responsive'],
      );
    }),
  ],
  important: process.env.ISNEXT ? '#__next' : '',
};
