"use strict";
var express = require ("express");
var Admin = require("../models/adminModel");
var adminRoute = express.Router();



adminRoute.post("/", function (req, res) {
    var admin = new Admin(req.body);

    admin.save(function (err, admin){
        if (err)
            return res.status(500).send;
        console.log(admin);
        res.send(admin);
    });

    adminRoute.route("/")
        .get(function (req, res) {
            Admin.find(function (err, admin) {
                if (err)
                    return res.status(500).send(err);
                res.send(admin);
            });
        })



});

adminRoute.delete("/:adminId", function (req, res) {
    Admin.findOneAndRemove({_id: req.params.adminId},
        function (err, admin) {
            if (err)
                return res.status(500).send(err);
            res.send({message: "Successfully deleted your account",
                success: true});
        })

});

adminRoute.put("/:adminId", function (req, res) {
    Admin.findOneAndUpdate(req.params.adminId,
        req.body, {new: true}, function (err, updatedAdmin) {
            if (err)
                return res.status(500).send(err);
            res.send(updatedAdmin)
        });
});

adminRoute.get("/:adminId", function (req, res) {
    Admin.findOneById(req.params.adminId,
        req.body, function (err, admin) {
            if (err)
                return res.status(500).send(err);
            res.send(admin);
        })
});


module.exports = adminRoute;
