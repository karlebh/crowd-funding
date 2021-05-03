module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       borderRadius: {
      '4xl': '2rem',
      '5xl': '3rem',
    },
      
    	backgroundImage: theme => ({
        'image-hero': "url('./helpers/images/image-hero-mobile.jpg')",
        'd-image-hero': "url('./helpers/images/image-hero-desktop.jpg')",
    	})
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      // border: ['hover', 'focus', 'active'],
      // borderColor: ['hover', 'focus', 'active']
    },
  },
  plugins: [],
}
