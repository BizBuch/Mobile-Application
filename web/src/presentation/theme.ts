/**
 * Web Theme
 * Mirrors the mobile theme structure but uses CSS variables / plain objects
 * suitable for web (no React Native StyleSheet).
 */

export const theme = {
  colors: {
    primary: '#FF9933',
    primaryDark: '#FF6600',
    background: '#f9fafb',
    white: '#FFFFFF',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    red500: '#ef4444',
    blue500: '#3b82f6',
    green500: '#10b981',
    border: '#eeeeee',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
  buttonVariants: {
    primary: {
      backgroundColor: '#FF9933',
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      borderWidth: 0,
      borderColor: 'transparent',
    },
    secondary: {
      backgroundColor: 'rgba(255, 153, 51, 0.15)',
      textColor: '#FF9933',
      iconColor: '#FF9933',
      borderWidth: 1,
      borderColor: 'rgba(255, 153, 51, 0.3)',
    },
    outline: {
      backgroundColor: '#FFFFFF',
      textColor: '#4b5563',
      iconColor: '#4b5563',
      borderWidth: 1,
      borderColor: '#d1d5db',
    },
  },
} as const;

export type ButtonVariant = keyof typeof theme.buttonVariants;