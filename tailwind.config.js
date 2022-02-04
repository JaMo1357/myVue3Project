module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
        height: {
            200: '200px',
            43: '43px',
        },
        width: {
            63: '63px',
            120: '120px',
        },
        minWidth: {
            1000: '1000px',
        },
        padding: {
            60: '60px',
        },
        backgroundImage: {
            'loader': "url('./src/assets/loader.gif')",
        },
    },
  },
  plugins: [],
}
