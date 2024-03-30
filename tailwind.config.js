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
        MontserratAlternates: ['"Montserrat Alternates"', defaultTheme.fontFamily.sans],
        Spinnaker: ['"Spinnaker"', 'regular'],
        PTSansCaption: ['"PT Sans Caption"', 'regular'],

        ExconVariable: ['Excon-Variable', 'variable'],
        ExconThin: ['Excon-Thin', 'thin'],
        ExconLight: ['Excon-Light', 'light'],
        ExconRegular: ['Excon-Regular', 'regular'],
        ExconMedium: ['Excon-Medium', 'medium'],
        ExconBold: ['Excon-Bold', 'bold'],
        ExconBlack: ['Excon-Black', 'black'],
      }
    },
    colors: {
      primary: '#58858D',
      secondary: '#141414',
      text: '#ECF8F9',
      background: '#0B0A0B',
      accent: '#313B4E'
    }
  },
  plugins: []
}
