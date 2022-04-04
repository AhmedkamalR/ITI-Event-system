const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({
     _id: Number,
     fullname: String,
     email:String,
     image: String,
     address: String,
     age: String,
     birthDate: Date,
     department: String,
     // isMarried: Boolean,
     GBA: String,
})


schema.plugin(AutoIncrement,{id:"student_id"});
module.exports = mongoose.model("student", schema);
