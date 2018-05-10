module.exports = {
  prepare: result => {
    const game = result.items.item[0];
    return {
      bgg_id: Number(realResult.$.id),
      name: realResult.name[0].$.value,
      description: realResult.description[0],
      year_published: Number(realResult.yearpublished[0].$.value),
      image: realResult.image[0],
      thumbnail: realResult.thumbnail[0],
      min_players: Number(realResult.minplayers[0].$.value),
      max_players: Number(realResult.maxplayers[0].$.value),
      playing_time: Number(realResult.playingtime[0].$.value),
      min_play_time: Number(realResult.minplaytime[0].$.value),
      max_play_time: Number(realResult.maxplaytime[0].$.value),
      min_age: Number(realResult.minage[0].$.value),
      bgg_average_rating: Number(realResult.statistics[0].ratings[0].average[0].$.value),
      bgg_average_weight: Number(realResult.statistics[0].ratings[0].averageweight[0].$.value)
    }
  }
}


function prepareResult(result) {

  let realResult = result.items.item[0];

  let valuesObj = {
    bgg_id: Number(realResult.$.id),
    name: realResult.name[0].$.value,
    description: realResult.description[0],
    year_published: Number(realResult.yearpublished[0].$.value),
    image: realResult.image[0],
    thumbnail: realResult.thumbnail[0],
    min_players: Number(realResult.minplayers[0].$.value),
    max_players: Number(realResult.maxplayers[0].$.value),
    playing_time: Number(realResult.playingtime[0].$.value),
    min_play_time: Number(realResult.minplaytime[0].$.value),
    max_play_time: Number(realResult.maxplaytime[0].$.value),
    min_age: Number(realResult.minage[0].$.value),
    bgg_average_rating: Number(realResult.statistics[0].ratings[0].average[0].$.value),
    bgg_average_weight: Number(realResult.statistics[0].ratings[0].averageweight[0].$.value)
  }

  let preparedResult = {
    text: 'INSERT INTO games(bgg_id, name, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age, thumbnail, image, bgg_average_weight, bgg_average_rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING name',
    values: [valuesObj.bgg_id, valuesObj.name, valuesObj.description, valuesObj.year_published, valuesObj.min_players, valuesObj.max_players, valuesObj.playing_time, valuesObj.min_play_time, valuesObj.max_play_time, valuesObj.min_age, valuesObj.thumbnail, valuesObj.image, valuesObj.bgg_average_weight, valuesObj.bgg_average_rating]
  };

  return Promise.resolve(preparedResult);
}
