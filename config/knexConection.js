// const config = require('../db/knexfile')['development']
// const knexConnection = require('knex')(config)

// module.exports = knexConnection

const config = require('../db/knexfile')['development'];
const knexConnection = require('knex')(config)
module.exports = knexConnection