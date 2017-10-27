const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gamechoice'
})

exports.fetchGame = (players, age, duration, complexity) => {
  return new Promise ((resolve, reject) => {
    connection.query(`SELECT * FROM games WHERE minPlayers <= ${players} AND ${players} <= maxPlayers AND age <= ${age} AND duration = ${duration} AND complexity = ${complexity}`, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        resolve(results);
      }
    });
  })
}
