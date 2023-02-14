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
        '9': '9rem',
        '10': '10rem',
        '14': '14rem',
        '50': '50%',
        '80': '80%',
        '85': '85%',
        '90': '90%'
      },
      height: {
        'nav': 'calc(100% - 9rem)',
        '0.2': '0.2rem'
      },
      maxHeight: {
        '80': '80vh'
      },
      fontFamily: {
        alata: "'Alata', sans-serif"
      },
      order: {
        '1': '-1'
      },
      inset: {
        '0.5': '-1rem'
      },
      fontSize: {
        'xs': '1.2rem',
        'sm': '1.4rem',
        'md': '1.8rem',
        'lg': '2.4rem',
        'base': '3.2rem',
        'xl': '4rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      letterSpacing: {
        'widest': '0.3rem'
      },
      aspectRatio: {
        'nav': '7/8',
        'mn': '21/9'
      },
      boxShadow: {
        'sm': '0.4rem 0.5rem 1rem hsl(0, 0%, 72%)'
      },
      colors: {
        gray: {
          DEFAULT: 'hsl(0, 0%, 55%)',
          '100': 'hsl(0, 0%, 41%)'
        }
      },
      backgroundImage: {
        'header': "url('./src/assets/mobile/hero.jpg')",
        'header-sm': "url('./src/assets/desktop/hero.jpg')"
      }
    },
  },
  plugins: [],
}
