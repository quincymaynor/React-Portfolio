import './App.css';
// import MainContainer from './components/MainContainer';
import MainContainer from './components/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#88af8b',
    },
    secondary: {
      main: '#1d2e1e',
    },
  },
});

function App() {
  return (
    <div class="app-background">
      <ThemeProvider theme={theme}><MainContainer /></ThemeProvider>
    </div>
  );
}

export default App;
