'use strict';

const Model = require('objection').Model;
const Inventory = require('./Inventory');
const PROPERTY_TYPES = require('../constants.js').PROPERTY_TYPES;

class Game extends Model {
  static get tableName() {
    return 'games';
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
        thumbnail: PROPERTY_TYPES.URI,
        image: PROPERTY_TYPES.URI,
        bgg_average_weight: PROPERTY_TYPES.INTEGER,
        bgg_average_rating: PROPERTY_TYPES.INTEGER
      }
    }
  }

  static get relationMappings() {
    return {
      inventory: {
        relation: Model.HasOneRelation,
        modelClass: Inventory,
        join: {
          from: 'games.id',
          to: 'inventory.game_id'
        }
      }
    }
  }
}

module.exports = Game;
