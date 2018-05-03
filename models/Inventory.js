'use strict';

const Model = require('objection').Model;
const PROPERTY_TYPES = require('./constants.js').CONSTANTS.PROPERTY_TYPES;

class Inventory extends Model {
  static get tableName() {
    return 'inventory';
  }
}

static get jsonSchema() {
  return {
    type: 'object',
    required: [
      'id',
      'game_id',
      'organization_id'
    ],
    properties: {
      id: PROPERTY_TYPES.INTEGER,
      game_id: PROPERTY_TYPES.INTEGER,
      organization_id: PROPERTY_TYPES.INTEGER,
      location: PROPERTY_TYPES.STRING,
      color_id: PROPERTY_TYPES.INTEGER,
      category_id: PROPERTY_TYPES.INTEGER,
      notes: PROPERTY_TYPES.STRING
    }
  }
}

static get relationMappings() {
  return {
    game: {
      relation: Model.BelongsToOneRelation,
      modelClass: Game,
      join: {
        from: 'inventory.game_id',
        to: 'games.id'
      }
    },
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Organization,
      join: {
        from: 'inventory.organization_id',
        to: 'organization.id'
      }
    },
    color: {
      relation: Model.BelongsToOneRelation,
      modelClass: Color,
      join: {
        from: 'inventory.color_id',
        to: 'color.id'
      }
    },
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: Category,
      join: {
        from: 'inventory.category_id',
        to: 'category.id'
      }
    }
  }
}
