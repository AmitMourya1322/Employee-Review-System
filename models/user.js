const mongoose = require('mongoose');

//User Schema
const User = new mongoose.Schema({
    name: {
        type: String,

    },

    email: {
        type: String,

    },

    password: {
        type: String,

    },

    confirmPassword: {
        type: String,

    },

    //admin or not
    role: {
        type: Boolean,
        default: false,
    },

    myReviews: [{

        from: String,  //email
        reviews: String,
    }],

    toReview: [{
        to: String, //email
        review: String,
    }],


}, {
    timestamps: true
})

const user = mongoose.model('User', User);
module.exports = user;