'use strict';

const Model = require('objection').Model;
const PROPERTY_TYPES = require('../constants.js').PROPERTY_TYPES;
const Inventory = require('./Inventory');

class Organization extends Model {
  static get tableName() {
    return 'organizations';
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
        name: PROPERTY_TYPES.STRING
      }
    }
  }

  static get relationMappings() {
    return {
      supply: {
        relation: Model.HasManyRelation,
        modelClass: Inventory,
        join: {
          from: 'organizations.id',
          to: 'inventory.organization_id'
        }
      }
    }
  }
}

module.exports = Organization;
