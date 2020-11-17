import React from 'react';
import PropTypes from 'prop-types';
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

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  console.log(props.progress);
  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={props.progress}/>
    </div>
  );
}
