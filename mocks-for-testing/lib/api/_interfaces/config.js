'use strict';

// Fire me up!

module.exports = {
  implements: 'config'
};

module.exports.factory = function () {

  return {
    /**
     * Hook to configure the Express app.
     *
     * @param app The Express app
     */
    config: function (app) { }
  };

};
