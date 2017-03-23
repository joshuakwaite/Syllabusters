"use strict";
var express = require("express");
var Course = require("../models/syllabus");

var courseRoute = express.Router();


courseRoute.route("/")
    .get(function (req, res) {
        Course.find({user: req.user._id}, function (err, course) {
                if (err) return res.status(500).send(err);
                res.send(course);
            });
    })

    .post(function (req, res) {
        var course = new Course(req.body);

        course.user = req.user;

        course.save(function (err) {
            if (err)
                return res.status(500).send(err);
            res.send(course);
        });


    });

courseRoute.route("/all")
    .get(function (req, res) {
        Course.find({}, function (err, course) {
            if (err) return res.status(500).send(err);
            res.send(course);
        });
    })

courseRoute.delete("/:id", function (req, res) {
    Course.findOneAndRemove({_id: req.params.id, user: req.user._id},
        function (err, course) {
            if (err)
                return res.status(500).send(err);
            res.send({
                message: "Successfully deleted your course",
                success: true
            });
        })

});

courseRoute.put("/:id", function (req, res) {
    Course.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, function (err, updatedCourse) {
            if (err)
                return res.status(500).send(err);
            res.send(updatedCourse)
        });
});

courseRoute.put("/addStudent/:id", function (req, res) {
    req.body.user.push(req.user);
    Course.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, updatedCourse) {
        if (err)
            return res.status(500).send(err);
        res.send(updatedCourse)
    });
});

courseRoute.get("/:id", function (req, res) {
    Course.findOne({_id: req.params.id, user: req.user._id}, function (err, course) {
            if (err) return res.status(500).send(err);
            res.send(course);
        });
});


module.exports = courseRoute;


//TO POPULATE

// courseRoute.get("/:id", function (req, res) {
//     Course.findOne({_id: req.params.id, user: req.user._id})
//         .populate("assignments")
//         .exec(function (err, course) {
//             if (err) return res.status(500).send(err);
//             res.send(course);
//         });
// });