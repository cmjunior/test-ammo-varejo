const knex = require('knex');
const config = require('../../knexfile');

const configuration = config.development;

const connection = knex(configuration);

module.exports = connection;