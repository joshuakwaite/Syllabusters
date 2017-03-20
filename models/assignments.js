var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({

    objectType: {
        type: String,
        required: true
    },
    objectName: {
        type: String,
        required: true
    },
    week: String,
    dayInWeek: Number,
    link: String,
    description: String,
    dueDate: Date,
    startDate: Date
});

module.exports = mongoose.model("Assignment", assignmentSchema);