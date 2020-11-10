import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 600,
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
  },
});

const columns = [
  { field: 'highScore', headerName: 'High Score', width: 150 },
  { field: 'username', headerName: 'Username', width: 200 },
  {
    field: 'wordsPerMin',
    headerName: 'Words Per Minute',
    width: 150,
  },
  {
    field: 'accuracy',
    headerName: 'Accuracy',
    width: 100,
  },
];

export const Leaderboard = () => {
  const classes = useStyles();
  const [leaders, setLeaders] = useState();
  


  useEffect(() => {
      axios.get('/api/scores/leaders').then(res => {
        console.log(res);
        setLeaders(res.data)
      })
  }, []);

  return leaders ? (
    <>
      <div style={{ backgroundColor: "#f0f2f5" }}>
        <div className={classes.root}>
          <Typography
            style={{ textAlign: "center", paddingTop: 30 }}
            variant="h2"
            gutterBottom
          >
            LEADERBOARD
          </Typography>
          <div
            style={{ height: 900, backgroundColor: "#e9edf5", marginTop: 10 }}
          >
            <DataGrid rows={leaders} columns={columns} pageSize={15}/>
          </div>
          <Button
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
              marginBottom: 50,
            }}
            onClick={() => {
              alert("clicked");
            }}
          >
            Return to Dashboard
          </Button>
            <br/>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  )
}


