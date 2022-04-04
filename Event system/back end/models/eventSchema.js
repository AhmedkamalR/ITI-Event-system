const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new mongoose.Schema({

    _id: Number,
    title: String,
    date: String,
    mainspeaker: {
        type: mongoose.Types.ObjectId,
        ref: "speakers"
    },

    speakers: [{ type: mongoose.Types.ObjectId, ref: "speakers" }],
    students: [{ type: Number, ref: "students" }]

})
schema.plugin(AutoIncrement, { id: "event_id" });
module.exports = mongoose.model("event", schema);
