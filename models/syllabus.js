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
        objectName: String,
        week: String,
        order: Number,
        link: String,
        description: String
    }],
    exercises: [{
        objectName: String,
        week: String,
        link: String,
        order: Number,
        description: String
    }],
    projects: [{
        objectName: String,
        week: String,
        link: String,
        order: Number,
        description: String
    }],
    warmups: [{
        objectName: String,
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