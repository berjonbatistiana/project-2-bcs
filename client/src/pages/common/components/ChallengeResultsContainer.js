import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import {accentColor} from "../components";
import { Link } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const gridResultStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
}));

export function TransitionsModal(props) {
  const classes = useStyles();
  const resultClasses = gridResultStyles();
  const body = (
    <div className={resultClasses.paper} style={{ textAlign: "center" }}>
      <Box m={6} >
        <Typography variant="h2">
          Results
        </Typography>
        <Grid container>
          <Grid
            container item xs={12} sm={2} md={3} lg={3}
            justify="center"
            direction="column"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <Grid item>
              <Box mt={6} mb={3}>
                <Typography>WPM</Typography>
                <Typography variant="h2">{props.wpm} </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box mt={3} mb={6}>
                <Typography>Accuracy</Typography>
                <Typography variant="h2">{props.accuracy} %</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <Box m={3}>
              {props.lineGraph}
            </Box>
          </Grid>
        </Grid>
        <Grid spacing={2} container className={resultClasses.root}>
          <Grid item xs={3}>
            <Typography className={resultClasses.paper}>Test Type:</Typography>
            <Typography className={resultClasses.paper}>
              {props.wordOptions.punctuation === true ? 'Punctuation':''}
              {props.wordOptions.quotes === true ? 'Quote':''}
              {props.wordOptions.quotes === false && props.wordOptions.punctuation === false ? 'Words':''}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={resultClasses.paper}>Timed:</Typography>
            <Typography className={resultClasses.paper}>
              {props.wordOptions.seconds30 === true ? '30s':''}
              {props.wordOptions.seconds60 === true ? '60s':''}
              {props.wordOptions.seconds30 === false && props.wordOptions.seconds60 === false ? 'N/A':''}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={resultClasses.paper}>Total Characters:</Typography>
            <Typography className={resultClasses.paper}>{props.characters}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={resultClasses.paper}>Score:</Typography>
            <Typography className={resultClasses.paper}>{props.score}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              component={Link}
              to="/"
              style={{
                color: accentColor,
                borderRadius: 25,
                borderColor: accentColor,
              }}
            >
              go to dashboard
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onMouseDown={props.handleTestAgain}
              variant="outlined"
              style={{
                color: accentColor,
                borderRadius: 25,
                borderColor: accentColor,
              }}
            >
              test again
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              component={Link}
              to="/leaderboard"
              style={{
                color: accentColor,
                borderRadius: 25,
                borderColor: accentColor,
              }}
            >
              go to leaderboard
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        {body}
      </Fade>
    </Modal>
  );
}
