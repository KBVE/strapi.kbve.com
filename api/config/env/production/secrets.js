// Original Gist is from Patrick Kalkman
// We will modify the file to help fit in with Strapi
// dependencies
const fs = require('fs');

const dockerSecret = {};

dockerSecret.read = function read(secretNameAndPath) {
  try {
    return fs.readFileSync(`${secretNameAndPath}`, 'utf8');
  } catch(err) {
    if (err.code !== 'ENOENT') {
      console.log(`An error occurred while trying to read the secret: ${secretNameAndPath}. Err: ${err}`);
    } else {
      console.log(`Could not find the secret, probably not running in swarm mode: ${secretNameAndPath}. Err: ${err}`);
    }
    return false;
  }
};

module.exports = dockerSecret;
