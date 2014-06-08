'use strict';

// Fire me up!

module.exports = {
  implements: 'config',
  type: 'multiple instances'
};

module.exports.factory = function () {

  return {
    /**
     * Hook to configure the Express app.
     *
     * @param app The Express app
     */
    config: function (app) { },

    /**
     * For modules with a higher priority config will be invoked first.
     */
    priority: 5
  };

};
