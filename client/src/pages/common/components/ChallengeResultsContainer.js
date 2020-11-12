import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { ChallengeResultsLineGraph } from "../components";
import { Link } from "react-router-dom";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";



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
                <ChallengeResultsLineGraph 
                  // {props.wpm}  
                />
              </Box>
            </Grid>
          </Grid>
          <div
            className={resultClasses.root}
            justify="center"
            direction="column"
          >
            <Grid container spacing={3}>
              <Grid item xs>
                <Typography className={resultClasses.paper}>
                  test type
                </Typography>
                <Typography className={resultClasses.paper}>
                  {props.wordOptions.seconds30 === true ? '30s':'60s'}
                </Typography>
                <Typography className={resultClasses.paper}>
                  special: {props.wordOptions.punctuation === true ? 'punctuation':''}
                  {props.wordOptions.quotes === true ? 'quote':''}
                  {props.wordOptions.quotes === false && props.wordOptions.punctuation === false ? 'none':''}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography className={resultClasses.paper}>
                  total characters
                </Typography>
                <Typography className={resultClasses.paper}>{props.characters}</Typography>
              </Grid>
              <Grid item xs>
                <Typography className={resultClasses.paper}>Score</Typography>
                <Typography className={resultClasses.paper}>{props.score}</Typography>
              </Grid>
            </Grid>
          <div style={{textAlign: 'center', marginTop: 20}}>
          <ToggleButtonGroup >
            <ToggleButton
                to="signin"
                component={Link}
                variant="outlined"
              >sign in to save score</ToggleButton>
              <ToggleButton
                // onMouseDown={props.challengeFinished = true}
                
                // to="challenge"
                // component={Link}
                variant="outlined"
              >test again</ToggleButton>
              <ToggleButton
                to="leaderboard"
                component={Link}
                variant="outlined"
              >add to leaderboard as guest</ToggleButton>
            </ToggleButtonGroup>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
