import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {accentColor} from "../../common/components";
import {useSelector} from "react-redux";

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
  const {token} = useSelector((state) => state.viewer);
  const classes = useStyles();
  const history = useHistory();

  const handleDashboardClick = () => {
    history.push('/');
  }
  const [leaders, setLeaders] = useState();

  useEffect(() => {
      axios.get('/api/scores/leaders').then(res => {
        setLeaders(res.data)
      })
  }, []);

  return leaders ? (
    <div>
      <div className={classes.root}>
        <Typography
          style={{ textAlign: "center"}}
          variant="h3"
          gutterBottom
        >
          LEADERBOARD
        </Typography>
        <div
          style={{ height: 650, backgroundColor: 'rgba(3, 169, 244, 0.1)', marginTop: 10 }}
        >
          <DataGrid rows={leaders} columns={columns} pageSize={15}/>
        </div>
        <Button
          variant="outlined"
          style={{
            color: accentColor,
            borderRadius: 25,
            borderColor: accentColor,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            marginBottom: 50,
          }}
          onClick={handleDashboardClick}
        >
          {token ? 'Return to Dashboard' : 'Return to About'}
        </Button>
          <br/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}
