'use strict';

// Fire me up!

module.exports = {
  implements: 'api/rest/store',
  inject: ['require(bluebird)', 'require(nedb)']
};

module.exports.factory = function (Promise, Datastore) {

  var db = new Datastore();

  function list() {

    return new Promise(function (resolve, reject) {

      db.find({}, function (err, storedTodos) {
        if (err) {
          reject(err);
        } else {
          resolve(storedTodos);
        }
      });

    });

  }

  function create(todo) {

    return new Promise(function (resolve, reject) {

      db.insert(todo, function (err, storedTodo) {
        if (err) {
          reject(err);
        } else {
          resolve(storedTodo);
        }
      });

    });

  }

  function read(id) {

    return new Promise(function (resolve, reject) {

      db.find({ _id: id }, function (err, storedTodos) {
        if (err) {
          reject(err);
        } else {
          resolve(storedTodos[0]);
        }
      });

    });

  }

  function update(id, todo) {

    return new Promise(function (resolve, reject) {

      db.update({ _id: id }, todo, { upsert: true }, function (err, numReplaced) {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });

    });

  }

  function purge(id) {

    return new Promise(function (resolve, reject) {

      db.remove({ _id: id }, function (err, numRemoved) {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });

    });

  }

  return {
    list: list,
    create: create,
    read: read,
    update: update,
    purge: purge
  };

};
