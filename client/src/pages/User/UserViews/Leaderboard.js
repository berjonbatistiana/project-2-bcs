import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Donut, LineGraph } from "../../common";

export const Leaderboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Donut/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Donut/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LineGraph/>
        </Grid>
      </Grid>
    </div>
  );
}
