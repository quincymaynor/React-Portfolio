import { useState } from 'react';
import * as React from 'react';
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
  const [currentPage, setCurrentPage] = useState('Home');

  // Use the current page state to conditionally return the component for the selected page
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Box sx={{ width: '100%' }}>
      <header className="siteheader">
        <h1>Quincy Maynor</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <main className="mx-3">{renderPage()}</main>
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