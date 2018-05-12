const app = require('express')();
const http = require('http').Server(app);
const axios = require('axios');
const parse = require('xml2js-es6-promise');
const Promise = require('bluebird');

const Knex = require('knex');
const knex = Knex({ client: 'pg', connection: require('./constants').PG_CONNECTION });

const { Model, raw } = require('objection');
Model.knex(knex);

const Game = require('./models/Game');
const Color = require('./models/Color');
const Category = require('./models/Category');
const Inventory = require('./models/Inventory');
const {
  generateGame,
  fetchGamesByUserName,
  fetchStatsByBggId
} = require('./utils.js');


const _ = require('lodash');

app.set('port', (process.env.PORT || 3000))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/inventory', async (req, res, next) => {
  const inventory = await Inventory.query().select('*')
    .join('games', 'games.id', 'inventory.game_id')
    .where(raw(`to_tsvector(games.name) @@ to_tsquery('${req.query.name}')`))
  res.send(inventory);
});

app.get('/colors', async (req, res, next) => {
  const colors = await Color.query().select('colors.*').from('colors')
  res.send(colors);
});

app.get('/categories', async (req, res, next) => {
  const categories = await Category.query().select('categories.*').from('categories')
  res.send(categories);
})

app.post('/inventory', async (req, res, next) => {
  const patches = {};

  if (req.query.location !== 'null') {
    patches.location = req.query.location;
  } if (req.query.colorId !== 'null') {
    patches.color_id = Number(req.query.colorId);
  } if (req.query.categoryId !== 'null') {
    patches.category_id = Number(req.query.categoryId);
  } if (req.query.notes !== 'null') {
    patches.notes = req.query.notes;
  }

  const inventory = await Inventory.query().patchAndFetchById(req.query.inventoryId, patches)
    .where('id', '=', req.query.inventoryId)
  res.send(inventory);
});

app.get('/sync', (req, res, next) => {
  fetchGamesByUserName('victorypointcafe')
  .then(result => parse(result.data))
  .then(result => result.items.item.map(game => game.$.objectid))
  .then(result => {
    const ids = result.slice().reverse();
    console.log(`Number of board games: ${ids.length}`);
    let counter = 1;

    Promise.mapSeries(ids, id => {
      return Promise.delay(6000)
      .then(async result => {
        const game = await Game.query().select('games.*').from('games').where('bgg_id', '=', id);

        if (game.length) {
          console.log(`${counter} Game with bgg id ${id} already exists in datbase.`);
          _.pull(ids, id);
          counter++;
        }

        else {
          counter++;
          fetchStatsByBggId(id)
          .then(result => parse(result.data))
          .then(async result => {
            const newGame = generateGame(result);
            const game = await Game.query().insertAndFetch(newGame)
            if (game.length) {
              console.log(`Successfully wrote ${newGame.name} to game table.`);
              const inventory = await Inventory.query().insertAndFetch({game_id: id, organization_id: 1})
              if (inventory.length) {
                console.log(`Successfully added ${newGame.name} to inventory.`);
                _.pull(ids, id);
              }
              else {
                console.log(`Failed to add ${newGame.name} to database.`);
              }
            }

            else {
              console.log(`Failed to write ${newGame.name} to database.`);
            }
          })
        }
      }).then(result => Promise.resolve(result))
    })
  })
})

app.get('/compare', async (req, res, next) => {
  const idsOfGamesInDatabase = await Game.query().select('games.bgg_id').from('games')
  .then(result => result.map(game => game.bgg_id))

  const idsOfGamesInVicPoint = await fetchGamesByUserName('victorypointcafe')
  .then(result => parse(result.data))
  .then(result => result.items.item.map(game => Number(game.$.objectid)))

  console.log('idsOfGamesInDatabase.length', idsOfGamesInDatabase.length);
  console.log('idsOfGamesInVicPoint.length', idsOfGamesInVicPoint.length);

  const outstandingIds = _.difference(idsOfGamesInVicPoint, idsOfGamesInDatabase);

  console.log('outstandingIds', outstandingIds);

  Promise.mapSeries(outstandingIds, async id => {
    await Promise.delay(4000)

    const newGame = await fetchStatsByBggId(id)
    .then(result => parse(result.data))
    .then(result => console.log('result.items.$', result.items.$))

    // const game = await Game.query().insertAndFetch(newGame);
    // const inventory = await Inventory.query().insertAndFetch({
    //   game_id: game.id,
    //   organization_id: 1
    // })
    //
    // if (game.length && inventory.length) {
    //   console.log(`Successfully added ${game.name} to games and inventory with bgg_id of ${game.bgg_id}`);
    // }
    //
    // if (game.length) {
    //   console.log(`Successfully added ${game.name} to games but not inventory with bgg_id of ${game.bgg_id}`);
    // }
    //
    // if (inventory.length) {
    //   console.log(`Successfully added ${game.name} to inventory but not games with game_id of ${inventory.game_id}`);
    // }
    //
    // else {
    //   console.log(`Failed to add ${game.name} with bgg_id of ${game.bgg_id} to anything.`);
    // }

  });

})

http.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
});
