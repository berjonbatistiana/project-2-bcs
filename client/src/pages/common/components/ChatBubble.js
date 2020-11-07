import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  theirInput: {
    color: "black",
    fontSize: 20,
  },
  yourInput: {
    color: "white",
    fontSize: 20,
  }
}));

export const TheirBubble = (props) => {
  const classes = useStyles();
  return (
      <TextField
        InputProps={{ disableUnderline: true , classes: { disabled: classes.theirInput }}}
        value={props.message}
        disabled
        multiline
        rows={props.rows}
        style={{ backgroundColor: '#f5f5f5', borderRadius: 25, padding: '15px 20px' }}
      />
  );
}
export const YourBubble = (props) => {
  const classes = useStyles();
  return (
    <TextField
      InputProps={{ disableUnderline: true , classes: { disabled: classes.yourInput }}}
      value={props.message}
      disabled
      multiline
      rows={props.rows}
      style={{ backgroundColor: '#0099ff', borderRadius: 25, padding: '15px 20px'}}
    />
  );
}
