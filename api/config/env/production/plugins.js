// Secrets
const secrets = require('./secrets');

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: secrets.read(env('JWT_SECRET_FILE')) ||  env('JWT_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
    }
  }
})
