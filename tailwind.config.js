module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FDA65D",
          secondary: "#19456B",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1B1A17",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
