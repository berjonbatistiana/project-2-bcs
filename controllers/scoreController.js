const { selectLeadersFromDb, insertIntoScoreDb } = require("../model/scoreOrm");

module.exports = {
  getLeaderboard: async (req, res) => {
    try {
      const leaderboard = await selectLeadersFromDb(10);
      return res.json(leaderboard);
    } catch (e) {
      res.status(400).json(e);
    }
  },
  postScore: async (req, res) => {
    try {
      const { highScore, username, wordsPerMin, accuracy } = req.body;
      const score = await insertIntoScoreDb(
        username,
        highScore,
        wordsPerMin,
        accuracy
      );
      return res.json(score);
    } catch (e) {
      res.status(400).json(e);
    }
  },
};
