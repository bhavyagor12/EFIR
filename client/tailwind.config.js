/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        server: "url('../src/images/server.svg')",
      },
    },
  },
  daisyui: {
    themes: ["corporate", "corporate", "cmyk"],
  },
  plugins: [require("daisyui")],
};
