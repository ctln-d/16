const express = require("express");
const router = express.Router();

const User = require("../models/User");

// login
router.post("/login", (req, res) => {
    let {firstName, lastIn} = req.body;
    firstName = firstName.trim().toLowerCase();
    lastIn = lastIn.trim().toLowerCase();

    if (firstName === "" || lastIn === "") {
        return res.json({
            status: "FAILED",
            message: "empty credentials"
        });
    } else if (lastIn.length > 1) {
        return res.json({
            status: "FAILED",
            message: "invalid last initial"
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
router.post("/rsvp", (req, res) => {
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

module.exports = router;