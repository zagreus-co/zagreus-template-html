module.exports = {
  content: ["*.html", "./pages/*.html"],
  theme: {
    extend: {
      transitionProperty: {
        right: "right",
      },
      colors: {
        theme: {
          primary: "#EF234E",
          "darked-primary": "#C70039",
          secondary: "#1a233e",
          dark: "#030C26",
          gray: "#f8f8f8",
        },
      },
    },
  },
  plugins: [require("postcss-import")],
};
