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

      db.find({}, function (err, storedProjects) {
        if (err) {
          reject(err);
        } else {
          resolve(storedProjects);
        }
      });

    });

  }

  function create(project) {

    return new Promise(function (resolve, reject) {

      db.insert(project, function (err, storedProject) {
        if (err) {
          reject(err);
        } else {
          resolve(storedProject);
        }
      });

    });

  }

  function read(id) {

    return new Promise(function (resolve, reject) {

      db.find({ _id: id }, function (err, storedProjects) {
        if (err) {
          reject(err);
        } else {
          resolve(storedProjects[0]);
        }
      });

    });

  }

  function update(id, project) {

    return new Promise(function (resolve, reject) {

      db.update({ _id: id }, project, { upsert: true }, function (err, numReplaced) {
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
