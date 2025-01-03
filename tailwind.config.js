/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#0066ff',
        primary:'#ef4444',
      },
      fontFamily:{
        NIRVANA:["NIRVANA"],
        Poppins:["Poppins"],
      }
    },
  },
  plugins: [],
}