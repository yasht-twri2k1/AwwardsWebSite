/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Files where Tailwind classes are used
    theme: {
      extend: {
        fontFamily: {
          zentry: ['"zentry"', 'sans-serif'],
          general: ['"general"', 'sans-serif'],
          'circular-web': ['"circular-web"', 'sans-serif'],
          'robert-medium': ['"robert-medium"', 'sans-serif'],
          'robert-regular': ['"robert-regular"', 'sans-serif'],
        },
        colors: {
          blue: {
            50: '#DFDFF0',
            75: '#dfdfff',
            100: '#F0F2FA',
            200: '#010101',
            300: '#4FB7DD',
          },
          violet: {
            300: '#5724ff',
          },
          yellow: {
            100: '#8e983f',
            300: '#edff66',
          },
        },
      },
    },
    variants: {
      extend: {
        borderOpacity: ['responsive', 'hover', 'focus'], // Enables border-white/20
      },
    },
    plugins: [], // Add any Tailwind plugins here if needed
  };