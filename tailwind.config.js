/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      mainColor: "#416d83",
      backgroundColor: "#f3f4e9",
      textColor: "#122a70",
      focusColor: "#023df7",
      snowFlake: "#49635550",
    },
    fontFamily: {
      DNFForgedBladeLight: ["DNFForgedBladeLight"],
      DNFForgedBladeNormal: ["DNFForgedBladeNormal"],
      DNFForgedBladeBold: ["DNFForgedBladeBold"],
    },
  },
  plugins: [],
};
