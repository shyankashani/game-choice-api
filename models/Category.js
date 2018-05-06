'use strict';

const Model = require('objection').Model;
const PROPERTY_TYPES = require('../constants.js').PROPERTY_TYPES;

class Category extends Model {
  static get tableName() {
    return 'categories';
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
        image: PROPERTY_TYPES.URI
      }
    }
  }

  // static get relationMappings() {
  //   return {
  //     categorization: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Inventory,
  //       join: {
  //         from: 'categories.id',
  //         to: 'inventory.category_id'
  //       }
  //     }
  //   }
  // }
}

module.exports = Category;
