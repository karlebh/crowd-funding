module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
    	backgroundImage: theme => ({
        'image-hero': "url('./helpers/images/image-hero-mobile.jpg')",
        'd-image-hero': "url('./helpers/images/image-hero-desktop.jpg')",
    	})
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      
    },
  },
  plugins: [],
}
