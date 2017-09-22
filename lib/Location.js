// jshint esversion:6
const Model = require('./Model');

let LocationSchema = {
  lng : Number,
  lat : Number
};

function Location() {
  Model.call(this, LocationSchema);
}

Model.extend(Location);
module.exports = Location;