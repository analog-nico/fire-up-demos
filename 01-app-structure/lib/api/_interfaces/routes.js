'use strict';

// Fire me up!

module.exports = {
  implements: 'routes',
  type: 'multiple instances'
};

module.exports.factory = function (express, store, _) {

  return {
    /**
     * Hook to register routes for the Express app.
     *
     * @param app The Express app
     */
    register: function (app) { }
  };

};
