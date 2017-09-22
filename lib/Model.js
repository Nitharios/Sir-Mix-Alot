// jshint esversion:6

const DataStore = require('./DataStore.js');
let temp = DataStore.store;

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (let i in schema) {
    Model.prototype[i] = null;
  }
}

module.exports = Model;