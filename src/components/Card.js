import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 360,
  },
  media: {
    height: 140,
  },
  flex: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'flex-end',
      
  }
});


export function MediaCard({title,information,image,github,liveDemo}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {information}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.flex}>
        <a href={github} style={{textDecoration: 'none'}} target="_blank">
          <Button size="small" color="primary">
            Github
          </Button>
        </a>
        <a href={liveDemo} style={{textDecoration: 'none'}} target="_blank">
          <Button size="small" color="primary">
            Live Demo
          </Button>
        </a>
        
      </CardActions>
    </Card>
  );
}
