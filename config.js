var convict = require('convict');

var config = convict({
  repo: {
    doc: 'The Location of the git repo',
    default: './',
    env: 'AUTOCOMMIT_REPO'
  },
  port: {
    doc: 'The port the application will listen on.',
    default: '3000',
    env: 'AUTOCOMMIT_PORT'
  }
});

// load config file
config.loadFile('./config/settings.json');

// validate
config.validate();

module.exports = config;
