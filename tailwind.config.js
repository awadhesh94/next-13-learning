/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      thin: ['font-100', 'sans-serif', 'serif'],
      extraLight: ['font-200', 'sans-serif', 'serif'],
      light: ['font-300', 'sans-serif', 'serif'],
      regular: ['font-400', 'sans-serif', 'serif'],
      medium: ['font-500', 'sans-serif', 'serif'],
      semiBold: ['font-600', 'sans-serif', 'serif'],
      bold: ['font-700', 'sans-serif', 'serif'],
      extraBold: ['font-800', 'sans-serif', 'serif'],
      black: ['font-900', 'sans-serif', 'serif'],
    },
    colors: {
      coal: '#0f0d0e',
      charcoal: '#231f20',
      grayDark: '#71717A',
      grayLight: '#A1A1A1',
      yellow: '#fcba28',
      pink: '#f38ba3',
      green: '#0ba95b',
      lightGreen: '#cfe957',
      purple: '#7b5ea7',
      biege: '#f9f4da',
      blue: '#12b5e5',
      orange: '#fc7428',
      red: '#ed203d',
      white: '#ffffff',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        yellow: '#fcba28 5px 5px 0px',
        pink: '#f38ba3 5px 5px 0px',
        lightGreen: '#cfe957 5px 5px 0px',
        blue: '#12b5e5 5px 5px 0px',
        purple: '#7b5ea7 5px 5px 0px',
        carrot: '#fc7428 5px 5px 0px',
        red: '#ed203d 5px 5px 0px',
        green: '#0ba95b 5px 5px 0px',
        biege: '#f9f4da 5px 5px 0px',
      },
    },
  },
  plugins: [],
};
