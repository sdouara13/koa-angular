/*
 * @Author: LiDaibin
 * @Date: 2017-03-09 10:39:53
 * @Last Modified by: LiDaibin
 * @Last Modified time: 2017-03-28 14:54:06
 */
'use strict';

const path = require('path');

module.exports = {
  app: {
    port: 8081,
  },
  mongoDB: {
    host: 'mongodb://localhost:27017/gm-directive-dev',
    poolSize: 5,
  },
  log4Dir: path.normalize(`${__dirname}/../logs`),
  log4Config: {
    // use log4js to manage the log of the node APP(https://github.com/nomiddlename/log4js-node/wiki)
    appenders: [{
        type: 'console',
      },
      {
        type: 'clustered',
        appenders: [{
            type: 'dateFile',
            filename: 'startup.log',
            pattern: '-yyyy-MM-dd',
            category: 'startup',
          },
          {
            type: 'dateFile',
            filename: 'access.log',
            pattern: '-yyyy-MM-dd',
            category: 'http',
          },
          {
            type: 'file',
            filename: 'app.log',
            maxLogSize: 10485760,
            numBackups: 5,
          },
          {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: {
              type: 'file',
              filename: 'errors.log',
            },
          },
        ],
      },
    ],
  },
}
