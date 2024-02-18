module.exports = {
  content: ["./public/**/*.{html, js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['iransans']
      }

    },
  },
  plugins: [require("daisyui"),],

}

