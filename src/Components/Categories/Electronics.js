import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Electronics() {
  return (
    <>
      <h2>Electronics</h2>
      <p>Please don't eat our electronics</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220715122428-macbook-air-m2-review-9.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Laptops
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Code the next facebook
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