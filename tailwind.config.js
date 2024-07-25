/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customPurple: '#712b8c',
        blue: '#2c3d9a'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(rgb(241, 107, 102) 35.94%, rgb(250, 175, 95) 100%)',
      },
      height: {
        '140': '680px', // 560px
      },
      spacing: {
        '18': '72px', // Custom gap value
      },
    },
  },
  plugins: [],
}
