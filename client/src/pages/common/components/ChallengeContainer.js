import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

export const ChallengeContainer = (props) => {
  return (
    <Box m={12}>
      <Card>
        <Box m={3}>
          <Typography component="h1" variant="h4">
            Typing Challenge
          </Typography>
        </Box>
        <Divider />
        <Grid container>
          <Grid item xs={9}>
            <Box m={3}>
              {props.challenge}
            </Box>
          </Grid>
          <Grid
            container item
            xs={3}
            justify="center"
            direction="column"
            alignItems="center"
            style={{backgroundColor: "#f5f5f5", textAlign: "center"}}
          >
            <Grid item>
              <Box mt={6} mb={3}>
                <TrackChangesIcon/>
                <Typography>
                  {props.accuracy}%
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box mt={3} mb={6}>
                <DirectionsRunIcon/>
                <Typography>
                  {props.wpm} WPM
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Box m={3}>
          <Box>
            {props.toggleButton}
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
