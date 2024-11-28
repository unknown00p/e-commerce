/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        image1: "url('./assets/image1.jpg')",
        hero: "url('./assets/hero.jpg')",
        image2: "url('./assets/image2.jpg')",
        image3: "url('./assets/image3.jpg')",
        image4: "url('./assets/image4.jpg')",
        image5: "url('./assets/image5.jpg')",
        image6: "url('./assets/image6.jpg')",
        image7: "url('./assets/image7.jpg')",
        image8: "url('./assets/image8.jpg')",
        image9: "url('./assets/image9.jpg')",
        image10: "url('./assets/image10.jpg')",
      }
    },
  },
  plugins: [],
}

