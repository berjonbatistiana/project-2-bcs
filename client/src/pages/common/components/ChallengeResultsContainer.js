import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography, Grid, Box, Card } from "@material-ui/core";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { ChallengeResultsLineGraph } from "../components/ChallegeResultsLineGraph";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 800,
    height: "80%",
  },
}));

const gridResultStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    textAlign: "center",
  },
}));

export function TransitionsModal(props) {
  const classes = useStyles();
  const resultClasses = gridResultStyles();
  return (
    <div>
      <div className={classes.paper}>
        <Box m={12}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Results
          </Typography>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              sm={2}
              md={3}
              lg={3}
              justify="center"
              direction="column"
              alignItems="center"
              style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}
            >
              <Grid item>
                <Box mt={6} mb={3}>
                  <Typography>WPM</Typography>
                  <Typography variant="h2">{props.wpm} </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={3} mb={6}>
                  <Typography>Acc</Typography>
                  <Typography variant="h2">{props.accuracy} %</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={10} md={9} lg={9}>
              <Box m={3}>
                <ChallengeResultsLineGraph />
              </Box>
            </Grid>
          </Grid>
          <div
            className={resultClasses.root}
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid container spacing={3}>
              <Grid item xs>
                <Typography className={resultClasses.paper}>
                  test type
                </Typography>
                <Typography className={resultClasses.paper}>
                  time: 30s
                </Typography>
                <Typography className={resultClasses.paper}>
                  punctuation: on
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography className={resultClasses.paper}>
                  characters
                </Typography>
                <Typography className={resultClasses.paper}>205</Typography>
              </Grid>
              <Grid item xs>
                <Typography className={resultClasses.paper}>Score</Typography>
                <Typography className={resultClasses.paper}>72</Typography>
              </Grid>
            </Grid>
            Add button to save results as guest, to sign in, and also one to take test again.
          </div>
        </Box>
      </div>
    </div>
  );
}
