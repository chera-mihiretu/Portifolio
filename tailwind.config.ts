import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          main: 'var(--accent-main)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        background: {
          light: {
            primary: 'var(--bg-light-primary)',
            secondary: 'var(--bg-light-secondary)',
            tertiary: 'var(--bg-light-tertiary)',
          },
          dark: {
            primary: 'var(--bg-dark-primary)',
            secondary: 'var(--bg-dark-secondary)',
            tertiary: 'var(--bg-dark-tertiary)',
          },
        },
        text: {
          light: {
            primary: 'var(--text-light-primary)',
            secondary: 'var(--text-light-secondary)',
            tertiary: 'var(--text-light-tertiary)',
          },
          dark: {
            primary: 'var(--text-dark-primary)',
            secondary: 'var(--text-dark-secondary)',
            tertiary: 'var(--text-dark-tertiary)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 25px rgba(99, 102, 241, 0.7)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
};

export default config; 