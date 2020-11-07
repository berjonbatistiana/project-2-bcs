const { selectTopLeaders, insertScoreQuery } = require("./scoreQueries");
const connection = require("../config/connection");

const selectLeadersFromDb = async (top) => {
  const [rows] = await connection.query(selectTopLeaders, top);
  return rows;
};

const insertIntoScoreDb = async (
  username,
  highScore,
  wordsPerMin,
  accuracy
) => {
  const [rows] = await connection.query(insertScoreQuery, [
    username,
    highScore,
    wordsPerMin,
    accuracy,
  ]);
  return rows[0];
};

module.exports = {
  selectLeadersFromDb,
  insertIntoScoreDb,
};
