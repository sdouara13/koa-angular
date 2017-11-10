const _ = require('lodash');

const baseConfig = {
  app: {
    env: process.env.NODE_ENV || 'development',
    secret: process.env.SECRET || '123456789',
  },
  apiPrefix: '/api/v1',
};

const extraConfig = require(`./config.${baseConfig.app.env}.js`);
module.exports = _.merge(baseConfig, extraConfig || {});
