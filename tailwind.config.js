/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMonoMedium: ['JetBrainsMono-Medium', 'medium'],
        JetBrainsMonoSemiBold: ['JetBrainsMono-SemiBold', 'semibold'],
        ExconMedium: ['Excon-Medium', 'medium'],
        ExconBold: ['Excon-Bold', 'bold'],
        MontserratAlternates: ['"Montserrat Alternates"', defaultTheme.fontFamily.sans],
        Spinnaker: ['"Spinnaker"', 'regular'],
        PTSansCaption: ['"PT Sans Caption"', 'regular'],
      }
    },
    colors: {
      primary: '#58858D',
      secondary: '#E1E7F4',
      text: '#ECF8F9',
      background: '#070B1B',
      accent: '#313B4E'
    }
  },
  plugins: []
}
