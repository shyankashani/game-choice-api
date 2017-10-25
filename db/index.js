const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gamechoice'
})

exports.fetchGame = (players, age, duration, curve) => {
  console.log(players, age, duration, curve)
  return new Promise ((resolve, reject) => {
    connection.query(`SELECT * FROM games WHERE min_players <= ${players} <= max_players AND min_age = ${age} AND playing_time = ${duration} AND learning_curve = ${curve}`, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        resolve(results);
      }
    });
  })
}
