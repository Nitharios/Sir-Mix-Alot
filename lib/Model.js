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
  if(!this.id) {
    this.id = this.constructor.getNextId();
    store[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function() {
  let index = this.constructor.find(this.id);
  store[this.constructor.name].splice(index, 1);
  

  // for (let i = 0; i < store[this.constructor.name].length; i++) {
  //   if (this.id) {
  //     return store[this.constructor.name].splice(i, 1);
  //   }
  // }
};

Model.getNextId = function() {
  return store[this.name].length+1;
  // return store[this.constructor.name].length+1;
};

Model.find = function(id) {
  for (let i = 0; i < store[this.name].length; i++) {
    if (store[this.name][i].id === id) return store[this.name][i];
  }
  return null;
};

Model.extend = function(klass) {
  for (let i in Model) {
    klass[i] = Model[i];
  }

  for (let i in Model.prototype) {
    klass.prototype[i] = Model.prototype[i];
  }
};

module.exports = Model;