import React from 'react';

import Img from '../../static/images/pantai.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardJourney = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Img}
          alt="images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Snorkling
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            12 January 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum recusandae repellat voluptas, cumque beatae nam hic asperiores quis maiores! Porro animi nostrum eaque modi necessitatibus dolore esse est corporis facere.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardJourney;