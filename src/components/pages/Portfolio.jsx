import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="Screenshot of the Minimum Viable Playlist homepage"
        height="250"
        image="./MinimumViablePlaylistScreenshot.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Minimum Viable Playlist
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://bradylange1.github.io/Playlist-Creator/">Visit the App</Button>
        <Button size="small" href="https://github.com/BradyLange1/Playlist-Creator">GitHub Repo</Button>
      </CardActions>
    </Card>
  );
}

// export default function Portfolio() {
//   return (
//     <>
//       <h1 class="title2">Portfolio</h1>
//       <div class="portfolio" id="portfolio">
//         <div class="portfolio-content">
//           <section class="project-card">
//             <img src="./MinimumViablePlaylistScreenshot.png" alt="Screenshot of the minimum viable playlist homepage"/>
//             <header>
//                 <h3>Minimum Viable Playlist</h3>
//                 <p>A simple and sleek playlist creation app for music enthusiasts who want to create custom playlists</p>
//                 <a href="https://bradylange1.github.io/Playlist-Creator/">Link to Minimum Viable Playlist</a>
//                 <a href="https://github.com/BradyLange1/Playlist-Creator">Link to the GitHub Repo</a>
//             </header>
//           </section>
//           <section class="project-card">
//             <img src="./Tabletop Character Creator Screenshot.png" alt="Screenshot of the tabletop character creator homepage"/>
//             <header>
//               <h3>Tabletop Character Creator</h3>
//               <p>An app for character creation. The place to keep all your character ideas and brainstorm new ones.</p>
//               <a href="https://tabletop-character-creator-d355a7356b6d.herokuapp.com/">Link to Tabletop Character Creator</a>
//               <a href="https://github.com/nicholewilburn/Tabletop-Character-Creator">Link to the GitHub Repo</a>
//             </header>
//           </section>
//           <section class="project-card">
//             <img src="./CampaignPlannerDashboard.png" alt="Screenshot of the campaign creator dashboard"/>
//             <header>
//               <h3>Campaign Creator</h3>
//               <p>An app for character creation. The place to keep all your character ideas and brainstorm new ones.</p>
//               <a href="https://secret-coast-66847-6953fb83e518.herokuapp.com/">Link to Campaign Creator</a>
//               <a href="https://github.com/quincymaynor/campaign-planner">Link to the GitHub Repo</a>
//             </header>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }
