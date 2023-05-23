import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Sports() {
  return (
    <>
      <h2>Sports</h2>
      <p>I don't know how you would eat a sports</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src="https://media.gettyimages.com/id/515910714/photo/kobe-bryant.jpg?s=2048x2048&w=gi&k=20&c=7p747z1XnhWuruuvO2915Dy98iZqhadu4kIvlReGtog="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Basketball
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mamba Mentality
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