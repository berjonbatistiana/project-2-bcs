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

export function TransitionsModal(props) {
  const classes = useStyles();
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
              xs={3}
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

              <Grid item xs={9}>
                <Box m={3}><ChallengeResultsLineGraph /></Box>
              </Grid>
          </Grid>

          <Grid
            container
            item
            justify="center"
            direction="column"
            alignItems="center"
            style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}
          >
            <Grid m={12} container spacing={6}>
              <Grid item xs={12} sm={2} md={3} lg={3}>
                <Box m={3}>
                  <Typography>WPM</Typography>
                  <Typography variant="h2">{props.wpm} </Typography>
                  <Typography>Acc</Typography>
                  <Typography variant="h2">{props.accuracy} %</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={10} md={9} lg={9}>
                <Box m={3}>
                  <ChallengeResultsLineGraph />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
