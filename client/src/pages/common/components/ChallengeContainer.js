import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AlarmIcon from '@material-ui/icons/Alarm';
import PanToolIcon from '@material-ui/icons/PanTool';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

import { secondaryColor } from "../components";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
  },
  spacebar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 175,
  },
}));

export const ChallengeContainer = (props) => {
  const classes = useStyles();
  let selectedFinger = "";
  const fingers = [
    {digit: "LP", hand: "left", color: "#e91e63"},
    {digit: "LR", hand: "left", color: "#673ab7"},
    {digit: "LM", hand: "left", color: "#2196f3"},
    {digit: "LI", hand: "left", color: "#00bcd4"},
    {digit: "T", hand: "left", color: "#009688"},
    {digit: "RP", hand: "right", color: "#ff5722"},
    {digit: "RR", hand: "right", color: "#ffc107"},
    {digit: "RM", hand: "right", color: "#cddc39"},
    {digit: "RI", hand: "right", color: "#4caf50"},
    {digit: "T", hand: "right", color: "#009688"},
    ]
  const rows = [
    [
      {upperKey: "!", key: "1", finger: "LP", color: "#e91e63"},
      {upperKey: "@", key: "2", finger: "LR", color: "#673ab7"},
      {upperKey: "#", key: "3", finger: "LM", color: "#2196f3"},
      {upperKey: "$", key: "4", finger: "LI", color: "#00bcd4"},
      {upperKey: "%", key: "5", finger: "LI", color: "#00bcd4"},
      {upperKey: "^", key: "6", finger: "RI", color: "#4caf50"},
      {upperKey: "&", key: "7", finger: "RI", color: "#4caf50"},
      {upperKey: "*", key: "8", finger: "RM", color: "#cddc39"},
      {upperKey: "(", key: "9", finger: "RR", color: "#ffc107"},
      {upperKey: ")", key: "0", finger: "RP", color: "#ff5722"},
      {upperKey: "_", key: "-", finger: "RP", color: "#ff5722"},
      {upperKey: "+", key: "=", finger: "RP", color: "#ff5722"},
      {upperKey: "⮐", key: "⮐", finger: "RP", color: "#ff5722"},
    ],
    [
      {upperKey: "Q", key: "q", finger: "LP", color: "#e91e63"},
      {upperKey: "W", key: "w", finger: "LR", color: "#673ab7"},
      {upperKey: "E", key: "e", finger: "LM", color: "#2196f3"},
      {upperKey: "R", key: "r", finger: "LI", color: "#00bcd4"},
      {upperKey: "T", key: "t", finger: "LI", color: "#00bcd4"},
      {upperKey: "Y", key: "y", finger: "RI", color: "#4caf50"},
      {upperKey: "U", key: "u", finger: "RI", color: "#4caf50"},
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
      {upperKey: "H", key: "h", finger: "RI", color: "#4caf50"},
      {upperKey: "J", key: "j", finger: "RI", color: "#4caf50"},
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
      {upperKey: "N", key: "n", finger: "RI", color: "#4caf50"},
      {upperKey: "M", key: "m", finger: "RI", color: "#4caf50"},
      {upperKey: "<", key: ",", finger: "RM", color: "#cddc39"},
      {upperKey: ">", key: ".", finger: "RR", color: "#ffc107"},
      {upperKey: '?', key: "/", finger: "RP", color: "#ff5722"},
    ],
    [
      {upperKey: " ", key: " ", finger: "T", color: "#009688"}
    ],
  ]

  return (
    <React.Fragment>
      <Box m={4}>
        <Card>
          <Box m={2}>
            <Typography component="h1" variant="h5">
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
              style={{backgroundColor: secondaryColor, textAlign: "center"}}
            >
              <Grid item>
                <Box mt={4} mb={2}>
                  <TrackChangesIcon/>
                  <Typography>
                    {props.accuracy}%
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2} mb={4}>
                  <DirectionsRunIcon/>
                  <Typography>
                    {props.wpm} WPM
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box mt={2} mb={4}>
                  <AlarmIcon color={props.timeLeft > 0? 'primary': 'disabled'}/>
                  <Typography color={props.timeLeft > 0? 'primary':'textSecondary'}>
                    {props.timeLeft}s
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Box m={2} display="flex" alignItems="center">
            <Box width="100%">
              <Box>
                {props.toggleButton}
              </Box>
            </Box>
            <Box flexShrink={0}>
              <Box>
                {props.restartButton}
              </Box>
            </Box>
          </Box>
        </Card>
        <Box mt={3}>
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
                    key={row}
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    {row.map(item => {
                      if (props.selectedKey === item.key || props.selectedKey === item.upperKey) {
                        selectedFinger = item.finger;
                      }
                      return (
                        <Grid item key={item.key} >
                          <Paper
                            elevation={0}
                            className={item.key === " " ? classes.spacebar : classes.paper}
                            style={{backgroundColor: props.selectedKey === item.key || props.selectedKey === item.upperKey ? item.color : secondaryColor, color: props.selectedKey === item.key || props.selectedKey === item.upperKey ? "white" : ""}}
                          >
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
        <Box m={1}>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            alignItems="center"
          >
            <Grid item style={{width: "420px"}}>
              {
                fingers.map((finger, index) => {
                  if (finger.digit === selectedFinger) {
                    return (
                      <FiberManualRecordIcon key={index} style={{fontSize: 36, float: finger.hand, color: finger.color}}/>
                    )
                  } else {
                    return (
                      <FiberManualRecordOutlinedIcon key={index} style={{fontSize: 36, float: finger.hand, color: finger.color}}/>
                    )
                  }
                })
              }
            </Grid>
            <Grid item>
              <PanToolIcon style={{transform: "scaleX(-1)", fontSize: 200, float: "left", color: secondaryColor}}/>
              <PanToolIcon style={{fontSize: 200, float: "right", color: secondaryColor}}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
