module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['aktiv-grotesk', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'darkgray': 'rgb(51,49,47)',
        'lightgray': 'rgb(242,242,242)',
        'tan': 'rgb(226, 220, 195)',
        'darkred': {
          light: '#ffb288',
          DEFAULT: 'rgb(197, 79, 0);',
          dark: '#ce8860',
        },
      }
    },
  },
  plugins: []
}