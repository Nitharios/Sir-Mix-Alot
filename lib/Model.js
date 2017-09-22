// jshint esversion:6

const DataStore = require('./DataStore');
const store = DataStore.store;

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (let i in schema) {
    this[i] = null;
  }

  if (!store[this.constructor.name]) store[this.constructor.name] = [];
}

Model.prototype.save = function() {
  if(!store[this.constructor.name]) store[this.constructor.name].push();
};

Model.prototype.destroy = function() {
  for (let i = 0; i < store[this.constructor.name].length; i++) {
    if (store[this.constructor.name]) {
      return store[this.constructor.name].splice(i, 1);
    }
  }
};

Model.getNextId = function() {
  return store[this.constructor.name].length+1;
};

Model.find = function(id) {
  for (let i in store.Model) {
    if (i === id) return Model[i];
  }
};

Model.extend = function(klass) {
  for (let i in this.constructor.name) {
    klass[i] = Model[i];
  }
};

module.exports = Model;