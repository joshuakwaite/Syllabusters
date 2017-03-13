var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema ({

    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("User", userSchema);