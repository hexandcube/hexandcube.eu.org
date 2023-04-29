// Tailwind shades - Step up:7, Step down: 4

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
          'primary-text':   '#fefefe',
          'secondary-text': '#1a1a1a',
          'text':           '#1c1917',
          'primary-bg':     '#f5f5f4',
          'secondary-bg':   '#efeeed',
          'selection':      '#e0e0dd',
          'border':         '#d3d1cf',
          'grey':           '#666666',
        },
        'dark': {
          'primary-text':   '#fefefe',
          'secondary-text': '#e5ddda',
          'text':           '#e7e1e1',
          'primary-bg':     '#0f121a',
          'secondary-bg':   '#191c24',
          'selection':      '#292d38',
          'border':         '#21242d',
          'grey':           '#a8adbd',
        },
        'orange': {
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
        'yellow': {
          DEFAULT: '#F49217',
          50:      '#FBDAB0',
          100:     '#FAD29F',
          200:     '#F9C27D',
          300:     '#F7B25B',
          400:     '#F6A239',
          500:     '#F49217',
          600:     '#EB880B',    
          700:     '#D87D0A',
          800:     '#C47109',
          900:     '#B16608',
          950:     '#A76108'
        },
        'blue': {
          DEFAULT: '#5056ED',
          50:      '#E2E3FC',
          100:     '#D1D3FA',
          200:     '#B1B4F7',
          300:     '#9195F4',
          400:     '#7075F0',
          500:     '#5056ED',
          600:     '#3E44EB',
          700:     '#2B32E9',
          800:     '#1920E7',
          900:     '#161DD5',
          950:     '#151CCC'
        },
        'green': {
          DEFAULT: '#32AE51',
          50:      '#9EE3AF',
          100:     '#90DFA4',
          200:     '#74D78D',
          300:     '#58CF76',
          400:     '#3DC75F',
          500:     '#32AE51',
          600:     '#2D9E4A',
          700:     '#298E42',
          800:     '#247E3B',
          900:     '#206F33',
          950:     '#1E6730'
        },
        'red': {
          DEFAULT: '#EF4444',
          50:      '#FCD8D8',
          100:     '#FAC8C8',
          200:     '#F7A7A7',
          300:     '#F58686',
          400:     '#F26565',
          500:     '#EF4444',
          600:     '#ED3131',
          700:     '#EC1E1E',
          800:     '#E21313',
          900:     '#D01212',
          950:     '#C61111'
        },
        'accent': {
          DEFAULT: '#F15A25',
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
        'current': 'currentColor',
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