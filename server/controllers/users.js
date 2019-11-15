var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

require('../models/user');
const User = mongoose.model('User');



module.exports = {
    index: (req,res) => {
        User.find({}, (err, users) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.render('index', {all_users: users});
            }
        })
    },

    game: (req, res) => {
        var users_array = [
            {name: "Jonte", email: "jonte@jonte.jonte"},
            {name: "Monte", email: "jonte@jonte.jonte"}
        ]
        if (req.session.email){
            console.log(req.session.email);
            User.findOne({email: req.session.email}, function (err, user) {
                console.log(user);
                res.render('game', {user: user});
            });
        }
        else{
            req.flash('registration', "Please log in!")
            res.redirect('/')
        }
    },

    register: (req,res) => {
        res.render('register');
    },

    create: (req,res) => {
        User.countDocuments({email: req.body.email}, function(err, user){
            if(user > 0){
                req.flash('registration', 'Email is already registered')
                res.redirect('/register')
            } else {
                console.log("POST DATA", req.body);
                var user = new User();
                user.first_name = req.body.first_name;
                user.last_name = req.body.last_name;
                user.email = req.body.email;
                user.birthday = req.body.birthday;
                console.log("the password length is " + req.body.password.length);
                if (req.body.password.length < 6) {
                    req.flash("registration", "Password must be at least 7 characters long");
                }
                if (req.body.password === req.body.confirm) {
                    bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        user.password = hashed_password;
                        user.save(function(err) {
                            if(err){
                                for (var key in err.errors) {
                                    req.flash('registration', err.errors[key].message);
                                }
                                console.log("Registration eror");
                                res.redirect('/register');
                            } else {
                                req.session.email = user.email;
                                req.session.id = user._id;
                                console.log(user._id);
                                console.log("user successfully added!");
                                res.redirect('/game');
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
                } else {
                    req.flash('registration', "Passwords do not match");
                    res.redirect('/register');
                }
            }
        })
    },

    login: (req,res) => {
        if(req.body.password.length < 1) {
            req.flash('registration', 'Invalid credentials');
            res.redirect('/')
        }
        else {
            console.log("POST DATA", req.body);
            User.countDocuments({email:req.body.email}, (err, user) => {
                if(user === 0){
                    req.flash('registration', 'user does not exist. Please register.');
                    res.redirect('/register');
                }
                else {
                    User.findOne({email: req.body.email}, (err, user) => {
                        bcrypt.compare(req.body.password, user.password)
                        .then(result => {
                            console.log(result);
                            if(result == true){
                                req.session.email = user.email;
                                res.redirect('/game')
                            }
                            else {
                                req.flash('registration', 'Invalid credentials');
                                res.redirect('/');
                            }
                        })
                    })
                }
            })
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

}