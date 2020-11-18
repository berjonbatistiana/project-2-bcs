import {Box, Grid, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {secondaryColor} from "./accentColor";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AlarmIcon from "@material-ui/icons/Alarm";
import React from "react";

export const WordsContainer = props => {
  return (
    <Box>
      <Box m={2}>
        <Typography component="h1" variant="h5">
          {props.title}
        </Typography>
      </Box>
      <Divider />
      <Grid container>
        <Grid item xs={9}>
          <Box m={3}>{props.challenge}</Box>
        </Grid>
        <Grid
          container
          item
          xs={3}
          justify="center"
          direction="column"
          alignItems="center"
          style={{ backgroundColor: secondaryColor, textAlign: "center" }}
        >
          <Grid item>
            <Box mt={3} mb={1}>
              <TrackChangesIcon />
              <Typography>{props.accuracy}%</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={1} mb={1}>
              <DirectionsRunIcon />
              <Typography>{props.wpm} WPM</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={1} mb={3}>
              <AlarmIcon
                color={props.timeLeft > 0 ? "inherit" : "disabled"}
              />
              <Typography
                color={props.timeLeft > 0 ? "inherit" : "textSecondary"}
              >
                {props.timeLeft}s
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}