const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
},
  id: {
    type: Number,
    required: true
},
});

const StudentModule = 
  mongoose.model("Student", StudentSchema);

module.exports = StudentModule;