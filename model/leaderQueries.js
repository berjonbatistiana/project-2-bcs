const selectTopLeaders = `
    SELECT wpm, username 
    FROM scores 
    INNER JOIN users 
    ON scores.user_id = users.id
    ORDER BY wpm DESC
    LIMIT ?`;

module.exports = {
  selectTopLeaders,
};
