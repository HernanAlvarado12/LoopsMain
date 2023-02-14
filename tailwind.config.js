/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        'sm': '900px'
      },
      spacing: {
        '0.5': '0.3rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontFamily: {
        alata: "'Alata', sans-serif"
      },
      fontSize: {
        'xs': '1.2rem',
        'sm': '1.4rem',
        'md': '1.8rem',
        'lg': '2.4rem',
        'base': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      letterSpacing: {
        'widest': '0.3rem'
      },
      backgroundColor: {
        'gray': {
          DEFAULT: 'hsl(0, 0%, 55%)',
          '100': 'hsl(0, 0%, 41%)'
        }
      }
    },
  },
  plugins: [],
}
