module.exports = {
  content: [
    'layouts/**/*.html',
    'content/**/*.html',
    'content/**/*.md'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'light': {
        //   DEFAULT: '#FCFCFC',
        //   '50': '#FCFCFC',
        //   '100': '#F6F6F6',
        //   '200': '#E9E9E9',
        //   '300': '#DCDCDC',
        //   '400': '#CFCFCF',
        //   '500': '#C3C3C3',
        //   '600': '#B6B6B6',
        //   '700': '#A9A9A9',
        //   '800': '#9C9C9C',
        //   '900': '#909090'
        // },
        // 'dark': {
        //   DEFAULT: '#14171A',
        //   '50':  '#323941',
        //   '100': '#2F363D',
        //   '200': '#282E34',
        //   '300': '#21262B',
        //   '400': '#1B1F23',
        //   '500': '#14171A',
        //   '600': '#0D0F11',
        //   '700': '#070809',
        //   '800': '#040506',
        //   '900': '#000000'
        // },
        'primary': {
          DEFAULT: '#F15A25',
          300: '#d9c2bc',
          400: '#ffb59c',
          500: '#F15A25',
          600: '#b54013',
          700: '#5f1600',
        },
        'light': {
          DEFAULT: '#fcfcfc',
          400:   '#ffffff',
          500:   '#fcfcfc',
          600:   '#f0f0f0',
        },
        'dark': {
          DEFAULT: '#191412',
          400: '#211a18',
          500: '#191412',
          600: '#110D0C',
        },
        current: 'currentColor',
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