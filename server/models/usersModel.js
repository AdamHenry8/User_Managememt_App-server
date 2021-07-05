const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    street: String,
    city: String,
    zipcode: Number,
    tasks: [{title: String, completed: Boolean}],
    posts: [{title: String, body: String}]
},
{
    versionKey: false
});

module.exports = mongoose.model('users', userSchema);