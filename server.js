var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require ("body-parser");
var morgan = require("morgan");
// var expressJwt = require("express-jwt");
// var config = require("./config");
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname)));

app.use(morgan("dev"));

app.use(bodyParser.json());

// app.use("/auth", require("./routes/auth-routes"));

// app.use("/api", expressJwt({secret: config.secret}));

// app.use("/api/courses", require("./routes/routes"));

mongoose.connect("mongodb://localhost/syllabuster", function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database!")
});

app.listen(port, function(req, res) {
    console.log("This app is listening on " + port)
});