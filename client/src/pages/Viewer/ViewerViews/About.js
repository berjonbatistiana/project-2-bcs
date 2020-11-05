import React from "react";
import { BlinkingHeading} from "../../common/components";
import { Grid } from "@material-ui/core"

export const About = () => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <BlinkingHeading/>
      </Grid>
    </Grid>
  );
};
