const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    lastName: {
        type: String
    },
    firstName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('User', User);
