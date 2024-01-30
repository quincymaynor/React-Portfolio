import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Footer from '../Footer';

export default function Resume() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Box class="resume" id="resume">
        <Card >
          <CardContent >
            <Typography gutterBottom variant="h6" component="div">
              TECHNICAL SKILLS
            </Typography>

            <Typography gutterBottom variant="body2" color="text.secondary">
              Frontend: HTML5, CSS, JQuery, Javascript, Bootstrap
              Backend: MySQL, MongoDB, Express, ReactJS, Node, Handlebars, Webpack
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              PROJECT EXPERIENCE
            </Typography>

            <Typography gutterBottom variant="body2">
              Campaign Planner App | Deployed — Project Manager
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            An app for storing and sharing all of your tabletop game notes.
            Lead the planning and development while also implementing the backend of the application.
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            Tools/Languages: Javascript, Node.js, Express,js, GraphQL, MongoDB, Mongoose ODM, Apollo,  JWT, React, HTML/CSS, Heroku
            </Typography>
            
            <Typography gutterBottom variant="body2">
              Character Creator App | Deployed — Project Manager
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            An app for creating a Dungeons and Dragons character.
            Lead the planning and development while also implementing the controllers for the application.
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            Tools/Languages: Javascript, Node.js, MySQL2, Express, Sequelize,  Bcrypt, HTML/CSS, Bulma, Heroku
            </Typography>

            <Typography gutterBottom variant="body2">
              Minimum Viable Playlist App | Repo | Deployed — Developer
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            A simple application for creating playlists.
            Implemented the HTML and assisted with the implementation of the CSS and JS.
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            Tools/Languages: JQuery, Javascript, HTML, CSS, Materialize CSS
            </Typography>


            <Typography gutterBottom variant="h6" component="div">
              WORK EXPERIENCE
            </Typography>

            <Typography gutterBottom variant="body2">
              Self-Employed — Home Improvement Contractor
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            January 2022 - Present, Minneapolis, MN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Managed schedule, budget, and income for operations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Consulted on home aesthetic decisions
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              - Installed drywall, fixed and refinished woodwork, performed minor electrical and plumbing fixes, painted walls
            </Typography>

            <Typography gutterBottom variant="body2">
              Eastside Community Co-op — Housekeeping and Maintenance Lead
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              October 2020 - August 2022,  Minneapolis, MN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Oversaw the ordering of supplies for the housekeeping department
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - Established and maintained the organization of the back end of the store
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              - Addressed all maintenance issues in the store, including basic plumbing, electrical, and mechanical problems
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              EDUCATION
            </Typography>

            <Typography gutterBottom variant="body2">
              University of Minnesota Coding Bootcamp - Coding Certificate, October 2023
            </Typography>

            <Typography gutterBottom variant="body2">
              University of Minnesota, Morris - Bachelor of Arts, May 2020
            </Typography>
            {/* <Typography gutterBottom variant="body2" color="text.secondary">
              Major: Studio Art	Minor: Chemistry
            </Typography> */}
            
          </CardContent>
        </Card>
      </Box>
      <Footer/>
    </>
  );
}
