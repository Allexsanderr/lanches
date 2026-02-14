/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        amberGold: '#D4AF37',
      },
      fontFamily: {
        title: ['Oswald', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.25), 0 10px 40px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
}
