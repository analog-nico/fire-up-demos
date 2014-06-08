'use strict';

// Fire me up!

module.exports = {
  implements: 'config:rest',
  inject: ['require(body-parser)', 'config', 'require(lodash)']
};

module.exports.factory = function (bodyParser, configInterface, _) {

  function config(app) {
    app.use(bodyParser());
  }

  return _.extend(configInterface, {
    config: config
  });

};
