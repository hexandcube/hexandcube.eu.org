const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      'layouts/**/*.html',
      'content/**/*.html',
      'content/**/*.md'
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': {
            DEFAULT: '#6C88AD',
            '50': '#f0f6fc',
            '100': '#e6edf5',
            '200': '#CED8E4',
            '300': '#ADBDD2',
            '400': '#8DA3BF',
            '500': '#6C88AD',
            '600': '#526E94',
            '700': '#405673',
            '800': '#2E3D52',
            '900': '#1C2531'
        },
        'dark': {
          DEFAULT: '#14171A',
          '50': '#323941',
          '100': '#2F363D',
          '200': '#282E34',
          '300': '#21262B',
          '400': '#1B1F23',
          '500': '#14171A',
          '600': '#0D0F11',
          '700': '#070809',
          '800': '#040506',
          '900': '#000000'
        },
        'accent': {
          DEFAULT: '#F15A25',
          '400-t': '#F3704222',
          '50':  '#F9BCA6',
          '100': '#F8B198',
          '200': '#F79B7B',
          '300': '#F5865F',
          '400': '#F37042',
          '500': '#F15A25',
          '600': '#DF450E',
          '700': '#B9390C',
          '800': '#922D09',
          '900': '#6C2107'
        },
      },
      screens: {
        '3xl': '1750px'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite'
      },
      spacing: {
        '1px': '1px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    },
    fontFamily: {
      sans: "Open Sans",
      mono: "Space Mono",
      brand: "Mont",
      logo: "Hexandcube Icon"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ]
}