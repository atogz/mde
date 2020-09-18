module.exports = {
  purge: [
    "./views/*.vue",
    "./components/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#206190',
        accentColor: '#ffa60a',
        opacityColorBlack: 'rgba(0,0,0,0.5)'
      },
      screens: {
        xxl: '1920px'
      }
    },
  },
  variants: {},
  plugins: [],
}
