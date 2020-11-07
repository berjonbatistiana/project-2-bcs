import React from 'react';
import { YourBubble, TheirBubble, BlinkingHeading } from "../components";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const ChatContainer = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        <Box display="flex" justifyContent="flex-end">
          <YourBubble message="I can type 120 WPM now!" rows={2} />
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" flexDirection="row">
          <TheirBubble message="How did you get so fast at typing?" rows={2}/>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex">
          <Box flexGrow={1} bgcolor="#f5f5f5" style={{ backgroundColor: '#f5f5f5', borderRadius: 25, padding: '15px 20px'}}>
            <BlinkingHeading/>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

