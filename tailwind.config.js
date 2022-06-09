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
          "base-100": "#1E1A32",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
