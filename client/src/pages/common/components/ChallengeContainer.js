import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
  },
  spacebar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 180,
  }
}));

export const ChallengeContainer = (props) => {
  const classes = useStyles();
  const rows = [
    [
      {upperKey: "!", key: "1", finger: "LP", color: "#e91e63"},
      {upperKey: "@", key: "2", finger: "LR", color: "#673ab7"},
      {upperKey: "#", key: "3", finger: "LM", color: "#2196f3"},
      {upperKey: "$", key: "4", finger: "LI", color: "#00bcd4"},
      {upperKey: "%", key: "5", finger: "LI", color: "#00bcd4"},
      {upperKey: "^", key: "6", finger: "RI", color: "#ff5722"},
      {upperKey: "&", key: "7", finger: "RI", color: "#ff5722"},
      {upperKey: "*", key: "8", finger: "RM", color: "#cddc39"},
      {upperKey: "(", key: "9", finger: "RR", color: "#ffc107"},
      {upperKey: ")", key: "0", finger: "RP", color: "#ff5722"},
      {upperKey: "_", key: "-", finger: "RP", color: "#ff5722"},
      {upperKey: "+", key: "=", finger: "RP", color: "#ff5722"},
      {upperKey: "Del", key: "Del", finger: "RP", color: "#ff5722"},
    ],
    [
      {upperKey: "Q", key: "q", finger: "LP", color: "#e91e63"},
      {upperKey: "W", key: "w", finger: "LR", color: "#673ab7"},
      {upperKey: "E", key: "e", finger: "LM", color: "#2196f3"},
      {upperKey: "R", key: "r", finger: "LI", color: "#00bcd4"},
      {upperKey: "T", key: "t", finger: "LI", color: "#00bcd4"},
      {upperKey: "Y", key: "y", finger: "RI", color: "#ff5722"},
      {upperKey: "U", key: "u", finger: "RI", color: "#ff5722"},
      {upperKey: "I", key: "i", finger: "RM", color: "#cddc39"},
      {upperKey: "O", key: "o", finger: "RR", color: "#ffc107"},
      {upperKey: "P", key: "p", finger: "RP", color: "#ff5722"},
      {upperKey: "{", key: "[", finger: "RP", color: "#ff5722"},
      {upperKey: "}", key: "]", finger: "RP", color: "#ff5722"}

    ],
    [
      {upperKey: "A", key: "a", finger: "LP", color: "#e91e63"},
      {upperKey: "S", key: "s", finger: "LR", color: "#673ab7"},
      {upperKey: "D", key: "d", finger: "LM", color: "#2196f3"},
      {upperKey: "F", key: "f", finger: "LI", color: "#00bcd4"},
      {upperKey: "G", key: "g", finger: "LI", color: "#00bcd4"},
      {upperKey: "H", key: "h", finger: "RI", color: "#ff5722"},
      {upperKey: "J", key: "j", finger: "RI", color: "#ff5722"},
      {upperKey: "K", key: "k", finger: "RM", color: "#cddc39"},
      {upperKey: "L", key: "l", finger: "RR", color: "#ffc107"},
      {upperKey: ":", key: ";", finger: "RP", color: "#ff5722"},
      {upperKey: '"', key: "'", finger: "RP", color: "#ff5722"},
    ],
    [
      {upperKey: "Z", key: "z", finger: "LP", color: "#e91e63"},
      {upperKey: "X", key: "x", finger: "LR", color: "#673ab7"},
      {upperKey: "C", key: "c", finger: "LM", color: "#2196f3"},
      {upperKey: "V", key: "v", finger: "LI", color: "#00bcd4"},
      {upperKey: "B", key: "b", finger: "LI", color: "#00bcd4"},
      {upperKey: "N", key: "n", finger: "RI", color: "#ff5722"},
      {upperKey: "M", key: "m", finger: "RI", color: "#ff5722"},
      {upperKey: "<", key: ",", finger: "RM", color: "#cddc39"},
      {upperKey: ">", key: ".", finger: "RR", color: "#ffc107"},
      {upperKey: '?', key: "/", finger: "RP", color: "#ff5722"},
    ],
    [
      {upperKey: " ", key: " ", finger: "T", color: "#009688"}
    ],
  ]

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
      <Box m={3}>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={1}
        >
          {
            rows.map(row => {
              return (
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={1}
                >
                  {row.map(item => {
                    return (
                      <Grid item key={item.key}>
                        <Paper className={item.key === " " ? classes.spacebar : classes.paper} style={{backgroundColor: props.selectedKey === item.key || props.selectedKey === item.upperKey ? item.color : "", color: props.selectedKey === item.key || props.selectedKey === item.upperKey ? "white" : ""}}>
                          <Typography variant="caption">
                            {props.selectedKey === item.upperKey ? item.upperKey : item.key}
                          </Typography>
                        </Paper>
                      </Grid>
                    )
                  })}
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Box>
  );
}
