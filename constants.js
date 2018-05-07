// https://spacetelescope.github.io/understanding-json-schema/reference/numeric.html

module.exports = {
  PROPERTY_TYPES: {
    INTEGER:  { type: 'integer'},
    STRING:   { type: 'string'},
    URI: { type: 'string', format: 'uri' }
  },
  PG_CONNECTION: 'postgres://eakyrenfgrudpz:2bec46785c01929a754a5ed574619d5746b4b195ec26b7ea4b06215f64f0b2eb@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d44d7utch7fj0m?ssl=true'
}
