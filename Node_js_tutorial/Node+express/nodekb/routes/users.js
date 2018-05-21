const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

// Bring in user model
let User = require('../models/user');

// Register form
router.get('/register', function (req, res) {
  res.render('register');
});

// Register Process
router.post('/register',
[
  check('name', 'Name is required').isLength({min: 1}),
  check('email', 'Email is required').isLength({min: 1}),
  check('email', 'Email is not valid').isEmail(),
  check('username', 'Username is required').isLength({min: 1}),
  check('password', 'Password is required').isLength({min: 1}),
  check('password2', 'Please confirm password').custom((value, {req, loc, path}) => {
    if (value !== req.body.password) {
      throw new Error("Passwords don't match");
    } else { return value; }
  })
],
  function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('register', {
        errors: errors.array()
      });
    }
    let newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if(err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err) {
            console.log(err);
            return;
          } else {
            req.flash('success', 'You are now registerd and can log in');
            res.redirect('/users/login');
          }
        });
      });
    });
  }
);

router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;