const Model = require('./Model');
const User = require('./User');

let MessageSchema = {
  from : User,
  to : User,
  message : String,
  sent : Date
};

function Message() {
  Model.call(this, Message);
}

Model.extend(Message);
module.exports = Message;