import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Donut, LineGraph, PersonalHighScores } from "../../common";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export const Dashboard = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useState();

  const user = localStorage.getItem("user");

  useEffect(() => {
      axios.get(`/api/scores/${user}`).then(res => {
        setUserData(res.data)
      })
      setCurrentUser(user)
  }, []);

  console.log(userData)

  return (userData && (user === currentUser)) ? (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item container justify="center" xs={12} lg={4}>
          <Grid item xs={8} sm={6} lg={12}>
            <Box m={3}>
              <Typography component="h3" variant="h5">
                Accuracy
              </Typography>
              <Donut userData={userData} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <Box m={3}>
              <Typography component="h3" variant="h5">
                Recent Scores
              </Typography>
              <PersonalHighScores userData={userData} />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box m={3}>
            <Typography component="h3" variant="h5">
              Progress
            </Typography>
            <LineGraph userData={userData} />
          </Box>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>Loading...</div>
  )
};
