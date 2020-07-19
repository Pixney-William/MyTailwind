module.exports = {
  purge: {
    enabled:false,
    content: [
      './resources/views/**/*.html',
      './resources/js/**/*.vue',
      './resources/js/**/*.js',
    ],
    options: {
      whitelist: ['bg-red-500', 'px-4'],
    }
  },
    
  theme: {
    colors:{
      orange:"var(--color-orange)",
      blue:"var(--color-blue)",
      pale:"var(--color-pale)",
      black:"var(--color-black)",
      pink:"var(--color-pink)",
      white:"var(--color-white)",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}