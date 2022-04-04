const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = new mongoose.Schema({
  _id: Number,
  name: String,
  phone: String,
  spec: String,
  image:String,
  age: String,
  // rating: { type: Number, required: true },
});

schema.plugin(AutoIncrement,{id:"doctor_id"});
module.exports = mongoose.model("doctor", schema);
