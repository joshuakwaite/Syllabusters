var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema ({

    name: [{
        type: String,
        required: true
    }],
    lessons: [{
        name: String,
        link: String,
        description: String
    }],
    exercises: [{
        name: String,
        link: String,
        description: String
    }],
    projects: [{
        name: String,
        link: String,
        description: String
    }],
    warmups: [{
        name: String,
        link: String,
        description: String
    }],
    weeknotes: [{
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