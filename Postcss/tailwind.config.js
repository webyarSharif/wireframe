/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        'container':{
            'padding' : '5px' ,
            'padding' : '5px'
        },
        'colors':{
            'red-color-bold' : '#ae0829' ,
            'red-color-brand' : '#dd3657' ,
            'red-color-light' : '#ff90a6'
        }
      },
    },
    plugins: [],
  }