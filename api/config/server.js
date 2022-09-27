// Secrets
const secrets = require('./secrets');

module.exports = ({ env }) => ({
  host: secrets.read(env('HOST_FILE')) || env('HOST', '0.0.0.0'),
  port: secrets.read(env('PORT_FILE')) || env.int('PORT', 1337),
  app: {
    keys: secrets.array_read(env('APP_KEYS_FILE')) || env.array('APP_KEYS'),
  },
  hcaptcha: secrets.read(env('HCAPTCHA_FILE')) || env('HCAPTCHA', 'key'),

});
