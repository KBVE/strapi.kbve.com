//const axios = require("axios");
const {verify} = require('hcaptcha');
module.exports = (plugin) => {
  const register = plugin.controllers.auth.register;

  plugin.controllers.auth.register = async (ctx) => {
    ctx.request.body.confirmed = false;
    const token = ctx.request.body.token;
    const hcaptcha = strapi.config.get('server.hcaptcha');

    console.log('Test Case');

    //const hcaptcha = env.hcaptcha;

    /*
        const hcaptcha_feedback = await axios.post(
          'https://hcaptcha.com/siteverify', {
            'secret': hcaptcha,
            'response': token
          }
        );
    */

    // Verify is from the [NPMJS Package -> hcaptcha] || [yarn add hcaptcha]
    console.log('----- [Hcaptcha] [START]');
    console.log(hcaptcha);
    console.log('----- [Hcaptcha] [END]');
    console.log('------------------');
    console.log('----- [Token] [START]');
    console.log(token);
    console.log('----- [Token] [END]');

    try {

      let { success } = await verify(hcaptcha, token)

      if (success) {
        console.log('success!', data);
        register(ctx);
        //  ctx.send({ message: 'success' });
        //  next();
      } else {
        console.log('failed');
        return ctx.badRequest(
          null,
          formatError({
            id: "Auth.form.error.token.provide",
            message: "Please provide a valid token.",
          })
        );
      }
    }
      catch (error) {
        return ctx.throw(500, 'Captcha not verified')
    }

  };
  return plugin;
};
