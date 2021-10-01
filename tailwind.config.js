module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
   corePlugins: {
    container: false 
  },
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            maxWidth: '980',
          },
          '@screen lg': {
            maxWidth: '1176px',
          },
          '@screen xl': {
            maxWidth: '1140',
          },
          '@screen 2xl': {
            maxWidth: '1316px', 
          },
        }
      })
    } 
  ],
  
  theme: {
    

    extend: {
      colors: {
        "primary": "#0984E3",
        "primary-100": "#2F80ED",
        "PrimaryLight-10": "#E7F3FE",
        "blueGray-200": "#E2E8F0",
        "blueGray-300": "#CBD5E1",
        "blueGray-400": "#94A3B8",
        "blueGray-500": "#64748B",
        "blueGray-600": "#475569",
        "blueGray-700": "#F2F2F2",
        "lightBlue-50": "#f0f9ff",
        "lightBlue-400": "#38BDF8",
        "lightBlue-500": "#0EA5E9",
        "blueGray-900": "#0F172A",
        "lightBlue-600": "#0284C7",
        "lightBlue-70": "#0C85F4",
        "lightBlue-900": "#0C4A6E",
        "lightBlue-100": "#E0F2FE",
        "lightBlue-200": "#BAE6FD",
        "amber-500": "#F59E0B",
        "red-600": "#DC2626",
        "pin-600": "#DB2777",
        "orange-400": "#FB923C",
        "orange-500": "#F97316",
        "danger": "#FF7675",
        "green-500": "#22C55E",
        "teal-500": "#14B8A6",
        "violet-100": "#EDE9FE",
        "emerald-100": "#D1FAE5",


      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary-300': '#94A3B8',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       }),
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.313rem',
        'md': '0.625rem',
        'lg': '1.25rem',
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
      fontSize: {
        'xs': '.0.813rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '3.5rem',
        '7xl': '5rem',
       },

      boxShadow: {
        sm: '0px 16px 20px 0px rgba(0, 0, 0, 0.059)',
        md: '0px 20px 40px 0px rgba(0, 0, 0, 0.102)',
        lg: ' 0px 10px 15px 0px #0000001A',
         xl: '0 7px 14px 0 rgba(0, 0, 0, 0.2)',

        none: 'none',
      },
      maxWidth: {
        '247': '247px',
        '1/2': '50%',
        '3/4': '75%',
        '3/4': '75%',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        'col-2': '16.66667%',
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
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
        '50': '50%',
       },
       lineHeight: {
        
        '7': '1.8rem',
        '13': '13px',
       }
     
    },
    
    
  },
  // Other stuff
};



