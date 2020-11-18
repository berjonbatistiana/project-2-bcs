import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {accentColor, secondaryColor} from "../accentColor";
import withStyles from "@material-ui/core/styles/withStyles";

function LinearProgressWithLabel(props) {

  const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: secondaryColor
    },
    barColorPrimary: {
      backgroundColor: accentColor
    }
  })(LinearProgress);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <StyledLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={props.progress}/>
    </div>
  );
}
