const express = require('express');
const data = require('./db/data.js');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/questions', (req, res) => {
  res.send(data.questions);
});

app.get('/result/:players/:age/:duration/:complexity', (req, res) => {
  db.fetchGame(req.params.players, req.params.age, req.params.duration, req.params.complexity)
  .then(result => {
    res.send(result);
  });
});
