module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c60d7e83951c8844ba088ef68bff791'),
  },
});
