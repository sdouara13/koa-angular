const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const List = new Schema({
  project: String,
  key: String,
  etc: { type: String, default: '' },
  remark: { type: String, default: '' },
}, { timestamps: true });
List.index({ project: 1 });

List.statics.findByProject = function findByProject(project) {
  return this.find({ project }, { __v: 0 }).exec();
};
List.statics.findByKey = function findByKey(project, key) {
  return this.find({ project, key }).exec();
};
List.statics.updateModel = function updateModel(reqParams) {
  return this.update(
    { project: reqParams.project, key: reqParams.key },
    reqParams,
    { upsert: true });
};
List.statics.addModel = function addModel(reqParams) {
  return List.save(reqParams);
};
List.statics.deleteModel = function deleteModel(reqParams) {
  const result = this.find(reqParams).exec();
  return result.drop();
};

const ListModel = mongoose.model('List', List);

module.exports = {
  ListModel,
};
