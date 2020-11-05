import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

// will need to pull form our DB of saved scores. Will need to showcase array of objects
// sorted by scores. id's are required for materialUi's DataGrid component
const rows = [
  { id: 1, highScore: 35, username: 'Snow', wordsPerMin: 100, accuracy: '80%' },
  { id: 2, highScore: 42, username: 'Lannister', wordsPerMin: 120, accuracy: '80%' },
  { id: 3, highScore: 45, username: 'Lannister J', wordsPerMin: 80, accuracy: '80%' },
  { id: 4, highScore: 16, username: 'Stark', wordsPerMin: 123, accuracy: '80%' },
  { id: 5, highScore: 33, username: 'Targaryen', wordsPerMin: 55, accuracy: '80%' },
  { id: 6, highScore: 15, username: 'Melisandre', wordsPerMin: 124, accuracy: '80%' },
  { id: 7, highScore: 44, username: 'Clifford', wordsPerMin: 100, accuracy: '80%' },
  { id: 8, highScore: 36, username: 'Frances', wordsPerMin: 99, accuracy: '80%' },
  { id: 9, highScore: 65, username: 'Roxie', wordsPerMin: 151, accuracy: '80%' },
  { id: 11, highScore: 35, username: 'Snow', wordsPerMin: 100, accuracy: '80%' },
  { id: 12, highScore: 42, username: 'Lannister', wordsPerMin: 120, accuracy: '80%' },
  { id: 13, highScore: 45, username: 'Lannister J', wordsPerMin: 80, accuracy: '80%' },
  { id: 14, highScore: 16, username: 'Stark', wordsPerMin: 123, accuracy: '80%' },
  { id: 15, highScore: 33, username: 'Targaryen', wordsPerMin: 55, accuracy: '80%' },
  { id: 16, highScore: 15, username: 'Melisandre', wordsPerMin: 124, accuracy: '80%' },
  { id: 17, highScore: 44, username: 'Clifford', wordsPerMin: 100, accuracy: '80%' },
  { id: 18, highScore: 36, username: 'Frances', wordsPerMin: 99, accuracy: '80%' },
  { id: 19, highScore: 65, username: 'Roxie', wordsPerMin: 151, accuracy: '80%' },
  { id: 21, highScore: 35, username: 'Snow', wordsPerMin: 100, accuracy: '80%' },
  { id: 22, highScore: 42, username: 'Lannister', wordsPerMin: 120, accuracy: '80%' },
  { id: 23, highScore: 45, username: 'Lannister J', wordsPerMin: 80, accuracy: '80%' },
  { id: 24, highScore: 16, username: 'Stark', wordsPerMin: 123, accuracy: '80%' },
  { id: 25, highScore: 33, username: 'Targaryen', wordsPerMin: 55, accuracy: '80%' },
  { id: 26, highScore: 15, username: 'Melisandre', wordsPerMin: 124, accuracy: '80%' },
  { id: 27, highScore: 44, username: 'Clifford', wordsPerMin: 100, accuracy: '80%' },
  { id: 28, highScore: 36, username: 'Frances', wordsPerMin: 99, accuracy: '80%' },
  { id: 29, highScore: 65, username: 'Roxie', wordsPerMin: 151, accuracy: '80%' },
];

export function Leaderboard() {
  const classes = useStyles();

  return (
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
            <DataGrid rows={rows} columns={columns} pageSize={15}/>
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
  );
}


