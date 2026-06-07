import { createTheme } from '@mui/material/styles';

/**
 * Web Theme — MUI
 * Mapped from the original custom theme to MUI's theme system.
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF9933',
      dark: '#FF6600',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3b82f6',
    },
    background: {
      default: '#f9fafb',
      paper: '#FFFFFF',
    },
    error: {
      main: '#ef4444',
    },
    success: {
      main: '#10b981',
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      disabled: '#9ca3af',
    },
    divider: '#eeeeee',
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontSize: '24px', fontWeight: 700 },
    h2: { fontSize: '20px', fontWeight: 600 },
    h3: { fontSize: '18px', fontWeight: 600 },
    body1: { fontSize: '15px', lineHeight: 1.5 },
    body2: { fontSize: '14px', lineHeight: 1.5 },
    caption: { fontSize: '13px' },
    button: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: '1px solid #eeeeee',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          fontSize: '11px',
          '&.Mui-selected': { color: '#FF9933' },
        },
      },
    },
  },
});

/** ButtonVariant kept for backwards compatibility */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';