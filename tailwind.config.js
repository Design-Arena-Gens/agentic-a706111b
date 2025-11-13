/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF8A00',
          green: '#3FAF3D',
        },
        warm: {
          white: '#FFF9F3',
        },
        light: {
          grey: '#F2F2F2',
        },
        text: {
          dark: '#333333',
        },
        error: {
          red: '#FF3B30',
        },
        success: {
          green: '#3FAF3D',
        },
      },
      fontSize: {
        'h1': ['24px', { fontWeight: '600' }],
        'h2': ['20px', { fontWeight: '500' }],
        'body': ['16px', { fontWeight: '400' }],
        'small': ['13px', { fontWeight: '400' }],
      },
      spacing: {
        'base': '8px',
        'section': '16px',
        'major': '24px',
        'header': '32px',
      },
    },
  },
  plugins: [],
}
