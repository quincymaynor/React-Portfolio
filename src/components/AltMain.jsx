import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NavTabs from './NavTabs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AltMain() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <Box sx={{ width: '100%' }}>
        <Container>
        <h1>Quincy Maynor</h1>
        </Container>
        <NavTabs value={value} handleChange={handleChange}/>
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
