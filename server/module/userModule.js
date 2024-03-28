const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    number: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 30
    }

})

const User = mongoose.model('User',userSchema);

module.exports = User;