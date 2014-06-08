'use strict';

var fireUpLib = require('fire-up');

try {

  var fireUp = fireUpLib.newInjector({
    basePath: __dirname,
    modules: ['./lib/**/*.js']
  });

} catch (e) {
  console.error(e);
  process.exit(1);
}

fireUp('expressApp')
  .then(function(expressApp) {
    console.log('App initialized');
  }).catch(function (e) {
    console.error(e);
    process.exit(1);
  });
