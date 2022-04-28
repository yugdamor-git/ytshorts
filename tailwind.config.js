module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        OpenSans: ['Open Sans',' sans-serif']
      },
      colors: {
        'red':{
          500:'#FD0054',
        },
      }
    },
  },
  plugins: [],
}
