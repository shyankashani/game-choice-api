const express = require('express');
const data = require('./db/data.js');
const app = express();
const port = process.env.PORT || 3000;
const { Client } = require('pg');
const axios = require('axios');
const parse = require('xml2js-es6-promise');

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
  let games = (await getGames('victorypointcafe')).items.item;
  processGames(games);
});

const getGames = async user => {
  return parse((await axios.get('http://www.boardgamegeek.com/xmlapi2/collection?username=' + user + '&stats=1')).data);
};

const getSingleGameInfo = async game => {
  return parse((await axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ game.$.objectid + '&type=boardgame&stats=1')).data);
}

const processGames = async games => {
  for (let game of games) {
    await delay(2000);
    let info = (await getSingleGameInfo(game)).items.item[0];
    let mssg = await writeGame(info);
    console.log(mssg);
  }
}

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const writeGame = async game => {
  let bgg_id = Number(game.$.id);
  let name = game.name[0].$.value;
  let description = game.description[0];
  let year_published = Number(game.yearpublished[0].$.value);
  let image = game.image[0];
  let thumbnail = game.thumbnail[0];
  let min_players = Number(game.minplayers[0].$.value);
  let max_players = Number(game.maxplayers[0].$.value);
  let playing_time = Number(game.playingtime[0].$.value);
  let min_play_time = Number(game.minplaytime[0].$.value);
  let max_play_time = Number(game.maxplaytime[0].$.value);
  let min_age = Number(game.minage[0].$.value);
  let bgg_average_rating = Number(game.statistics[0].ratings[0].average[0].$.value);
  let bgg_average_weight = Number(game.statistics[0].ratings[0].averageweight[0].$.value);

  let text = 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

  let values = [bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating];

  const res = await client.query(text, values);
  return 'Attempted to write game ' + name;
}
