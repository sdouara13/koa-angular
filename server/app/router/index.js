const fs = require('fs');

const Router = require('koa-router');

const config = require('../../config');

exports.register = () => {
  const router = new Router({
    prefix: config.apiPrefix,
  });
  fs.readdirSync('./app/router')
    .filter(filename => ((filename.indexOf('.') !== 0) && (filename !== 'index.js')))
    .forEach((filename) => {
      require(`./${filename}`).register(router); // eslint-disable-line global-require
    });
  return router;
};
