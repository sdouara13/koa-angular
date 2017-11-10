// const logger = require('koa-log4').getLogger('service.result');
const HTTPStatus = require('http-status-codes');

const KError = require('../../lib/error');
const { ListModel } = require('../model/list');

async function create(reqParams) {
  const isExistTest = await ListModel.findByKey(reqParams.project, reqParams.key);
  if (!isExistTest) {
    throw new KError(`Key ${reqParams.project}: ${reqParams.key} is incorrect`, HTTPStatus.BAD_REQUEST);
  }
  await ListModel.addModel(reqParams);
}

async function show(project) {
  const results = await ListModel.findByProject(project);
  if (!results) {
    return [];
  }
  return results;
}

module.exports = {
  create,
  show,
};
