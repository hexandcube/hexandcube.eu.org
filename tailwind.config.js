module.exports = {
  content: [
    'layouts/**/*.{html,md}',
    'content/**/*.{html,md}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': {
          'primary':        '#f49217',
          'secondary':      '#df8516',
          'primary-border': '#fca336',
          'primary-text':   '#fefefe',
          'secondary-text': '#1a1a1a',
          'text':           '#1c1917',
          'primary-bg':     '#f5f5f4',
          'secondary-bg':   '#efeeed',
          'selection':      '#e8e8e5',
          'border':         '#dad8d6',
          'grey':           '#666666',
        },
        'dark': {
          'primary':        '#f49217',
          'secondary':      '#df8516',
          'primary-border': '#fca336',
          'primary-text':   '#fefefe',
          'secondary-text': '#e5ddda',
          'text':           '#e7e1e1',
          'primary-bg':     '#0f121a',
          'secondary-bg':   '#191c24',
          'selection':      '#292d38',
          'border':         '#21242d',
          'grey':           '#a8adbd',
        },
        'accent': {
          DEFAULT:  '#F15A25',
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
      },
      borderWidth: {
        '1': '1px',
        '3': '3px'
      },
    },
    fontFamily: {
      sans: "Work Sans",
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