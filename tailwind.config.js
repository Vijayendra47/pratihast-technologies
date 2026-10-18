/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberDark: '#070A13',
        cyberCard: '#0F1626',
        cyberCyan: '#00F0FF',
        cyberBlue: '#3B82F6'
      },
    },
  },
  plugins: [],
};
