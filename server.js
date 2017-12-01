const express = require('express');
const data = require('./db/data.js');
const app = express();
const port = process.env.PORT || 3000;

let params = '';
for (let questionId in data.questions) {
  params += `/:${data.questions[questionId].criterion}`
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

  let results = data.games.filter(game => {
    let durationTest = game.duration === Number(req.params.duration);
    let complexityTest = game.complexity === Number(req.params.complexity);
    let playersTest = game.minPlayers <= Number(req.params.players) && Number(req.params.players) <= game.maxPlayers;
    let minAgeTest = game.minAge <= Number(req.params.minAge);

    return durationTest && complexityTest && playersTest && minAgeTest;
  });

  let randomIndex = Math.floor(Math.random() * results.length);
  let result = results[randomIndex];

  res.send(result);
});

/*
app.get('/result/:players/:age/:duration/:complexity', (req, res) => {
  db.fetchGame(req.params.players, req.params.age, req.params.duration, req.params.complexity)
  .then(result => {
    res.send(result);
  });
});
*/
