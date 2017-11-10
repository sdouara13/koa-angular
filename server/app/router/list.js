const listController = require('../controller/list');

exports.register = (router) => {
  router
    .get('/lists/:project', listController.show)
    .post('/lists', listController.create);
};
