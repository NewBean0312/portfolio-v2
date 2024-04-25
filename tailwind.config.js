/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      mainColor: "#416d83",
      backgroundColor: "#f3f4e9",
      mainButtonTextColor: "#f8efce",
      textColor: "#122a70",
      focusColor: "#023df7",
      snowFlake: "#49635550",
      dimmedLayer: "#00000070",
      whiteColor: "#fff",
    },
    fontFamily: {
      DNFForgedBladeLight: ["DNFForgedBladeLight"],
      DNFForgedBladeNormal: ["DNFForgedBladeNormal"],
      DNFForgedBladeBold: ["DNFForgedBladeBold"],
    },
  },
  plugins: [],
};
