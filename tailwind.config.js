module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#f8f8f8',
      'dark': '#030c26',
     }),
    extend: {
      fontFamily: {
        'muli': ['Muli', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      visibility: ['group-hover'],
      transform: ['group-hover']
    },
  },
  plugins: [],
}
