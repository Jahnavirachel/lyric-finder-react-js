import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: "7vh"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Song({ track }) {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    { track.artist_name }
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {track.track_name}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={`lyrics/track/${track.track_id}`} >
                <Button size="small" color="primary" variant="outlined">
                    view lyrics
                </Button>
            </Link>
            </CardActions>
        </Card>
        
    );
}

export default Song;