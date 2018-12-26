let mongoose = require('mongoose');

let waitingListSchema = new mongoose.Schema({
    email: String,
    whiskey_type: String,
    given_name: String,
    family_name: String
  });

  module.exports = mongoose.model('WaitingList', waitingListSchema);
  