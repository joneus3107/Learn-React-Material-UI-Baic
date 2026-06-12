import * as React from 'react';
// CSS
import './App.css';
// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Context
import { ThemeContext } from './contexts/AppContext';
// Routes
import {Routes, Route} from 'react-router';
import MainLayout from './layout/MainLayout';
//Pages
import { Home, JobList, JobDetail } from './pages';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  const logInHandler = () => {
    setLoading(true);
  }

  return (
    <ThemeContext.Provider value={{ loading, logInHandler, setIsDarkTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout theme={theme}/>}>
            <Route index element={<Home/>} />
            <Route path="job-list">
              <Route index element={<JobList/>} />
              <Route path=":id" element={<JobDetail/>} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App
