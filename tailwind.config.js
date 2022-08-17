/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        background: '#020F1A',
        secondary: '#04121E',
        third: '#0A1C2B',
        fourth:'#0A233A',
        text: '#314E64',
        gradient1: '#0FA9D5',
        gradient2: '#27F19F',
        discord: '#7289da',
      },
      fontFamily: {
        'montserrat':['Montserrat']
      }
    },
  },
  plugins: [
    require('tailwind-animatecss'),
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}