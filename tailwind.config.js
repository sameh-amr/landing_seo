/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eeecfd',
          100: '#d7d3fb',
          200: '#b4acf6',
          300: '#9185f2',
          400: '#6d5eee',
          500: '#4f46e5', // Brand color
          600: '#3a34be',
          700: '#2c2792',
          800: '#1e1a66',
          900: '#0f0d33',
        },
        secondary: {
          50: '#e8f8fa',
          100: '#d0f1f6',
          200: '#a0e3ed',
          300: '#70d5e3',
          400: '#40c8da',
          500: '#26b6c8',
          600: '#1e91a0',
          700: '#166d78',
          800: '#0f4850',
          900: '#072428',
        },
        accent: {
          50: '#fff0e5',
          100: '#ffe1cc',
          200: '#ffc399',
          300: '#ffa566',
          400: '#ff8733',
          500: '#ff6900',
          600: '#cc5400',
          700: '#993f00',
          800: '#662a00',
          900: '#331500',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};