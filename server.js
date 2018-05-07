const app = require('express')();
const http = require('http').Server(app);

const Knex = require('knex');
const knex = Knex({ client: 'pg', connection: require('./constants').PG_CONNECTION });

const { Model, raw } = require('objection');
Model.knex(knex);

const Game = require('./models/Game');
const Color = require('./models/Color');
const Category = require('./models/Category');
const Inventory = require('./models/Inventory');

const _ = require('lodash');

app.set('port', (process.env.PORT || 3000))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/games', async (req, res, next) => {
  const games = await Game
    .query()
    .select('games.*')
    .from('games')
    .where(raw(`to_tsvector(games.name) @@ to_tsquery('${req.query.name}')`))

  res.send(games);
});

app.get('/colors', async (req, res, next) => {
  const colors = await Color
    .query()
    .select('colors.*')
    .from('colors')

  res.send(colors);
});

app.get('/categories', async (req, res, next) => {
  const categories = await Category
    .query()
    .select('categories.*')
    .from('categories')

  res.send(categories)
})

app.post('/inventory', async (req, res, next) => {
  const patches = {};

  if (req.query.location !== 'null') {
    patches.location = req.query.location;
  }

  if (req.query.colorId !== 'null') {
    patches.color_id = Number(req.query.colorId);
  }

  if (req.query.categoryId !== 'null') {
    patches.category_id = Number(req.query.categoryId);
  }

  const inventory = await Inventory
    .query()
    .patchAndFetchById(req.query.inventoryId, patches)
    .where('id', '=', req.query.inventoryId)

  res.send(inventory);
});

app.get('/inventory', async (req, res, next) => {
  const inventory = await Inventory
    .query()
    .select('inventory.*')
    .from('inventory')
    .where('game_id', '=', req.query.gameId)

  res.send(inventory);
});

http.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
});
