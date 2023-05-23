import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Food() {
  return (
    <>
      <h2>Food</h2>
      <p>Please Eat Our Food</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2666,w_3999,x_0,y_0/c_limit,dpr_1,f_auto,fl_lossy,q_80,w_1706/BreezyTown_pepperoniPaintJob_AmberFouts_MB_8126_jxmz8o.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pizza Slaps
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}