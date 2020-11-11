import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import HistoryIcon from '@material-ui/icons/History';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CenterFocusStrongOutlinedIcon from '@material-ui/icons/CenterFocusStrongOutlined';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';

import { ChatContainer, Footer, accentColor, secondaryColor } from "../../common/components";
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: accentColor
  },
  contained: {
    color: "white",
    backgroundColor: accentColor,
    borderRadius: 25,
    '&:hover': {
      backgroundColor: "#0276aa",
    }
  },
  outlined: {
    color: accentColor,
    borderRadius: 25,
    borderColor: accentColor,
  }
}));

export const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        item
        direction="row"
        style={{ minHeight: "94vh" }}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid container justify="center" item xs={10} md={6} lg={4}>
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
                className={classes.contained}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={6} lg={4}>
          <Box m={3}>
            <ChatContainer />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "40vh", backgroundColor: accentColor}}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} md={8}>
          <Box m={3} style={{ color: "white" }}>
           <Typography component="h3" variant="button" >
              What is Hype Type?
            </Typography>
            <Typography component="h4" variant="h6">
              Hype Type is the fastest way to test and increase your typing speed.
            </Typography>
            <Typography component="p" variant="body1">
              <ul>
                <li>Test your typing speed.</li>
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
        style={{ minHeight: "30vh", backgroundColor: secondaryColor }}
        justify="center"
        alignItems="center"
      >
        <Grid item container xs={10} md={8} style={{ textAlign: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography component="h4" variant="h5">
              How do I use Hype Type?
            </Typography>
            <Box m={2} >
              <Typography component="p" variant="body2">
                Test your typing speed with our typing challenge.
              </Typography>
            </Box>
            <Button
              to="challenge"
              component={Link}
              variant="outlined"
              className={classes.outlined}
            >
              Typing Challenge
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h4" variant="h5">
              Do I need an account?
            </Typography>
            <Box m={2}>
              <Typography component="p" variant="body2">
                Create an account to track your progress!
              </Typography>
            </Box>
            <Button
              to="signup"
              component={Link}
              variant="outlined"
              className={classes.outlined}
            >
              Create an Account
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "70vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item container xs={10} md={8}>
          <Grid item xs={12}>
            <Box mt={3} style={{ textAlign: "center" }}>
              <Typography component="h3" variant="button">
               The Benefits of Typing Faster
              </Typography>
              <Typography component="h4" variant="h5">
                Hype Type can help you...
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <HistoryIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
                <b>Save time.</b> Learning to type faster will save you time in your daily life at work, school, and anywhere you need to type.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <TrendingUpIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
               <b>Be more productive.</b> Everyone is looking for ways to be more productive. Typing faster is a simple way to get more done.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <CenterFocusStrongOutlinedIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
                <b>Improve your focus.</b> Rather than focusing on where your fingers should go, you can focus on the important things.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <TrackChangesIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
                <b>Have better accuracy.</b> When you practice typing, not only will you type faster, but you will also type with fewer errors.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <PeopleIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
                <b>Find new opportunities.</b> If you are searching for new opportunities, typing fast is a desirable skill to employers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{ textAlign: "center" }}>
              <KeyboardIcon className={classes.icon}/>
              <Typography component="p" variant="body1">
                <b>And it's so easy to use!</b> To type with Hype Type, all you need is a keyboard and a web browser.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

//Another benefit of learning to type faster is that you will not have to look at the keyboard and think about where your fingers are going. Once you are typing fast, you will be able to look directly at the screen, and your fingers will type without you even thinking about the movements.
