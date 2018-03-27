const express = require('express');
const data = require('./db/data.js');
const app = express();
const port = process.env.PORT || 3000;
const { Client } = require('pg');
const axios = require('axios');
const parse = require('xml2js-es6-promise');
const _ = require('lodash');
let criteria = [];
let params = '';
for (let questionId in data.questions) {
  criteria.push(data.questions[questionId].criterion);
}
for (let i = 0; i < criteria.length; i++) {
  params += `/:${criteria[i]}`
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});
app.get('/questions', (req, res) => {
  res.send(data.questions);
});
app.get('/result' + params, (req, res) => {

  let duration = Number(req.params.duration);
  let complexity = Number(req.params.complexity);
  let players = Number(req.params.players);
  let playersAreUnder12 = Number(req.params.playersAreUnder12);

  let results = [];

  for (let i = 0; i < data.games.length; i++) {
    let game = data.games[i];
    let test0 = game.duration === duration;
    let test1 = game.complexity === complexity;
    let test2 = game.players[0] <= players && players <= game.players[1];
    let test3 = true;
    if (playersAreUnder12) {
      test3 = game.playersAreUnder12 === playersAreUnder12;
    }
    if (test0 && test1 && test2 && test3) {
      results.push(game);
    }
  }

  let randomIndex = Math.floor(Math.random() * results.length);
  let result = results[randomIndex];

  res.send(result);
});
const client = new Client({
  connectionString: 'postgres://eakyrenfgrudpz:2bec46785c01929a754a5ed574619d5746b4b195ec26b7ea4b06215f64f0b2eb@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d44d7utch7fj0m',
  ssl: true,
});
client.connect();



app.get('/bgg', async (req, res) => {
  let gameIds = (await getGames('victorypointcafe')).items.item.map(game => game.$.objectid);
  let gameIdsSorted = _.chain(game).uniq().sort((a,b) => a-b);
  
  res.send(gameIdsSorted);
  // let statsForAllGames = gameIds.map(async gameId => getStatsForOneGame(gameId));
});

const getGames = async username => {
  return parse((await axios.get('http://www.boardgamegeek.com/xmlapi2/collection?username=' + username + '&stats=1')).data);
};

const getStatsForAllGames = async gameIds => {
  for (let gameId of gameIds) {
    let gameStats = (await getStatsForOneGame(gameId)).items.item[0];
    let mssg = await writeGame(info);
    console.log(mssg);
  }
}

const getStatsForOneGame = async gameId => {
  return parse((await axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ gameId + '&type=boardgame&stats=1')).data);
}

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
