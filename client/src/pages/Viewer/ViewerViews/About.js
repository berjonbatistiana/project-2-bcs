import React from 'react';
import { AnimatedHypetype } from "../../common/components"
import { Grid } from "@material-ui/core";

export const About = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "94vh", backgroundColor: "#302E2E" }}
    >
      <Grid item>
        <AnimatedHypetype svgWidth={2} strokeColor="white" transform={{transform: "scale(0.5)"}} />
      </Grid>
    </Grid>
  )
}
