/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playwriteRegular: ["playwrite"]
      },
      backgroundImage: {
        'hero-pattern': "url('food1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')"
      }
    },
  },
  plugins: [],
}

