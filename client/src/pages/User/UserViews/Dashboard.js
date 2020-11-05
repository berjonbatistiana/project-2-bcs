import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { Donut, LineGraph, FriendHighScores } from "../../common";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item container xs={12} md={6} lg={5}>
          <Grid item xs={6}>
            <Box mt={3}>
              <Typography component="h3" variant="h5">
                Accuracy
              </Typography>
              <Donut />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box mt={3}>
              <Typography component="h3" variant="h5">
                Personal High Score
              </Typography>
              <Donut />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box m={3}>
              <Typography component="h3" variant="h5">
                Friend High Scores
              </Typography>
              <FriendHighScores />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <Box m={3}>
            <Typography component="h3" variant="h5">
              Progress
            </Typography>
            <LineGraph />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
