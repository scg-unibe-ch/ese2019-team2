// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
    category: {
        type: String
    },
    subCategory: {
        type: String
    },
    userID: {
        type: String
    },
    title: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    }
});

module.exports = mongoose.model('Service', ServiceSchema);
