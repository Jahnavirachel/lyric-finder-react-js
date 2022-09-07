import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: "2vh",
      marginTop: "10vh",
    },
    paper: {
      padding: "5vh"
    }
  }),
);
function SongLyrics(props) {
    const [lyrics, setLyrics] = useState({});
    const [track,setTrack] = useState({})
    let { id } = useParams();


    useEffect(()=>{
        axios.get(`https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}
        &apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            let lyrics = res.data.message.body.lyrics;
            setLyrics({ lyrics });

            return axios.get(
              `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id
              }&apikey=${process.env.REACT_APP_API_KEY}`
            );
          })
          .then(res => {
            let track = res.data.message.body.track;
            setTrack({ track });
          })
          .catch(err => console.log(err))
    },[id]);
    const classes = useStyles();
    if (
        lyrics === undefined ||
        Object.keys(lyrics).length === 0
      ) {
        return <CircularProgress />;
      }else{
        return (
          <div className={classes.root}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={10}>
                <Paper elevation={3} className={classes.paper}>
                  {lyrics.lyrics.lyrics_body}
                </Paper>
              </Grid>
            </Grid>
          </div>
      );
      }
}

export default SongLyrics;