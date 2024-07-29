/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    './src/TailwindProject/{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '720px',
      lg: '960px',
      xl: '1240px',
     xxl:'1400px',
    vlg:'1700px',
    },
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: '#3b82f6',
      }
    }
  },
  
  plugins: [],
}

