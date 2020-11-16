import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { accentColor } from "../../common/components";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import {getLeaders} from "../../../utils";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 577,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
});

const columns = [
  { field: "highScore", headerName: "High Score", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  {
    field: "wordsPerMin",
    headerName: "Words Per Minute",
    width: 180,
  },
  {
    field: "accuracy",
    headerName: "Accuracy",
    width: 120,
  },
];

export const Leaderboard = () => {
  const { token } = useSelector((state) => state.viewer);
  const classes = useStyles();
  const history = useHistory();

  const handleDashboardClick = () => {
    history.push("/");
  };
  const [leaders, setLeaders] = useState();

  useEffect(() => {
    getLeaders().then(result =>{
      setLeaders(result.data)
    } )
  }, []);

  return leaders ? (
    <div className={classes.root}>
      <Box m={1}>
        <Typography variant="overline" component="h5">
          Top 10
        </Typography>
        <Typography variant="h4" component="h2">
          Leaderboard
        </Typography>
      </Box>
      <Box m={1} style={{height: 593, backgroundColor: "rgba(3, 169, 244, 0.1)"}}>
        <DataGrid disableSelectionOnClick={true} hideFooter={true} rows={leaders} columns={columns} pageSize={10} />
      </Box>
      <Box m={2}>
        <Button
          variant="outlined"
          style={{
            color: accentColor,
            borderRadius: 25,
            borderColor: accentColor,
          }}
          onClick={handleDashboardClick}
        >
          {token ? "Return to Dashboard" : "Return to Home"}
        </Button>
      </Box>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
