/** @type {import('tailwindcss').Config} */

const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(/webp/Banner_Home.webp)',
      },
      animation: {
        pulse: 'pulse 3s linear infinite',
        bulsein: 'bulsein 10s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.2)' },
          '50%': { opacity: '1' },
          '100%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
        },
        bulsein: {
          '0% , 100%': {
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
            transform: 'translateY(-25%)',
          },
          '50%': {
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
            transform: 'none',
          },
        },
      },
      fontFamily: {
        sans: 'Roboto , sans-serif',
      },
      colors: {
        brand: {
          100: '#799e61',
          200: '#366992',
          300: '#f79633',
          350: '#f49604'
        },
        whatsapp: '#25D366',
      },
    },
  },
  plugins: [],
});
