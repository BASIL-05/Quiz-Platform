const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
}, {
    versionKey: false // Disable the __v field
});

module.exports = mongoose.model('users', userSchema);
