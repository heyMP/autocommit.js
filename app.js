var config = require('./config.js');
// initialize simple-git by passing the location of the repo
var git = require('simple-git')(config.get('repo'));
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // check if there are any changes
  git.diff(function(err, diff) {
    if (diff) {
      console.log('Commiting file changes.');
      git
        .add('*')
        .commit("Automated Commit: Updated content.");
    }
  });
  res.sendStatus(200);
});

app.listen(3000);
