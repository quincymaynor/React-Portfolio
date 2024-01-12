
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import PortfolioCard from "../PortfolioCard";

export default function Portfolio() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <PortfolioCard
            alt="Screenshot of the Campaign Creator dashboard"
            img="./CampaignPlannerDashboard.png"
            title="Campaign Creator"
            description="An app for keeping all your campaign notes in one place"
            site="https://secret-coast-66847-6953fb83e518.herokuapp.com/"
            repo="https://github.com/quincymaynor/campaign-planner"
          >
          </PortfolioCard>
        </Grid>
        <Grid xs={6}>
          <PortfolioCard
            alt="Screenshot of the Tabletop Character Creator homepage"
            img="./Tabletop Character Creator Screenshot.png"
            title="Tabletop Character Creator"
            description="An app for character creation. The place to keep all your character ideas and brainstorm new ones"
            site="https://tabletop-character-creator-d355a7356b6d.herokuapp.com/"
            repo="https://github.com/nicholewilburn/Tabletop-Character-Creator"
          >
          </PortfolioCard>
        </Grid>
        <Grid xs={6}>
          <PortfolioCard
            alt="Screenshot of the Minimum Viable Playlist homepage"
            img="./MinimumViablePlaylistScreenshot.png"
            title="Minimum Viable Playlist"
            description="A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists"
            site="https://bradylange1.github.io/Playlist-Creator/"
            repo="https://github.com/BradyLange1/Playlist-Creator"
          >
          </PortfolioCard>
        </Grid>     
      </Grid>
    </Container>
  );
}
