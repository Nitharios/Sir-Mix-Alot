// jshint esversion:6

const DataStore = require('./DataStore.js');
const store = DataStore.store;

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (let i in schema) {
    this[i] = null;
  }

  if (!store.Model) store.Model = [];
}

Model.prototype.save = function() {
  this.store.id = null;
};

Model.prototype.destroy = function() {
  this.store.Model = null;
};

Model.getNextId = function() {
  return store.Model.length+1;
};

Model.find = function(id) {
  for (var i in store.Model) {
    if (i === id) return Model[i];
  }
};

Model.extend = function(klass) {
  for (let i in Model) {
    klass[i] = Model[i];
  }

  for (let j in Model.prototype) {
    klass[j] = Model.prototype[j];
  }
};

module.exports = Model;