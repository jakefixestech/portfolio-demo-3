/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1520',
          800: '#0f1923',
          700: '#1a3a5c',
        },
        accent: {
          blue: '#4a9eff',
          amber: '#e8a030',
        },
        muted: {
          gray: '#8899aa',
          blue: '#6b8199',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
