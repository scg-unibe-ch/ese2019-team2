// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

let UserSchema = new Schema({
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
    },
    role: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);
