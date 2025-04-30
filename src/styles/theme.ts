// Theme configuration for the portfolio
export const theme = {
  colors: {
    // Primary colors
    primary: {
      main: '#6366F1', // Vibrant indigo
      light: '#818CF8',
      dark: '#4F46E5',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    },
    // Secondary colors
    secondary: {
      main: '#10B981', // Emerald green
      light: '#34D399',
      dark: '#059669',
      gradient: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
    },
    // Accent colors
    accent: {
      main: '#F59E0B', // Amber
      light: '#FBBF24',
      dark: '#D97706',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
    },
    // Background colors
    background: {
      light: {
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        tertiary: '#F1F5F9',
      },
      dark: {
        primary: '#0F172A',
        secondary: '#1E293B',
        tertiary: '#334155',
      },
    },
    // Text colors
    text: {
      light: {
        primary: '#1E293B',
        secondary: '#475569',
        tertiary: '#64748B',
      },
      dark: {
        primary: '#F8FAFC',
        secondary: '#E2E8F0',
        tertiary: '#CBD5E1',
      },
    },
  },
  darkMode: {
    background: '#0F172A',
    text: '#F8FAFC',
    card: '#1E293B',
  },
  lightMode: {
    background: '#FFFFFF',
    text: '#1E293B',
    card: '#F8FAFC',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: {
      primary: 'Inter, sans-serif',
      secondary: 'Poppins, sans-serif',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  effects: {
    shadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      secondary: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
      accent: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
    },
  },
}; 