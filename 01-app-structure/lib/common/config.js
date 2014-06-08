'use strict';

// Fire me up!

module.exports = {
  implements: ['config:common'],
  inject: ['require(morgan)', 'config', 'require(lodash)']
};

module.exports.factory = function (logger, configInterface, _) {

  function config(app) {
    app.use(logger('dev'));
  }

  return _.extend(configInterface, {
    config: config,
    priority: 1
  });

};
