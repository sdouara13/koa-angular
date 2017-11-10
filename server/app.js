/*
 * @Author: LiDaibin
 * @Date: 2017-03-07 10:40:27
 * @Last Modified by: Li
 * @Last Modified time: 2017-05-10 14:42:19
 */

'use strict';

const fs = require('fs');

const Koa = require('koa');
const log4j = require('koa-log4');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const jwt = require('koa-jwt');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const errorHandler = require('./app/middleware/error-handler');
const config = require('./config');
const Routers = require('./app/router');


const app = new Koa();
app.env = config.app.env;
app.init = async () => {
  try {
    fs.mkdirSync(config.log4Dir);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error('Could not set up app log directroy, error was: ', error);
      process.exit(1);
    }
  }
  log4j.configure(config.log4Config, {
    cwd: config.log4Dir,
  });
  const logger = log4j.getLogger('APP');

  mongoose.Promise = Promise;
  if (mongoose.db) {
    mongoose.db.disconnect();
  }
  mongoose.db = mongoose.connect(config.mongoDB.host, {
    server: {
      poolSize: config.mongoDB.poolSize,
    },
  });
  mongoose.connection.on('connected', () => {
    logger.info(`Mongoose connection open to ${config.mongoDB.host}`);
  });
  mongoose.connection.on('error', (err) => {
    logger.error(`Mongoose connection error: ${err}`);
  });
  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose connection disconnected');
  });

  app.use(log4j.koaLogger(log4j.getLogger('http'), { level: 'auto' }));
  app.on('error', (err, ctx) => {
    logger.error('[handler]', err);
  });
  app.use(cors());
  app.use(bodyParser());
  // TODO: validate user token
  // app.use(jwt({ secret: config.app.secret }).unless({ path: [/^\/api\/v1\/public/] }));
  app.use(errorHandler());
  const router = Routers.register();
  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.httpServer = app.listen(config.app.port);
  app.httpServer.on('listening', () => {
    if (config.app.env === 'test') {
      return;
    }
    const addr = app.httpServer.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`listening on ${bind}`);
  });
  app.httpServer.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
      logger.error(`${config.app.port} require evevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${config.app.port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
    }
  });

// TODO: BUG!!!!!!!!!!
  app.shutdownGracefully = () => {
    if (mongoose.db) {
      mongoose.connection.close((err) => {
        if (err) {
          logger.error(`Mongoose connection close error: ${err}`);
        } else {
          logger.info('[Shutdown-Gracefully] Close MongoDB connection');
        }
      });
    }
    if (app.httpServer) {
      app.httpServer.close((err) => {
        if (err) {
          logger.error(`Close HTTPServer error ${err}`);
        } else {
          logger.info('[Shutdown-Gracefully] Close HTTPServer');
        }
      });
    }
  };
  process.on('SIGTERM', () => {
    app.shutdownGracefully();
  });
  process.on('SIGINT', () => {
    app.shutdownGracefully();
  });
};


module.exports = app;
if (!module.parent) {
  app.init()
    .then()
    .catch((e) => {
      console.error(e.stack);
      process.exit(1);
    });
}
