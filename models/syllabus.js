var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }],
    weekNotes: [{
        weekNumber: Number,
        note: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Course", courseSchema);