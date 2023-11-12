import Box from '@mui/material/Box';
import PortfolioCard from "../PortfolioCard";

export default function Portfolio() {
  return (
    <Box>
      <PortfolioCard
        alt="Screenshot of the Minimum Viable Playlist homepage"
        img="./MinimumViablePlaylistScreenshot.png"
        title="Minimum Viable Playlist"
        description="A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists"
        site="https://bradylange1.github.io/Playlist-Creator/"
        repo="https://github.com/BradyLange1/Playlist-Creator"
      >
      </PortfolioCard>
      <PortfolioCard
        alt="Screenshot of the Tabletop Character Creator homepage"
        img="./Tabletop Character Creator Screenshot.png"
        title="Tabletop Character Creator"
        description="An app for character creation. The place to keep all your character ideas and brainstorm new ones"
        site="https://tabletop-character-creator-d355a7356b6d.herokuapp.com/"
        repo="https://github.com/nicholewilburn/Tabletop-Character-Creator"
      >
      </PortfolioCard>
      <PortfolioCard
        alt="Screenshot of the Campaign Creator dashboard"
        img="./CampaignPlannerDashboard.png"
        title="Campaign Creator"
        description=""
        site="https://secret-coast-66847-6953fb83e518.herokuapp.com/"
        repo="https://github.com/quincymaynor/campaign-planner"
      >
      </PortfolioCard>
    </Box>
  );
}
