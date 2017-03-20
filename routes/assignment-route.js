var express = require("express");
var assignmentRoute = express.Router();
var Assignment = require("../models/assignments");



assignmentRoute.route("/")
    .get(function (req, res) {
        Assignment.find({}, function (err, assignment) {
                if (err) return res.status(500).send(err);
                res.send(assignment);
            });
    })

    .post(function (req, res) {
        var assignment = new Assignment(req.body);

        assignment.save(function (err) {
            if (err)
                return res.status(500).send(err);
            res.send(assignment);
        });


    });

assignmentRoute.delete("/:id", function (req, res) {
    Assignment.findOneAndRemove({_id: req.params.id},
        function (err, assignment) {
            if (err)
                return res.status(500).send(err);
            res.send({
                message: "Successfully deleted your assignment",
                success: true
            });
        })

});

assignmentRoute.put("/:id", function (req, res) {
    Assignment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, updatedAssignment) {
        if (err)
            return res.status(500).send(err);
        res.send(updatedAssignment)
    });
});

assignmentRoute.get("/:id", function (req, res) {
    Assignment.findOne({_id: req.params.id}, function (err, assignment) {
            if (err) return res.status(500).send(err);
            res.send(assignment);
        });
});

module.exports = assignmentRoute;