/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('@/assets/orly-hero.jpg')",
        cele: "url('@/assets/cele.jpg')"
      }
    }
  },
  plugins: [require('daisyui')]
}
