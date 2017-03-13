"use strict";
var express = require("express");
var User = require("../models/user");
var userRoute = express.Router();

userRoute.route("/")
    .get(function (req, res) {
        User.find(function (err, user) {
            if (err)
                return res.status(500).send(err);
            res.send(user);
        });

    })

    .post(function (req, res) {
        var user = new User(req.body);
        
        user.save(function (err) {
            if (err)
                return res.status(500).send(err);
            res.send(user);
        });
    });


userRoute.delete("/:userId", function (req, res) {
    User.findOneAndRemove({_id: req.params.userId},
        function (err, user) {
            if (err)
                return res.status(500).send(err);
            res.send({
                message: "Successfully deleted your account",
                success: true
            });
        })

});

userRoute.put("/:userId", function (req, res) {
    User.findOneAndUpdate(req.params.userId,
        req.body, {new: true}, function (err, updatedUser) {
            if (err)
                return res.status(500).send(err);
            res.send(updatedUser)
        });
});

userRoute.get("/:userId", function (req, res) {
    User.findById(req.params.userId,
        req.body, function (err, user) {
            if (err)
                return res.status(500).send(err);
            res.send(user);
        })
});


module.exports = userRoute;