import express from 'express';
import data from './db/data.js';
import pg from 'pg';
import axios from 'axios';
import parse from 'xml2js-es6-promise';
import _ from 'lodash';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});

const client = new pg.Client({
  connectionString: 'postgres://eakyrenfgrudpz:2bec46785c01929a754a5ed574619d5746b4b195ec26b7ea4b06215f64f0b2eb@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d44d7utch7fj0m',
  ssl: true,
});
client.connect();

const someGameIds = _.slice(data.gameIds, 0, 20);

app.get('/bgg', (req, res) => {
  Promise.all(someGameIds.map(getGameStats))
  .then((result) => { res.send(result); });
});

const getGameStats = (gameId) => {
  let query = 'http://www.boardgamegeek.com/xmlapi2/thing?id='+ gameId + '&type=boardgame&stats=1';
  return axios.get(query).then(parseResult);
}

const parseResult = (result) => {
  console.log(result);
  return parse(result.data);
}

// const getStatsForAllGames = (gameIds) => {
//   return gameIds.map((gameId) => {
//     return new Promise((resolve, reject) => {
//       axios.
//     })
//   })
// }

// (gameId) => {
//   axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ gameId + '&type=boardgame&stats=1')
//   .then((result) => {
//     return parse(result.data);
//   })
//   .then((result) => {
//     return result.items.item
//   })
// }

// const getStatsForOneGame = async gameId => {
//   return parse((await ).data);
// }

const writeGame = async g => {

  let v = {
    bgg_id: Number(g.$.id),
    name: g.name[0].$.value,
    description: g.description[0],
    year_published: Number(g.yearpublished[0].$.value),
    image: g.image[0],
    thumbnail: g.thumbnail[0],
    min_players: Number(g.minplayers[0].$.value),
    max_players: Number(g.maxplayers[0].$.value),
    playing_time: Number(g.playingtime[0].$.value),
    min_play_time: Number(g.minplaytime[0].$.value),
    max_play_time: Number(g.maxplaytime[0].$.value),
    min_age: Number(g.minage[0].$.value),
    bgg_average_rating: Number(g.statistics[0].ratings[0].average[0].$.value),
    bgg_average_weight: Number(g.statistics[0].ratings[0].averageweight[0].$.value)
  }

  let text = 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

  let values = [v.bgg_id, v.name, v.description, v.year_published, v.min_players, v.max_players, v.playing_time, v.min_play_time, v.max_play_time, v.min_age, v.thumbnail, v.image, v.bgg_average_weight, v.bgg_average_rating];

  const res = await client.query(text, values);
  return 'Attempted to write game ' + name;
}


const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
