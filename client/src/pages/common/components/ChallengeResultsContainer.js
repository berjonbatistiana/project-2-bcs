import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import {accentColor, ChallengeResultsLineGraph} from "../components";
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
    paddingTop: theme.spacing(2),
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
    <div className={resultClasses.paper}>
      <Box m={12} >
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
            <Button
              onMouseDown={props.handleTestAgain}
              component={Link}
              variant="outlined"
              style={{
                color: accentColor,
                borderRadius: 25,
                borderColor: accentColor,
              }}
            >
              test again
            </Button>
          </div>
        </div>
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
