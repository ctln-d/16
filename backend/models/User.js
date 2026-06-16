const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastIn: String,
    going: boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;