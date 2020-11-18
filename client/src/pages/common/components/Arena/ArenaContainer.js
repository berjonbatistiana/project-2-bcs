import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import AlarmIcon from "@material-ui/icons/Alarm";
import { lightBlue } from "@material-ui/core/colors";

import { secondaryColor } from "../";


const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

export const ArenaContainer = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card
          elevation={0}
          style={{ border: "1px solid #e0e0e0", borderRadius: 25 }}
        >
          <Box m={2}>
            <Typography component="h1" variant="h5">
              Typing Challenge
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
                    color={props.timeLeft > 0 ? "initial" : "disabled"}
                  />
                  <Typography
                    color={props.timeLeft > 0 ? "initial" : "textSecondary"}
                  >
                    {props.timeLeft}s
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Box m={2} display="flex" alignItems="center">
            <Box width="100%">
              <Box>{props.toggleButton}</Box>
            </Box>
            <Box flexShrink={0}>
              <Box>{props.restartButton}</Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};
