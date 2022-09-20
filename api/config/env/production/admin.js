// Secrets
const secrets = require('./secrets');

module.exports = ({ env }) => ({
  auth: {
    secret: secrets.read($ADMIN_JWT_SECRET_FILE) ||  env('ADMIN_JWT_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
  },
});
