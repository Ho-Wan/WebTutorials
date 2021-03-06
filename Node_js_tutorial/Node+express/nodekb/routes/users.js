const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const passport = require('passport');

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

// Login form
router.get('/login', function(req, res) {
  res.render('login');
});

// Login Process
router.post('/login', function(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: 'Invalid username or password.',
    successFlash: 'You are now logged in!'
  })(req, res, next);
});

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;