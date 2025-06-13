
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        textShadow: {
        glow: '0 0 8px #00CFFF, 0 0 16px #00CFFF',
      },
          colors: {
      neon: "rgb(255,255,0)",
          },
        animation: {
    "fade-in": "fadeIn 0.3s ease forwards",
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "scale(0.75)" },
      "100%": { opacity: 0.95, transform: "scale(1)" },
    },


    },
  },
},
  plugins: [
        require('tailwindcss-textshadow'),
        require('@tailwindcss/typography'),
        require('tailwindcss-textshadow')


  ],
}

