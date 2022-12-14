module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tmnrcb: ["times-new-roman-mt-bold-condensed"],
      },
      colors: {
        mainbg: "#0d1117",
        secondarybg: "#0d1117",
        contentbg: "#161b22",
        contentsecondary: "#343942",
        contentborder: "#30363d",
        maintext: "#32363c",
        secondarytext: "#2d3239",
        primarytext: "#b0b8c0",
        headercolor: "#c9d1d9",
        borderclr: "#14181e",
        navbg: "#161b22",
        navtext: "#f0f6fc",
        navtexthovered: "#b9bbbd",
        btnbg: "#21262d",
        headingtext: "#c7cfd7",
      },
    },
  },
  plugins: [],
};
