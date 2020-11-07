import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { ChatContainer, Footer } from "../../common/components";

export const About = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        style={{ minHeight: "94vh" }}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid container item justify="center" item xs={10} md={6}>
          <Grid item>
            <Box m={3}>
              <Typography component="h2" variant="h2">
                What's the hype all about?
              </Typography>
            </Box>
            <Box m={3}>
              <Typography component="h3" variant="h5">
                Learn to type faster with Hype Type today.
              </Typography>
            </Box>
            <Box m={3}>
              <Button
                to="signup"
                component={Link}
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "#0099ff",
                  borderRadius: 25,
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={5} lg={4}>
          <Box m={3}>
            <ChatContainer />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "50vh", backgroundColor: "#0099ff" }}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item xs={6}>
          <Box m={3} style={{ color: "white" }}>
            {/* <Typography component="h3" variant="button" >
              What is Hype Type?
            </Typography> */}
            <Typography component="h4" variant="h6">
              Hype Type - The Fastest Way To Test & Increase Your Typing Speed
            </Typography>
            <Typography component="p" variant="body1">
              <ul>
                <li>Test your typing speed.</li>
                <li>1000+ Practice lessons to get better.</li>
                <li>Track your progress.</li>
                <li>Compare with friends.</li>
              </ul>
              Hype Type has helped hundreds of individuals improve their typing
              speeds by over 20 words per minute on average! <br />
              (Add screenshot on either side)
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "30vh", backgroundColor: "#f5f5f5" }}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item xs={6}>
          <Box m={1}>
            <Typography component="h4" variant="h5">
              How do I use Hype Type?
            </Typography>
            <Typography component="p" variant="body2">
              <ul>
                <li>
                  Test your typing speed with our typing
                  challenges.
                </li>
                <li>
                  Create an account to save your score, challenge friends and
                  track progress!
                </li>
              </ul>
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs>
              <Button
                to="challenge"
                component={Link}
                variant="outlined"
                style={{
                  color: "#0099ff",
                  borderRadius: 25,
                  borderColor: "#0099ff",
                }}
              >
                Typing Challenge
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                to="signup"
                component={Link}
                variant="outlined"
                style={{
                  color: "#0099ff",
                  borderRadius: 25,
                  borderColor: "#0099ff",
                }}
              >
                Create an Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "40vh" }}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h4" variant="h5">
                Why Speed Matters!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h5" variant="h5">
                Save Time
              </Typography>
              <Typography component="p" variant="body1">
                Typing is something most of us will have to do a lot of in our jobs. Whether you work in an office or not, you will probably end up having to type on a computer keyboard on a weekly or even daily basis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h5" variant="h5">
                Be More Productive
              </Typography>
              <Typography component="p" variant="body1">
               Everyone is looking for ways to be more productive both in the workplace and at home, and typing faster is a simple way to get more done.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h5" variant="h5">
                Improve Your Focus
              </Typography>
              <Typography component="p" variant="body1">
                Another benefit of learning to type faster is that you will not have to look at the keyboard and think about where your fingers are going. Once you are typing fast, you will be able to look directly at the screen, and your fingers will type without you even thinking about the movements.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h5" variant="h5">
                Better Accuracy
              </Typography>
              <Typography component="p" variant="body1">
                Learning to touch type is not just about learning how to type faster: It's also about learning how to type with greater accuracy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={3} style={{ textAlign: "center" }}>
              <Typography component="h5" variant="h5">
                Find More Opportunities
              </Typography>
              <Typography component="p" variant="body1">
                Touch-typing is such a useful skill that boosts productivity in the workplace, it can help you to find more and better opportunities when it comes to getting a job.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};
