const mongoose = require("mongoose");
const Schema = mongose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
