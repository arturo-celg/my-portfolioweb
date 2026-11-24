import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import './styles/index.css'
import App from './App.jsx'
import './utils/i18n.js'

const getDesignTokens = (mode) => {
  const isLight = mode === 'light';

  return {
    palette: {
      mode,
      primary: {
        main: isLight ? '#C62828' : '#FF6B6B',
        light: isLight ? '#E57373' : '#FF9A9A',
        dark: isLight ? '#8E0000' : '#C53A3A',
      },
      secondary: {
        main: isLight ? '#1565C0' : '#64B5F6',
        light: isLight ? '#5E92F3' : '#90CAF9',
        dark: isLight ? '#003C8F' : '#1E88E5',
      },
      background: {
        default: isLight ? '#F7F3EB' : '#1D2129',
        paper: isLight ? '#FFFDF7' : '#2A303A',
      },
      text: {
        primary: isLight ? '#1E2430' : '#F4F6F8',
        secondary: isLight ? '#4C566A' : '#BEC6D1',
      },
      divider: isLight ? '#D7D3C8' : '#3E4652',
      lego: {
        yellow: isLight ? '#F8D451' : '#FFD95E',
        green: isLight ? '#2E7D32' : '#66BB6A',
      },
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: '"Poppins", "Nunito Sans", "Segoe UI", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '0.01em' },
      h2: { fontWeight: 800, letterSpacing: '0.01em' },
      h3: { fontWeight: 700, letterSpacing: '0.01em' },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isLight
              ? 'radial-gradient(circle at 1px 1px, rgba(198, 40, 40, 0.06) 1px, transparent 0), linear-gradient(180deg, #f8f4ec 0%, #f2ede1 100%)'
              : 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0), linear-gradient(180deg, #1f2430 0%, #171b23 100%)',
            backgroundSize: '24px 24px, 100% 100%',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${isLight ? '#d5cdbd' : '#404958'}`,
            boxShadow: isLight
              ? '0 12px 28px rgba(30, 36, 48, 0.10), 0 2px 0 rgba(30, 36, 48, 0.15)'
              : '0 12px 26px rgba(0, 0, 0, 0.35), 0 2px 0 rgba(255, 255, 255, 0.08) inset',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'solid',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
          },
        },
      },
    },
  };
};

function Root() {
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', next);
      return next;
    });
  };

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App mode={mode} onToggleTheme={toggleTheme} />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />)

export default Root;
