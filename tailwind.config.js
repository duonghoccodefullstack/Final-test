export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pop":["Poppins", "sans-serif"]
      },
      backgroundColor:{
        "movie": "#192026"
      },
      colors:{
        'aMovie':'#868686'
      }
    },
    
  },
  plugins: [],
}