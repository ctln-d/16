const express = require("express");
const router = express.Router();

const User = require("../models/User");

// login
router.post("/user/login", (req, res) => {
    let {firstName, lastIn} = req.body;
    firstName = firstName.trim().toLowerCase();
    lastIn = lastIn.trim().toLowerCase();

    if (firstName === "" || password === "") {
        return res.json({
            status: "FAILED",
            message: "empty credentials"
        });
    }

    User.findOne({ firstName })
        .then(user => {
            if (!user) {
                return res.json({
                    status: "FAILED",
                    message: "name not found"
                });
            }

            if (lastIn === user.lastIn) {
                return res.json({
                    status: "SUCCESS",
                    message: "login successful",
                    userId: user._id
                });
            } else {
                return res.json({
                    status: "FAILED",
                    message: "last initial does not match"
                });
            }

        })
        .catch(err => {
            console.log(err);
            return res.json({
                status: "FAILED",
                message: err.message
            });
        })
})

// rsvp
router.post("/user/rsvp", (req, res) => {
    User.updateOne(
        { firstName: req.body.firstName, lastIn: req.body.lastIn },
        { $set: { going: req.body.going } }
    )
        .then(result => {
            return res.json({
                status: "SUCCESS",
                message: "updated"
            });
        })
        .catch(err => {
            console.log(err);
            return res.json({
                status: "FAILED",
                message: err.message
            });
        })
})