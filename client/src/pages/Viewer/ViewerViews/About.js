import React from "react";
import { ChatContainer } from "../../common/components";
import { Typography, Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Grid
      container
      direction="row"
      style={{ minHeight: "80vh" }}
      xs={12}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} md={6} lg={8}>
        <Typography component="h2" variant="h2" >
          What's the hype all about?
        </Typography>
        <Typography component="h3" variant="h5" >
          Learn to type better with Hype Type today.
        </Typography>
        <Button to="signup" component={Link} variant="contained" style={{ color: 'white', backgroundColor: '#0099ff', borderRadius: 25}}>
          Get Started
        </Button>
      </Grid>
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <ChatContainer/>
      </Grid>
    </Grid>
  );
};
