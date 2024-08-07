import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import NavTabs from './NavTabs';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function MainContainer() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <Box sx={{ width: '100%' }}>
        <Container>
          {/* <Typography variant="h3" gutterBottom>
            Quincy Maynor
          </Typography> */}
        </Container>
        <NavTabs value={value} handleChange={handleChange}/>
    </Box>
    );
}
