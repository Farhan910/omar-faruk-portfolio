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
          react:"#61DAFB",
          html:"#E34F26",
          css:"#3D73A8",
          js:"#FDA65D",
          mongodb:"#37cdbe",
          node:"#61DAFB",
          git:"#E34F26",
          visualstudio:"#3D73A8",
          
          "base-100": "#1E1A32",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
