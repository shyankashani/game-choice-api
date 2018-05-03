'use strict';

const Model = require('objection').Model;
const PROPERTY_TYPES = require('./constants.js').CONSTANTS.PROPERTY_TYPES;

class Game extends Model {
  static get tableName() {
    return 'games';
  }
}

static get jsonSchema() {
  return {
    type: 'object',
    required: [
      'id',
      'bgg_id',
      'name'
    ],
    properties: {
      id: PROPERTY_TYPES.INTEGER,
      bgg_id: PROPERTY_TYPES.INTEGER,
      name: PROPERTY_TYPES.STRING,
      description: PROPERTY_TYPES.STRING,
      year_published: PROPERTY_TYPES.INTEGER,
      min_players: PROPERTY_TYPES.INTEGER,
      max_players: PROPERTY_TYPES.INTEGER,
      playing_time: PROPERTY_TYPES.INTEGER,
      min_play_time: PROPERTY_TYPES.INTEGER,
      max_play_time: PROPERTY_TYPES.INTEGER,
      min_age: PROPERTY_TYPES.INTEGER,
      thumbnail: PROPERTY_TYPES.STRING,
      image: PROPERTY_TYPES.STRING,
      bgg_average_weight: PROPERTY_TYPES.INTEGER,
      bgg_average_rating: PROPERTY_TYPES.INTEGER
    }
  }
}
