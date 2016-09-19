var convict = require('convict');

var config = convict({
  repo: {
    doc: 'The Location of the git repo',
    default: './',
    env: 'AUTOCOMMIT_REPO'
  }
});

// load config file
config.loadFile('./config/settings.json');

// validate
config.validate();

module.exports = config;
