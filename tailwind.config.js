module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tmnrcb: ["times-new-roman-mt-bold-condensed"],
      },
      colors: {
        mainbg: "#010409",
        secondarybg: "#0d1117",
        contentbg: "#161b22",
        maintext: "#32363c",
        secondarytext: "#2d3239",
        primarytext: "#b0b8c0",
        headercolor: "#c9d1d9",
        borderclr: "#14181e",
      },
    },
  },
  plugins: [],
};
