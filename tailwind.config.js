/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#0b0907',
        char: '#15110d',
        soot: '#1e1914',
        ember: '#ff6a1a',
        amber: '#f2a03d',
        gold: '#dcab4c',
        cream: '#f5ead6',
        ash: '#b9ad9a',
      },
      fontFamily: {
        display: ['Lalezar', 'Cairo', 'system-ui', 'sans-serif'],
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(220,171,76,.35), 0 10px 40px -10px rgba(255,106,26,.55)',
        card: '0 20px 50px -25px rgba(0,0,0,.9)',
      },
    },
  },
  plugins: [],
};
