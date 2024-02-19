/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'texas': ['TexasBold'],
        'marlboro': ["Marlboro"],
        'chunkfive': ['ChunkFive'],
        'roboto': ['Roboto', 'sans-serif'],
        'arial': ['Arial', 'serif'],
        'din': ['Din']
      }
    }
  },
  plugins: [],
}

