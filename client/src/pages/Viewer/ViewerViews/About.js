import React from 'react';
import { AnimatedHypetype } from "../../common/components"
import { Grid } from "@material-ui/core";

export const About = () => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ height: "90vh" }}
    >
      <Grid item>
        <AnimatedHypetype />
      </Grid>
    </Grid>
  )
}
