import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// Context
import { ThemeContext } from './contexts/AppContext';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isLogIn, setIsLogIn] = React.useState(false);

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: { main: '#D54541' },
      jobCard: {
        backgroundColor: isDarkTheme ? '#001e3c' : '#fff'
      },
      header: {
        backgroundColor: isDarkTheme ? '#272727' : '#fff',
        shadow: `0px 2px 4px -1px ${isDarkTheme ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'},0px 4px 5px 0px ${isDarkTheme ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.14)'},0px 1px 10px 0px ${isDarkTheme ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`
      }
    },
  }), [isDarkTheme]);

  React.useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [loading]);

  React.useEffect(() => {
    console.log(theme.palette);
    
  })

  const logInHandler = () => {
    setIsLogIn(prev => !prev);
    setLoading(true);
  }

  const logInOnly = isLogIn && !loading;

  return (
    <ThemeContext.Provider value={{ loading, isLogIn, logInHandler, logInOnly, setIsDarkTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header sx={{ backgroundColor: theme.palette.header.backgroundColor, boxShadow: theme.palette.header.shadow, color: theme.palette.primary.main }}/>
        <Main />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App
