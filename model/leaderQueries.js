// sql queries

const selectTopLeaders = `
    SELECT wpm, username 
    FROM scores 
    INNER JOIN users 
    ON scores.user_id = users.id
    ORDER BY wpm DESC
    LIMIT ?`
// get top ? scores from score table and join with user

module.exports = {
    selectTopLeaders
}