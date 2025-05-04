/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        // 高齢者に配慮した大きめのフォントサイズ
        'base': '1.125rem', // 18px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '1.75rem',   // 28px
        '3xl': '2rem',      // 32px
        '4xl': '2.5rem',    // 40px
      },
      spacing: {
        // アクセシビリティに配慮した余白
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',
        '20': '5rem',
      },
      colors: {
        'primary': {
          DEFAULT: '#4CAF50', // 優しい緑色
          'hover': '#3b8f3e',
        },
        'secondary': '#f0f8f0', // 薄い緑のバックグラウンド
        'accent': '#8BC34A',    // 明るい緑のアクセント色
        'text': {
          'primary': '#333333', // 読みやすいテキスト色
          'secondary': '#666666',
        },
        'background': {
          'main': '#ffffff',
          'secondary': '#f5f5f5',
        },
      },
      lineHeight: {
        'relaxed': '1.75', // 高齢者に読みやすい行間
      },
      borderRadius: {
        'lg': '0.75rem', // 12px - 視認性の高い角丸
        'full': '9999px',
      },
    },
  },
  plugins: [],
} 