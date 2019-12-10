// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
   name: {
      type: String
   }
   ,
   img: {
      type: String
   }
});
module.exports = mongoose.model('Category', CategorySchema);
