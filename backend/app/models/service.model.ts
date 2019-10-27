// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

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
        type: File
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
