const express = require('express');
const signUpRoute = express.Router();

// Signup model
let SignUpModel = require('../models/SignUp');

signUpRoute.route('/').get((req, res) => {
    SignUpModel.find().then((error, data) => {
        if (error) {
            res.send(error)
        }
        res.send(data)
   })
 });

 signUpRoute.route('/create-signup').post((req, res, next) => {
    SignUpModel.create(req.body).then((error, data) => {
        if (error) {
            res.send(error)
        }
        res.send(data)
  })
});



module.exports = signUpRoute;