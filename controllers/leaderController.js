const { selectLeadersFromDb } = require("../model/leaderOrm");

module.exports = {
  getLeaderboard: async (req, res) => {
    try {
      const leaderboard = await selectLeadersFromDb(10);
      return res.json(leaderboard);
    } catch (e) {
      res.status(401).json(e);
    }
  },
};
