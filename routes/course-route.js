"use strict";
var express = require("express");
var Course = require("../models/syllabus");
var courseRoute = express.Router();


courseRoute.route("/")
    .get(function (req, res) {
        Course.find(function (err, course) {
            if (err)
                return res.status(500).send(err);
            res.send(course);
        });
    })

    .post(function (req, res) {
        var course = new Course(req.body);

        course.save(function (err) {
            if (err)
                return res.status(500).send(err);
            res.send(course);
        });


    });

courseRoute.delete("/:courseId", function (req, res) {
    Course.findOneAndRemove({_id: req.params.courseId},
        function (err, course) {
            if (err)
                return res.status(500).send(err);
            res.send({
                message: "Successfully deleted your course",
                success: true
            });
        })

});

courseRoute.put("/:courseId", function (req, res) {
    Course.findOneAndUpdate(req.params.courseId,
        req.body, {new: true}, function (err, updatedCourse) {
            if (err)
                return res.status(500).send(err);
            res.send(updatedCourse)
        });
});

courseRoute.get("/:courseId", function (req, res) {
    Course.findById(req.params.courseId,
        req.body, function (err, course) {
            if (err)
                return res.status(500).send(err);
            res.send(course);
        })
});


module.exports = courseRoute;
