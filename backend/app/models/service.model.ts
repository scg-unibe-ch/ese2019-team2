// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

let ServiceSchema = new Schema({
   < <<<<<< HEAD
      category
:
{
   type: String
}
,
subCategory: {
   type: String
}
,
userID: {
   type: String
}
,
username: {
   type: String
}
,
serviceName: {
   type: String
}
,
img: {
   type: Array
}
,
price: {
   type: Number
}
,
description: {
   type: String
}
,
location: {
   type: String
}
,
maxPeople: {
   type: Number
}
,
street: {
   type: String
}
,
city: {
   type: String
}
,
zip: {
   type: String
}
,
phone: {
   type: String
}
,
rating: {
   type: Number
}
======
=
   category
:
{
   type: String
}
,
subCategory: {
   type: String
}
,
userID: {
   type: String
}
,
username: {
   type: String
}
,
serviceName: {
   type: String
}
,
img: {
   type: String
}
,
price: {
   type: Number
}
,
description: {
   type: String
}
,
location: {
   type: String
}
,
maxPeople: {
   type: Number
}
,
street: {
   type: String
}
,
city: {
   type: String
}
,
zip: {
   type: String
}
,
phone: {
   type: String
}
,
rating: {
   type: Number
}
>>>>>>>
profil - edit
})
;

module.exports = mongoose.model('Service', ServiceSchema);
