import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {

  const [value, setValue] = useState(0);

  // Use the value state to conditionally return the component for the selected page
  const renderPage = () => {
    if (value === 0) {
        return <AboutMe />;
      }
    if (value === 1) {
    return <Portfolio />;
    }
    if (value === 2) {
        return <Resume />;
      }
    if (value === 3) {
      return <Contact />;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <Box sx={{ width: '100%' }}>
        <Container>
        <h1>Quincy Maynor</h1>
        </Container>
        <NavTabs value={value} handleChange={handleChange}/>
        <Container>{renderPage()}</Container>
        <Container>
            <Grid container spacing={8}>
                <Grid item xs={4}>
                <Item>Phone: (612) 442 3948</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>Email: quincymaynor@gmail.com</Item>
                </Grid>
                <Grid item xs={4}>
                <Item><a href="https://github.com/quincymaynor">GitHub: quincymaynor</a></Item>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
}
