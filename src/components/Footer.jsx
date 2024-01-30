import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'


export default function Footer() {
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container justifyContent="space-between" alignItems="flex-end">
                <Grid item>
                    <Button variant="contained" color="secondary" size="small" href="mailto: quincymaynor@gmail.com">My Email</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" size="small" href="https://github.com/quincymaynor">My GitHub</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" size="small" href="https://www.linkedin.com/in/quincy-maynor/">My LinkedIn</Button>
                </Grid>
            </Grid>
        </Container>
    );
  }