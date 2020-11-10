const selectTopLeaders = `
    SELECT id, highScore, username, wordsPerMin, accuracy 
    FROM scores
    ORDER BY highScore DESC
    LIMIT ?`;

const selectUserScoresQuery =
  "SELECT id, username, highScore, wordsPerMin, accuracy FROM scores WHERE username = ? ORDER BY id DESC;";

const insertScoreQuery =
  "INSERT INTO scores (username, highScore, wordsPerMin, accuracy) VALUES (?, ?, ?, ?);";

module.exports = {
  selectTopLeaders,
  selectUserScoresQuery,
  insertScoreQuery,
};
