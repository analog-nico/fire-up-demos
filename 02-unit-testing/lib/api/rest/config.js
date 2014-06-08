'use strict';

// Fire me up!

module.exports = {
  implements: 'config:rest',
  inject: ['require(body-parser)']
};

module.exports.factory = function (bodyParser) {

  function config(app) {
    app.use(bodyParser());
  }

  return {
    config: config
  };

};
