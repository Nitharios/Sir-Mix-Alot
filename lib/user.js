// jshint esversion:6
const Model = require('./Model');

let UserScheme = {
  username : 'String',
  password : 'String'
};

function User() {
  Model.call(this);
}

Model.extend(User);