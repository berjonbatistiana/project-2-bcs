const selectTopLeaders = `
    SELECT highScore, username, wordsPerMin, accuracy 
    FROM scores
    ORDER BY highScore DESC
    LIMIT ?`;

const selectUserScoresQuery =
  "SELECT id, highScore, wordsPerMin, accuracy FROM scores WHERE username = ? ORDER BY id DESC;";

const insertScoreQuery =
  "INSERT INTO scores (username, highScore, wordsPerMin, accuracy) VALUES (?, ?, ?, ?);";

module.exports = {
  selectTopLeaders,
  selectUserScoresQuery,
  insertScoreQuery,
};
