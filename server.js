const app = require('express')();
const http = require('http').Server(app);
const axios = require('axios');
const parse = require('xml2js-es6-promise');
const Promise = require('bluebird');
const INVENTORY_SELECT_STATEMENTS = require('./constants.js').INVENTORY_SELECT_STATEMENTS;


const { development } = require('./knexfile.js');
const knex = require('knex')(development);

const { Model, raw } = require('objection');
Model.knex(knex);

const Game = require('./models/Game');
const Color = require('./models/Color');
const Category = require('./models/Category');
const Inventory = require('./models/Inventory');
const {
  fetchStatsByBggId,
  fetchGamesByUserName,
  formatInventory
} = require('./utils.js');
const _ = require('lodash');

app.set('port', (process.env.PORT || 3000))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/inventory', async (req, res, next) => {
  const inventory = await Inventory.query().select(INVENTORY_SELECT_STATEMENTS)
      .join('games', 'games.id', 'inventory.game_id')
      .join('colors', 'colors.id', 'inventory.color_id')
      .join('categories', 'categories.id', 'inventory.category_id')
      // .where(raw(`to_tsvector(games.name) @@ to_tsquery('catan')`))
      .map(formatInventory)
      // .where(raw(`to_tsvector(games.name) @@ to_tsquery('${req.query.name}')`))

  console.log('inventory', inventory);
  res.send(inventory);
});

app.get('/colors', async (req, res, next) => {
  const colors = await Color.query().select('colors.*').from('colors')
  res.send(colors);
});

app.get('/categories', async (req, res, next) => {
  const categories = await Category.query().select('categories.*').from('categories')
  res.send(categories);
});

app.post('/inventory', async (req, res, next) => {
  const patches = {};
  const q = req.query;

  if (q.location !== 'null') {
    patches.location = q.location;
  } if (q.colorId !== 'null') {
    patches.color_id = Number(q.colorId);
  } if (q.categoryId !== 'null') {
    patches.category_id = Number(q.categoryId);
  } if (q.notes !== 'null') {
    patches.notes = q.notes;
  } if (q.staffPick !== 'null') {
    patches.staff_pick = q.staffPick === 'true' ? true : false;
  }

  const inventory = await Inventory.query().patch(patches)
    .where('inventory.game_id', '=', req.query.game_id)
    .returning('*')
  res.send(inventory);
});

app.get('/compare', async (req, res, next) => {
  const idsOfGamesInDatabase = await Game.query().select('games.bgg_id').from('games')
  .then(result => result.map(game => game.bgg_id))

  const idsOfGamesInVicPoint = await fetchGamesByUserName('victorypointcafe')
  .then(result => parse(result.data))
  .then(result => result.items.item.map(game => Number(game.$.objectid)))

  const outstandingIds = _.difference(idsOfGamesInVicPoint, idsOfGamesInDatabase);

  Promise.mapSeries(outstandingIds, async id => {
    await Promise.delay(4000)

    const newGame = await fetchStatsByBggId(id)
    .then(result => parse(result.data))
    .then(result => console.log('result.items.$', result.items.$))
  });
})

http.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
});
