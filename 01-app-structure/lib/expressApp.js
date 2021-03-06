'use strict';

// Fire me up!

module.exports = {
  implements: 'expressApp',
  inject: ['require(bluebird)', 'require(express)', 'require(lodash)', 'config:*', 'routes:*']
};

module.exports.factory = function(Promise, express, _, configModules, routesModules) {

  return new Promise(function (resolve) {

    var app = express();

    _.forEach(_.sortBy(configModules, 'priority'), function (module) {
      module.config(app);
    });

    _.forEach(routesModules, function (module) {
      module.register(app);
    });

    app.listen(3000, function () {
      console.log('Express server listening on port 3000');
      resolve(app);
    });

  });

};
