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

app.get('/bgg', (req, res) => {

  axios.get('http://www.boardgamegeek.com/xmlapi2/collection?username=crabogo&stats=1')
  .then(result => parse(result.data))
  .then(result => {
    let games = result.items.item;
    for (let i = 0; i < games.length; i++) {
      let id = games[i].$.objectid;
      axios.get('http://www.boardgamegeek.com/xmlapi2/thing?id='+ id + '&type=boardgame&stats=1')
      .then(result => parse(result.data))
      .then(result => {
        let game = result.items.item[0];

        let bgg_id = Number(game.$.id);
        console.log('bgg_id: ', bgg_id);

        let name = game.name[0].$.value;
        console.log('name: ', name);

        let description = game.description[0];
        console.log('description: ', game.description[0]);

        let year_published = Number(game.yearpublished[0].$.value);
        console.log('yearpublished: ', year_published);

        let image = game.image[0];
        console.log('image: ', image);

        let thumbnail = game.thumbnail[0];
        console.log('thumbnail: ', thumbnail);

        let min_players = Number(game.minplayers[0].$.value);
        console.log('minplayers: ', min_players);

        let max_players = Number(game.maxplayers[0].$.value);
        console.log('maxplayers: ', max_players);

        let playing_time = Number(game.playingtime[0].$.value);
        console.log('playingtime: ', playing_time);

        let min_play_time = Number(game.minplaytime[0].$.value);
        console.log('minplaytime: ', min_play_time);

        let max_play_time = Number(game.maxplaytime[0].$.value);
        console.log('maxplaytime: ', max_play_time);

        let min_age = Number(game.minage[0].$.value);
        console.log('minage: ', min_age);

        let bgg_average_rating = Number(game.statistics[0].ratings[0].average[0].$.value);
        console.log('average: ', bgg_average_rating);

        let bgg_average_weight = Number(game.statistics[0].ratings[0].averageweight[0].$.value);
        console.log('averageweight: ', bgg_average_weight);

        console.log('––––––––––––––––––––––––––––––––––––––––––––––');

        let text = 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';

        let values = [bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating];

        client.query(text, values, (err, res) => {
          if (err) {
            throw err
          } else {
            console.log(res)
          }
        });
      })
    }
  })
});


/*
app.get('/result/:players/:age/:duration/:complexity', (req, res) => {
  db.fetchGame(req.params.players, req.params.age, req.params.duration, req.params.complexity)
  .then(result => {
    res.send(result);
  });
});
*/
