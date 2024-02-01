import './App.css';
// import MainContainer from './components/MainContainer';
import AltMain from './components/AltMain';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#dcedc8',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}><AltMain /></ThemeProvider>;
      {/* <MainContainer /> */}
    </div>
  );
}

export default App;
