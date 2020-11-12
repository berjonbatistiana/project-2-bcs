import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const PersonalHighScores = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">High Score</TableCell>
            <TableCell align="right">WPM</TableCell>
            <TableCell align="right">Accuracy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.highScore}</TableCell>
              <TableCell align="right">{row.wordsPerMin}</TableCell>
              <TableCell align="right">{row.accuracy}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
