import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SignUpCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h1" >
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        {props.content}
      </CardActions>
    </Card>
  );
}
