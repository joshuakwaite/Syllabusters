var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({

    objectType: String,
    objectName: String,
    week: String,
    courseLink: String,
    dayInWeek: Number,
    description: String,
    dueDate: Date,
    startDate: Date,
    notes: String,
    completed: Boolean

});

module.exports = mongoose.model("Assignment", assignmentSchema);