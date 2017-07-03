/**
 * Created by T897060 on 07/05/2017.
 */
var User = require("./user.model");
var jwt = require('jsonwebtoken');
var config = require('../config');
var Auth = require('./authentication.model');
var exports = module.exports = {};


exports.createAdminUser = function (username, pass) {
    var adminUser = new User(
        {
            name: username,
            password: pass,
            admin: true
        }
    );

    adminUser.save(function (error) {
            if (error) {
                console.log(error);
                throw error;
            }
            ;
            console.log('User saved successfully');
        }
    );
};

exports.getAllUsers = function (req, res) {
    User.find({}, function (error, users) {
            res.json(users);
        }
    );
};


exports.authenticateCredentials = function (req, res) {
    User.findOne({name: req.body.name}, function (error, user) {
            if (error) {
                throw error;
            }

            if (user && (user.password === req.body.password)) {
                var token = jwt.sign(user, config.secret,
                    {
                        expiresIn: '2 days'
                    }
                );
                var authenticationResponse = new Auth("Enjoy your token", token);
                res.json(authenticationResponse);
            } else {
                res.json(new Auth("Authentication failed", undefined));
            }
        }
    );
};