// Secrets
const secrets = require('./secrets');

module.exports = ({ env }) => ({
  host: secrets.read('HOST_FILE') || env('HOST', '0.0.0.0'),
  port: secrets.read('PORT_FILE') || env.int('PORT', 1337),
  app: {
    keys: secrets.read('APP_KEYS_FILE') || env.array('APP_KEYS'),
  },
});
