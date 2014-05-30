'use strict';

// Fire me up!

module.exports = {
  implements: 'api/rest/store',
  inject: ['require(bluebird)']
};

module.exports.factory = function (Promise) {

  function list() {
    return Promise.resolve({});
  }

  function create(todo) {
    return Promise.resolve({ message: 'Todo created!' });
  }

  function read(id) {
    return Promise.resolve({});
  }

  function update(id, todo) {
    return Promise.resolve({});
  }

  function purge(id) {
    return Promise.resolve({});
  }

  return {
    list: list,
    create: create,
    read: read,
    update: update,
    purge: purge
  };

};
