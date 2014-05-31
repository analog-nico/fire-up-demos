'use strict';

// Fire me up!

module.exports = {
  implements: 'routes:rest',
  inject: ['require(express)', 'api/rest/store']
};

module.exports.factory = function (express, store) {

  function register(app) {

    app.get('/api/projects', function (req, res) {
      store.list(respond(res));
    });

    app.post('/api/projects', function (req, res) {
      store.create(req.body, respond(res));
    });

    app.get('/api/projects/:id', function (req, res) {
      store.read(req.params.id, respond(res));
    });

    app.put('/api/projects/:id', function (req, res) {
      store.update(req.params.id, req.body, respond(res));
    });

    app.delete('/api/projects/:id', function (req, res) {
      store.purge(req.params.id, respond(res));
    });

  }

  function respond(res) {
    return function (err, ret) {
      if (err) {
        res.send(err);
      } else {
        res.json(ret);
      }
    };
  }

  return {
    register: register
  };

};
