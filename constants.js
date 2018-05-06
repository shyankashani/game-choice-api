// https://spacetelescope.github.io/understanding-json-schema/reference/numeric.html

module.exports = {
  PROPERTY_TYPES: {
    INTEGER:  { type: 'integer'},
    STRING:   { type: 'string'},
    URI: { type: 'string', format: 'uri' }
  }
}
