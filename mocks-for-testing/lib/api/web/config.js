'use strict';

// Fire me up!

module.exports = {
  implements: 'config:web',
  inject: ['require(express)', 'require(path)']
};

module.exports.factory = function (express, path) {

  function config(app) {
    app.use(express.static(path.join(__dirname, '../../../app')));
  }

  return {
    config: config
  };

};
