'use strict';

// Fire me up!

module.exports = {
  implements: 'config:web',
  inject: ['require(express)', 'require(path)', 'config', 'require(lodash)']
};

module.exports.factory = function (express, path, configInterface, _) {

  function config(app) {
    app.use(express.static(path.join(__dirname, '../../../app')));
  }

  return _.extend(configInterface, {
    config: config
  });

};
