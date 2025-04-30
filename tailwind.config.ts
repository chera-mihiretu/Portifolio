import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: 'var(--primary-main)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          main: 'var(--secondary-main)',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
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
    },
  },
  plugins: [],
};

export default config; 