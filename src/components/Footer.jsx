import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'


export default function Footer() {
    return (
        <container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container justifyContent="space-between" alignItems="flex-end">
                <Grid item>
                <Button variant="contained" color="secondary" size="small">Phone: (612) 442 3948</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="secondary" size="small" href="mailto: quincymaynor@gmail.com">Email: quincymaynor@gmail.com</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="secondary" size="small"><a href="https://github.com/quincymaynor">GitHub: quincymaynor</a></Button>
                </Grid>
            </Grid>
        </container>
    );
  }