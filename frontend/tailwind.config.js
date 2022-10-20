/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  theme: {
    extend: {
       fontfamily: {
        Inter: ["Inter",'sans-serif']
      }, 
      
      colors: {
        'green': '#49A078',
        'black':"#121212",
        'grey':'#4D4D4D',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
