var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require ("body-parser");
var morgan = require("morgan");
// var expressJwt = require("express-jwt");
// var config = require("./config");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));



app.use("/user", require("./routes/user-route"));

// app.use("/api", expressJwt({secret: config.secret}));

app.use("/course", require("./routes/course-route"));

app.use("/admin", require("./routes/admin-route"));

mongoose.connect("mongodb://localhost/syllabuster", function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database!")
});

app.listen(port, function(req, res) {
    console.log("This app is listening on " + port)
});