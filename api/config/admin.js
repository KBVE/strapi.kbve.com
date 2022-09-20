// Secrets
const secrets = require('./secrets');
module.exports = ({ env }) => ({
  auth: {
    //secret: secrets.read($ADMIN_JWT_SECRET_FILE) ||  env('ADMIN_JWT_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
    secret: secrets.read(env('ADMIN_JWT_SECRET_FILE')) ||  env('ADMIN_JWT_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
  },

  apiToken: {
    // This needs to be updated, but for now, we will use the JWT secret again.
    salt: secrets.read(env('API_TOKEN_FILE')) || env('API_TOKEN_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
  },

  url: env('PUBLIC_ADMIN_URL', '/dashboard'),
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
});
