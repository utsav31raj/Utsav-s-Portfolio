/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        secondary: {
          50: '#e6faff',
          100: '#ccf5ff',
          200: '#99ebff',
          300: '#66e0ff',
          400: '#33d6ff',
          500: '#00ccff',
          600: '#00a3cc',
          700: '#007a99',
          800: '#005266',
          900: '#002933',
        },
        accent: {
          50: '#f2e6ff',
          100: '#e6ccff',
          200: '#cc99ff',
          300: '#b366ff',
          400: '#9933ff',
          500: '#8000ff',
          600: '#6600cc',
          700: '#4d0099',
          800: '#330066',
          900: '#1a0033',
        },
        cyberpunk: {
          blue: '#00f0ff',
          purple: '#7b00ff',
          pink: '#ff00c8',
          yellow: '#ffe600',
        },
        dark: {
          100: '#d5d5d8',
          200: '#acabb2',
          300: '#82818b',
          400: '#595765',
          500: '#2f2d3e',
          600: '#252432',
          700: '#1b1b25',
          800: '#121219',
          900: '#09090c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 3s linear infinite',
        'scan-line': 'scan-line 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
          '100%': { textShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(45deg, #0b0b0f 0%, #12122c 100%)',
        'blue-glow': 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,240,255,0) 70%)',
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme(colors.cyberpunk.blue), 0 0 10px theme(colors.cyberpunk.blue)',
        'neon-purple': '0 0 5px theme(colors.cyberpunk.purple), 0 0 10px theme(colors.cyberpunk.purple)',
        'neon-pink': '0 0 5px theme(colors.cyberpunk.pink), 0 0 10px theme(colors.cyberpunk.pink)',
      },
    },
  },
  plugins: [],
};