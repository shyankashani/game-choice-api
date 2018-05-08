'use strict';

const Model = require('objection').Model;
const PROPERTY_TYPES = require('../constants.js').PROPERTY_TYPES;

class Color extends Model {
  static get tableName() {
    return 'colors';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'id',
        'name'
      ],
      properties: {
        id: PROPERTY_TYPES.INTEGER,
        name: PROPERTY_TYPES.STRING,
        description: PROPERTY_TYPES.STRING,
        hex: PROPERTY_TYPES.STRING
      }
    }
  }

  // static get relationMappings() {
  //   return {
  //     colorization: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Inventory,
  //       join: {
  //         from: 'colors.id',
  //         to: 'inventory.color_id'
  //       }
  //     }
  //   }
  // }
}

module.exports = Color;
