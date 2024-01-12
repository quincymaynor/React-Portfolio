import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PortfolioCard({ alt, img, title, description, site, repo }) {
  return (
    <Card >
      <CardMedia
        component="img"
        alt={alt}
        height="250"
        image={img}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" size="small" href={site}>Visit the App</Button>
        <Button variant="contained" color="secondary" size="small" href={repo}>Check the GitHub Repo</Button>
      </CardActions>
    </Card>
  );
}
