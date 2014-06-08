'use strict';

// Fire me up!

module.exports = {
  implements: 'expressApp',
  inject: ['require(bluebird)', 'require(express)', 'require(morgan)', 'require(lodash)', 'config:*', 'routes:*']
};

module.exports.factory = function(Promise, express, logger, _, configModules, routesModules) {

  return new Promise(function (resolve) {

    var app = express();

    app.use(logger('dev'));

    _.forOwn(configModules, function (module, interfaceName) {
      module.config(app);
    });

    _.forOwn(routesModules, function (module, interfaceName) {
      module.register(app);
    });

    app.listen(3000, function () {
      console.log('Express server listening on port 3000');
      resolve(app);
    });

  });

};
