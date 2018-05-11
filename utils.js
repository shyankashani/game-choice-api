const axios = require('axios');
const Promise = require('bluebird');

module.exports = {
  generateGame: result => {
    console.log('result.items.$', result.items.$);
    const game = result.items.item[0];
    console.log('game', game);
    const gameObject = {
      bgg_id: Number(game.$.id),
      name: game.name[0].$.value,
      description: game.description[0],
      year_published: Number(game.yearpublished[0].$.value),
      image: game.image[0],
      thumbnail: game.thumbnail[0],
      min_players: Number(game.minplayers[0].$.value),
      max_players: Number(game.maxplayers[0].$.value),
      playing_time: Number(game.playingtime[0].$.value),
      min_play_time: Number(game.minplaytime[0].$.value),
      max_play_time: Number(game.maxplaytime[0].$.value),
      min_age: Number(game.minage[0].$.value),
      bgg_average_rating: Number(game.statistics[0].ratings[0].average[0].$.value),
      bgg_average_weight: Number(game.statistics[0].ratings[0].averageweight[0].$.value)
    }
    console.log(`Writing game ${gameObject.name} to database.`);
    return gameObject;
  },
  fetchGamesByUserName: userName => {
    return Promise.resolve(axios.get(`http://www.boardgamegeek.com/xmlapi2/collection?username=${userName}&stats=1`));
  },
  fetchStatsByBggId: bggId => {
    console.log(`Game does not exist in database. Fetching game with id ${bggId}.`);
    const stringifiedId = bggId.toString();
    return Promise.resolve(axios.get(`http://www.boardgamegeek.com/xmlapi2/thing?id=${stringifiedId}&type=boardgame&stats=1`));
  }
}
