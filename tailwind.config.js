module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
  theme: {

    extend: {
      colors: {
        "blueGray-900": "#0F172A",
        
        "lightBlue-500": "#0EA5E9",

      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.313rem',
        'xs': '0',
        'md': '0',
        'lg': '0',
        'xl': '0'
        

      },
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],

      },

      boxShadow: {
        sm: '0px 16px 20px 0px rgba(0, 0, 0, 0.059)',
        md: '0px 20px 40px 0px rgba(0, 0, 0, 0.102)',
        lg: '0px 80px 80px 0px rgba(17, 89, 118, 0.149)',
         xl: '0 7px 14px 0 rgba(0, 0, 0, 0.2)',

        none: 'none',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      zIndex: {
        '-9999': '-9999',
        '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
       '999': 999,
       '9999': 9999,
        'auto': 'auto',
      }

     
    },
    
  },
  // Other stuff
};



