var mongoose = require('mongoose');
var uniqueValid = require('mongoose-unique-validator');

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

var LogRegSchema = new mongoose.Schema({
    first_name: {type: String, required: "Please enter your first name", maxlength: 45},
    last_name: {type: String, required: "Please enter your last name", maxlength: 45},
    email: {type: String, required: "Please enter your email", minlength: 3},
    password: {type: String, required: "Please enter your password", minlength: 7},
    wallet: {type: Number}
}, {timestamps: true});
mongoose.model('User', LogRegSchema);
var User = mongoose.model('User');