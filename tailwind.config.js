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
        'tempcolor': {
          DEFAULT:  '#0000ff',
          '50': '#0000ff',
          '100': '#0000ff',
          '200': '#0000ff',
          '300': '#0000ff',
          '400': '#0000ff',
          '500': '#0000ff',
          '600': '#0000ff',
          '700': '#0000ff',
          '800': '#0000ff',
          '900': '#0000ff',
        },
        'light': {
          DEFAULT:          '#6e3625',
          'primary':        '#6e3625',
          'secondary':      '#f3b6a1',
          'primary-text':   '#fefaec',
          'secondary-text': '#2a1710',
          'text':           '#1a1615',
          'primary-bg':     '#fffbfa',
          'secondary-bg':   '#f3ebe8',
          'selection':      '#f8dad0',
          'border':         '#e6e0e0',
          'grey':           '#605c5b',
        },
        'dark': {
          DEFAULT:          '#f3b6a1',
          'primary':        '#f3b6a1',
          'secondary':      '#6e3625',
          'primary-text':   '#6e3527',
          'secondary-text': '#e5ddda',
          'text':           '#e7e1e1',
          'primary-bg':     '#1f1919',
          'secondary-bg':   '#302624',
          'selection':      '#594039',
          'border':         '#474141',
          'grey':           '#bab1b2',
        },
        'accent': {
          DEFAULT:  '#F15A25',
          '400-t':  '#F3704222',
          '50':     '#F9BCA6',
          '100':    '#F8B198',
          '200':    '#F79B7B',
          '300':    '#F5865F',
          '400':    '#F37042',
          '500':    '#F15A25',
          '600':    '#DF450E',
          '700':    '#B9390C',
          '800':    '#922D09',
          '900':    '#6C2107'
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
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    },
    fontFamily: {
      sans: "Roboto",
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