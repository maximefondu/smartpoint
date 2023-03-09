/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: require('./src/assets/css/config/colors.json'),
        screens: require('./src/assets/css/config/breakpoints.json'),
        fontFamily: require('./src/assets/css/config/font.json')['fontFamily'],
        fontSize: require('./src/assets/css/config/font.json')['fontSize'],
        boxShadow: require('./src/assets/css/config/shadow.json'),
        borderRadius: require('./src/assets/css/config/rounded.json')
    }
}
