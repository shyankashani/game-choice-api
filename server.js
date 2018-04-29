import { gameIds } from './db/data.js';
import pg from 'pg';
import axios from 'axios';
import parse from 'xml2js-es6-promise';
import _ from 'lodash';
import Promise from 'bluebird';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const client = new pg.Client({
  connectionString: 'postgres://eakyrenfgrudpz:2bec46785c01929a754a5ed574619d5746b4b195ec26b7ea4b06215f64f0b2eb@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d44d7utch7fj0m',
  ssl: true,
});

client.connect();

app.set('port', (process.env.PORT || 3000))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  console.log('gameIds.length', gameIds.length);
  res.sendFile(__dirname + '/index.html');
})

app.get('/games', function(req, res, next) {
  client.query(`SELECT
    games.id,
    games.name,
    inventory.location,
    inventory.color_id,
    inventory.category_id
    FROM games, inventory
    WHERE to_tsvector(games.name) @@ to_tsquery('${req.query.name}')
    AND games.id = inventory.game_id`
  )
  .then(function(result) {
    const resultsArray = result.rows.map(row => {
      return {
        gameId: row.id,
        name: row.name,
        location: row.location,
        colorId: row.color_id,
        categoryId: row.category_id
      }
    });

    res.send(resultsArray);
  })
});

app.get('/colors', function(req, res, next) {
  client.query(`SELECT * FROM colors`)
  .then(function(result) {
    const resultsArray = result.rows.map(row => {
      return {
        colorId: row.id,
        name: row.name,
        hex: row.hex
      }
    });

    res.send(resultsArray);
  })
});

app.get('/categories', function(req, res, next) {
  client.query(`SELECT * FROM categories`)
  .then(function(result) {
    const resultsArray = result.rows.map(row => {
      return {
        categoryId: row.id,
        name: row.name
      }
    });

    res.send(resultsArray);
  });
})

app.post('/inventory', function(req, res, next) {
  const location = req.query.location === 'null' ? 'DEFAULT' : `'${req.query.location}'`;
  const colorId = req.query.colorId === 'null' ? 'DEFAULT' : `'${req.query.colorId}'`;
  const categoryId = req.query.categoryId === 'null' ? 'DEFAULT' : `'${req.query.categoryId}'`;
  client.query(`UPDATE inventory SET
    location = ${location},
    color_id = ${colorId},
    category_id = ${categoryId}
    WHERE
    id = ${req.query.inventoryId} AND
    game_id = ${req.query.gameId}
  `)
  .then(function(result) {
    res.send(result);
  })
});

app.get('/inventory', function(req, res, next) {
  client.query(`SELECT * FROM inventory WHERE inventory.game_id = '${req.query.gameId}'`)
  .then(function(result) {
    const resultsObject = {
      inventoryId: result.rows[0].id,
      gameId: result.rows[0].game_id,
      location: result.rows[0].location,
      colorId: result.rows[0].color_id,
      categoryId: result.rows[0].category_id
    }

    res.send(resultsObject);
  })
});

http.listen(app.get('port'), function() {
  console.log(`Example app listening on port ${app.get('port')}`)
});

// io.on('connection', function(socket){
//   socket.on('go', function(){
//     Promise.mapSeries(
//       gameIds,
//       function(gameId) {
//         return Promise.delay(4000)
//           .then(function() {
//             axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ gameId.toString() + '&type=boardgame&stats=1')
//             .then(parseResult)
//             .then(prepareResult)
//             .then((result) => {
//               io.emit('acquired', result.values[1]);
//               return Promise.resolve(result);
//             })
//             .then(writeResult)
//             .then((result) => {
//               console.log(result);
//               io.emit('written', result.rows[0].name);
//               return Promise.resolve(result);
//             })
//         })
//       }
//     );
//   });
// });

function parseResult(result) {
  return parse(result.data);
}

function prepareResult(result) {

  let realResult = result.items.item[0];

  let valuesObj = {
    bgg_id: Number(realResult.$.id),
    name: realResult.name[0].$.value,
    description: realResult.description[0],
    year_published: Number(realResult.yearpublished[0].$.value),
    image: realResult.image[0],
    thumbnail: realResult.thumbnail[0],
    min_players: Number(realResult.minplayers[0].$.value),
    max_players: Number(realResult.maxplayers[0].$.value),
    playing_time: Number(realResult.playingtime[0].$.value),
    min_play_time: Number(realResult.minplaytime[0].$.value),
    max_play_time: Number(realResult.maxplaytime[0].$.value),
    min_age: Number(realResult.minage[0].$.value),
    bgg_average_rating: Number(realResult.statistics[0].ratings[0].average[0].$.value),
    bgg_average_weight: Number(realResult.statistics[0].ratings[0].averageweight[0].$.value)
  }

  let preparedResult = {
    text: 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING name',
    values: [valuesObj.bgg_id, valuesObj.name, valuesObj.description, valuesObj.year_published, valuesObj.min_players, valuesObj.max_players, valuesObj.playing_time, valuesObj.min_play_time, valuesObj.max_play_time, valuesObj.min_age, valuesObj.thumbnail, valuesObj.image, valuesObj.bgg_average_weight, valuesObj.bgg_average_rating]
  };

  return Promise.resolve(preparedResult);
}

function writeResult(result) {
  return client.query(result.text, result.values);
}

function logResult(result) {
  io.emit('went')
}
function catchError(error) {
  io.emit('went')
}
