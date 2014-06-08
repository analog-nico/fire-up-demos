'use strict';

// Fire me up!

module.exports = {
  implements: 'api/rest/store',
  inject: ['require(nedb)', 'require(path)']
};

module.exports.factory = function (Datastore, path) {

  var db = new Datastore({
    filename: path.join(__dirname, '../../../datastore'),
    autoload: true
  });

  function list(respond) {
    db.find({}, respond);
  }

  function create(project, respond) {
    db.insert(project, respond);
  }

  function read(id, respond) {
    db.find({ _id: id }, function (err, storedProjects) {
      respond(err, storedProjects[0]);
    });
  }

  function update(id, project, respond) {
    db.update({ _id: id }, project, { upsert: true }, respond);
  }

  function purge(id, respond) {
    db.remove({ _id: id }, respond);
  }

  return {
    list: list,
    create: create,
    read: read,
    update: update,
    purge: purge
  };

};
