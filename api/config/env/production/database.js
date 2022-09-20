// Secrets
const secrets = require('./secrets');

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: secrets.read(env('DATABASE_HOST_FILE')) || env('DATABASE_HOST', '127.0.0.1'),
      port: secrets.read(env('DATABASE_PORT_FILE')) || env.int('DATABASE_PORT', 3306),
      database: secrets.read(env('DATABASE_NAME_FILE')) || env('DATABASE_NAME', 'strapi'),
      user: secrets.read(env('DATABASE_USERNAME_FILE')) || env('DATABASE_USERNAME', 'strapi'),
      password: secrets.read(env('DATABASE_PASSWORD_FILE')) || env('DATABASE_PASSWORD', 'strapi'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});
