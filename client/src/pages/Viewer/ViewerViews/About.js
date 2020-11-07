import React from "react";
import { Typography, Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { ChatContainer, Footer } from "../../common/components";


export const About = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        style={{ minHeight: "94vh"}}
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
              <Typography component="h3" variant="h5" >
                Learn to type better with Hype Type today.
              </Typography>
            </Box>
            <Box m={3}>
              <Button to="signup" component={Link} variant="contained" style={{ color: 'white', backgroundColor: '#0099ff', borderRadius: 25}}>
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={5} lg={4}>
          <Box m={3}>
            <ChatContainer/>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "50vh", backgroundColor: '#0099ff'}}
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item xs={6}>
          <Box m={3} style={{color: "white"}}>
            <Typography component="h3" variant="button" >
              What is Hype Type?
            </Typography>
            <Typography component="h4" variant="h6" >
              Heading here, maybe add photo or a screenshot of the app to the left
            </Typography>
            <Typography component="p" variant="body1" >
              Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum cupiditate ex iste iure nulla omnis quos tempora vitae voluptate.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ minHeight: "30vh", backgroundColor: '#f5f5f5'}}
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum cupiditate ex iste iure nulla omnis quos tempora vitae voluptate.
            </Typography>
          </Box>
          <Box m={1}>
            <Button to="signup" component={Link} variant="outlined" style={{ color: "#0099ff", borderRadius: 25, borderColor: "#0099ff"}}>
              Get Started Now
            </Button>
          </Box>
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
            <Box m={3} style={{textAlign: "center"}}>
              <Typography component="h3" variant="button" >
                Why Hype Type?
              </Typography>
              <Typography component="h4" variant="h5" >
                Reasons to learn how to type now!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{textAlign: "center"}}>
              <Typography component="p" variant="body1" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et fuga necessitatibus, perferendis praesentium quibusdam!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{textAlign: "center"}}>
              <Typography component="p" variant="body1" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et fuga necessitatibus, perferendis praesentium quibusdam!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box m={3} style={{textAlign: "center"}}>
              <Typography component="p" variant="body1" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et fuga necessitatibus, perferendis praesentium quibusdam!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </React.Fragment>
  );
};
