// Import hCaptcha library
const {verify} = require('hcaptcha');
// Module <Plugin> overwrite Register
module.exports = (plugin) => {
  const register = plugin.controllers.auth.register;

  plugin.controllers.auth.register = async (ctx) => {
    ctx.request.body.confirmed = false;
    const token = ctx.request.body.token;
    const hcaptcha = strapi.config.get('server.hcaptcha');

    let result = await verify(hcaptcha, token)
              if(result.success!==true)
              {
                return ctx.badRequest(null, 'hCaptcha Verification had an issue. ')
              }
              else
              {
              await register(ctx);
              }
  };

  return plugin;
};
