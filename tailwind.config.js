/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {colors: {
        'primary-purple': '#3F1F56',
        'yellow': '#FFD700',
      }} },
  plugins: [],
}