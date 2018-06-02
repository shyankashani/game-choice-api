// https://spacetelescope.github.io/understanding-json-schema/reference/numeric.html

module.exports = {
  PROPERTY_TYPES: {
    BOOLEAN:  { type: 'boolean' },
    INTEGER:  { type: 'integer'},
    STRING:   { type: 'string'},
    URI: { type: 'string', format: 'uri' }
  },
  PG_CONNECTION: 'postgres://eakyrenfgrudpz:2bec46785c01929a754a5ed574619d5746b4b195ec26b7ea4b06215f64f0b2eb@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d44d7utch7fj0m?ssl=true',
  INVENTORY_SELECT_STATEMENTS: [
    'inventory.id as inventory_id',
    'inventory.location as inventory_location',
    'inventory.notes as inventory_notes',
    'inventory.staff_pick as inventory_staff_pick',
    'games.id as game_id',
    'games.bgg_id as game_bgg_id',
    'games.name as game_name',
    'games.description as game_desription',
    'games.year_published as game_year_published',
    'games.min_players as game_min_players',
    'games.max_players as game_max_players',
    'games.playing_time as game_playing_time',
    'games.min_play_time as game_min_play_time',
    'games.max_play_time as game_max_play_time',
    'games.min_age as game_min_age',
    'games.thumbnail as game_thumbnail',
    'games.image as game_image',
    'games.bgg_average_weight as game_bgg_average_weight',
    'games.bgg_average_rating as game_bgg_average_rating',
    'colors.id as color_id',
    'colors.name as color_name',
    'colors.description as color_description',
    'colors.hex as color_hex',
    'categories.id as category_id',
    'categories.name as category_name',
    'categories.image as category_image'
  ]
}
