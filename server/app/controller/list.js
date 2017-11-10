const logger = require('koa-log4').getLogger('result.controller');
const validator = require('joi');
const HttpStatus = require('http-status-codes');

const service = require('../service/list');


async function create(ctx) {
  const { key, gm, etc } = ctx.request.body;
  const validationRule = {
    key: validator.string().required(),
    gm: validator.string().required(),
    etc: validator.string().required(),
  };
  const validationResult = validator.validate({ key, gm, etc },
    validationRule);
  if (validationResult.error) {
    ctx.throw(HttpStatus.BAD_REQUEST,
      validationResult.error.details[0].message);
  }

  const res = await service.create(req);
  ctx.body = res ;
  ctx.status = HttpStatus.CREATED;
}

async function show(ctx) {
  const { project } = ctx.params;
  const validationRule = {
    project: validator.string().required(),
  };
  const validationResult = validator.validate({ project }, validationRule);
  if (validationResult.error) {
    ctx.throw(HttpStatus.BAD_REQUEST,
      validationResult.error.details[0].message);
    logger.error(validationResult.error.details[0].message);
  }
  const res = await service.show(project);
  logger.info(`list show ${project}`);
  ctx.body = res;
  ctx.status = HttpStatus.OK;
}


module.exports = {
  create,
  show,
};
