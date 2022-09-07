import React, { useContext } from 'react';
import { Context } from '../Context';
import Song from './Song';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "10vh"
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function SongCard() {

    const classes = useStyles();

    const [state] = useContext(Context);
    const { songs_list } = state;

    if (songs_list === undefined || songs_list.length === 0){
        return (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        )
    }else{
        return (
            <Container>
                <Grid container alignItems="stretch" spacing={2} className={classes.root}>
                {songs_list.map(song =>(
                    <Grid key={song.track.track_id} item xs={12} sm={3} md={3}>
                        <Song key={song.track.track_id} track={song.track}/>
                    </Grid>
                ))}
            </Grid>
            </Container>
        );
    }
}

export default SongCard;