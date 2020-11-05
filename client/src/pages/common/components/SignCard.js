import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    maxWidth: "400px",
  },
});

export const SignCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid item container spacing={10}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1">
              <Box fontWeight="fontWeightBold" mt={12} mb={2}>
                {props.title}
              </Box>
            </Typography>
            <Box ml={6} mr={6} mb={12}>
              {props.content}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
