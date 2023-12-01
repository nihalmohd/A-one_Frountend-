// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient-yellow-black': 'conic-gradient(from -45deg at 50% 50%, yellow-400 30%, black 30%, black 60%, yellow-400 60%, yellow-400 100%)',
      },
    },
    fontFamily: {
      'Poppins': ['sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // other plugins...
  ],
};
