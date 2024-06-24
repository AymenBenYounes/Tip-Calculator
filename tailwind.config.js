/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        space: ["Space Mono", "monospace"]
      },
      colors:{
        StrongCyan: "hsl(172, 67%, 45%)",
        VeryDarkCyan: "hsl(183, 100%, 15%)",
        DarkGrayishCyan: "hsl(186, 14%, 43%)",
        GrayishCyan: "hsl(184, 14%, 56%)",
        LightGrayishCyan: "hsl(185, 41%, 84%)",
        VeryLightGrayishCyan: "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
        Red: "#ff0000"
      },
      letterSpacing:{
        title: "0.5em"
      },
      width:{
        middle: "30%",
        half: "45%"
      },
      maxWidth:{
        maxTitle: "130px"
      }
    },
  },
  plugins: [],
}

