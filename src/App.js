import { Outlet } from 'react-router-dom';
import { ThemeContext } from './theme/ThemeContext';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { getThemePalette } from './theme/ThemePalette';
import { Grid } from '@mui/material';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'Light');
  const [chat, setChat] = useState([]);  // ✅ Fix: Initialized as an array
  const [menuOpen, setMenuOpen] = useState(false);

  // Create theme
  const theme = React.useMemo(() => createTheme(getThemePalette(mode)), [mode]);

  // Save theme mode in localStorage
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid
          container
          sx={{
            background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))',
          }}
        >
          {/* Sidebar */}
          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              bgcolor: 'primary.light',
              '@media (max-width:800px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
                position: { xs: 'fixed', md: 'relative' },
                zIndex: { xs: 9999, md: 1 },
                boxShadow: { xs: '0px 10px 10px rgba(0,0,0,0.1)', md: 'none' },
              },
            }}
          >
            <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9.5}>
            <Outlet context={{ chat, setChat, handleToggleMenu: setMenuOpen }} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
