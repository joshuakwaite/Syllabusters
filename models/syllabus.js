var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema ({

    name: {
        type: String,
        required: true
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
    lessons: [{
        name: String,
        week: String,
        order: Number,
        link: String,
        description: String
    }],
    exercises: [{
        name: String,
        week: String,
        link: String,
        order: Number,
        description: String
    }],
    projects: [{
        name: String,
        week: String,
        link: String,
        order: Number,
        description: String
    }],
    warmups: [{
        name: String,
        week: String,
        link: String,
        order: Number,
        description: String
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