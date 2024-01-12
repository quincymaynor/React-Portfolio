import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'


export default function Footer() {
    return (
        <Grid container spacing={8}>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary" size="small">Phone: (612) 442 3948</Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary" size="small">Email: quincymaynor@gmail.com</Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary" size="small"><a href="https://github.com/quincymaynor">GitHub: quincymaynor</a></Button>
            </Grid>
        </Grid>
    );
  }