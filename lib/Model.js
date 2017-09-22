// jshint esversion:6

const DataStore = require('./DataStore.js');

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (let i in schema) {
    this[i] = null;
  }

  if (!DataStore.store.Model) DataStore.store.Model = [];
}

module.exports = Model;