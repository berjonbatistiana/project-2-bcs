const selectTopLeaders = `
    SELECT highScore, username, wordsPerMin, accuracy 
    FROM scores
    ORDER BY highScore DESC
    LIMIT ?`;

const insertScoreQuery =
  "INSERT INTO scores (username, highScore, wordsPerMin, accuracy) VALUES (?, ?, ?, ?);";

module.exports = {
  selectTopLeaders,
  insertScoreQuery,
};
