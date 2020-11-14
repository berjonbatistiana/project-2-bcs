import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Donut, LineGraph, PersonalHighScores } from "../../common";

const theme = createMuiTheme();

const useStyles = makeStyles({
  paper: {
    margin: theme.spacing(1),
    border: "1px solid #e0e0e0",
    borderRadius: 25,
  },
});

export const Dashboard = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useState();

  const user = localStorage.getItem("user");

  useEffect(() => {
    axios.get(`/api/scores/${user}`).then((res) => {
      setUserData(res.data);
    });
    setCurrentUser(user);
  }, []);

  return userData && user === currentUser ? (
    <div>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Box>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar>{user[0]}</Avatar>
              </Grid>
              <Grid item>
                <Typography component="h3" variant="h5">
                  Hey, {user}!
                </Typography>
                <Typography component="p" variant="subtitle1">
                  Welcome back, nice to see you again!
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4}>
            <Typography component="h1" variant="h5">
              Your Dashboard
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          justify="center"
          xs={12}
          lg={4}
          alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            md={5}
            lg={12}
            component={Paper}
            elevation={0}
            className={classes.paper}
          >
            <Box p={3}>
              <Typography component="h3" variant="h6">
                Accuracy
              </Typography>
              <Donut userData={userData} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={12}
            component={Paper}
            elevation={0}
            className={classes.paper}
          >
            <Box p={3}>
              <Typography component="h3" variant="h6">
                Recent Scores
              </Typography>
              <PersonalHighScores userData={userData} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={11}
          lg={7}
          component={Paper}
          elevation={0}
          className={classes.paper}
        >
          <Box p={3}>
            <Typography component="h3" variant="h6">
              Progress
            </Typography>
            <LineGraph userData={userData} />
          </Box>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
