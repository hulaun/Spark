/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue900: "#021024",
        blue700: "#052659",
        blue500: "#5483B3",
        blue300: "#7DA0CA",
        blue100: "#C1E8FF",
      },
    },
  },
  plugins: [],
};
