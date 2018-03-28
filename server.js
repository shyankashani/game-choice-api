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

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function() {
  console.log(`Example app listening on port 3000`)
});

io.on('connection', function(socket){
  socket.on('go', function(){
    Promise.mapSeries(
      gameIds,
      function(gameId) {
        return Promise.delay(4000)
          .then(function() {
            axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ gameId.toString() + '&type=boardgame&stats=1')
            .then(parseResult)
            .then(prepareResult)
            .then((result) => {
              io.emit('acquired', result.values[1]);
              return Promise.resolve(result);
            })
            .then(writeResult)
            .then((result) => {
              io.emit('written', result);
              return Promise.resolve(result);
            })
        })
      }
    );
  });
});

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
    text: 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
    values: [valuesObj.bgg_id, valuesObj.name, valuesObj.description, valuesObj.year_published, valuesObj.min_players, valuesObj.max_players, valuesObj.playing_time, valuesObj.min_play_time, valuesObj.max_play_time, valuesObj.min_age, valuesObj.thumbnail, valuesObj.image, valuesObj.bgg_average_weight, valuesObj.bgg_average_rating]
  };

  return Promise.resolve(preparedResult);
}

function writeResult(result) {
  return client.query(result.text, result.values);
}
// .then(parseResult)
// .then(prepareResult)
// .then(writeResult)
// .then(logResult)
// .catch(catchError)}


function logResult(result) {
  io.emit('went')
}
function catchError(error) {
  io.emit('went')
}
