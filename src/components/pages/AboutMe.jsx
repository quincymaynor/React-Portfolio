import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Footer from '../Footer';

export default function AboutMe() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Box class="aboutme" id="aboutme">
        <Typography variant="body1" gutterBottom>

        </Typography>
        <Typography variant="body1" gutterBottom>
          My name is Quincy Maynor, and I am a recent U of M Coding Bootcamp graduate. I went to college for visual arts and chemistry, but was recently drawn to combining my background in STEM and art through coding. 
        </Typography>
      </Box>
      <Footer/>
    </>
  );
}