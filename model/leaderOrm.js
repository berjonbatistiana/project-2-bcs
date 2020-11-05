const { selectTopLeaders } = require("./leaderQueries");
const connection = require("../config/connection");

const selectLeadersFromDb = async (top) => {
  return await connection.query(selectTopLeaders, top);
};

module.exports = {
  selectLeadersFromDb,
};
