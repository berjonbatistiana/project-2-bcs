import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Donut, LineGraph, FriendHighScores } from "../../common";

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
});

export const Leaderboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item container xs={12} md={6} lg={4}>
          <Grid item xs={6}>
            <Typography component="h3" variant="h5">
              Accuracy
            </Typography>
            <Donut/>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h3" variant="h5">
              Personal High Score
            </Typography>
            <Donut/>
          </Grid>
          <Grid item xs={12}>
            <FriendHighScores/>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Typography component="h3" variant="h5">
            Progress
          </Typography>
          <LineGraph/>
        </Grid>
      </Grid>
    </div>
  );
}
