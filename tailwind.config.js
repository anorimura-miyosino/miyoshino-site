/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // PurgeせずTailwindのすべてのクラスを含める
  safelist: [{ pattern: /.*/ }],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4CAF50",
          hover: "#3b8f3e",
        },
        text: {
          primary: "#333333",
        },
      },
    },
  },
  plugins: [],
};
