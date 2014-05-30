'use strict';

// Fire me up!

module.exports = {
  implements: 'routes:rest',
  inject: ['require(express)', 'api/rest/store']
};

module.exports.factory = function (express, store) {

  function respondWith(promise, res) {
    promise
      .then(function (json) {
        res.json(json);
      })
      .catch(function (err) {
        res.send(err);
      });
  }

  function register(app) {

    app.get('/api/todos', function (req, res) {
      respondWith(store.list(), res);
    });

    app.post('/api/todos', function (req, res) {
      respondWith(store.create(req.body), res);
    });

    app.get('/api/todos/:id', function (req, res) {
      respondWith(store.read(req.params.id), res);
    });

    app.put('/api/todos/:id', function (req, res) {
      respondWith(store.update(req.params.id, req.body), res);
    });

    app.delete('/api/todos/:id', function (req, res) {
      respondWith(store.purge(req.params.id), res);
    });

  }

  return {
    register: register
  };

};
