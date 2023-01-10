/**
 * max:1366
 */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm_special: {'max':'320px'},
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      sxl: '2560px',
      special: {'min': '1367px', 'max': '2559px'},
      speciallaptop: {'min':'1025px', 'max': '1366px'},
      speciallaptop2: {'min':'1280px', 'max': '1366px'},
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};
