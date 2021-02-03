const express=require('express');
const router =express.Router();
const UserController = require("../Controllers/users");
const passport =require('passport');
const passportSetUp = require('../config/passport-setup');
const { route } = require('./shortUrl');
const { google } = require('../config/keys');

//Login user
router.post('/login', UserController.login);

//auth login
router.get('/authLogin', UserController.authLogin);

//auth logout
router.get('/authLogout', UserController.authLogout);

//auth with google
router.get('/google', passport.authenticate('google',{
    scope : ['profile']
}));

//callback route for google to redirect.
router.get('/google/redirect', passport.authenticate('google') , (req,res) => {
    res.send('you reached the callback URL');
});

//Submiting a user.
router.post('/register', UserController.registerUser);

//Getting all registered user.
router.get('/register/list', UserController.getRegisteredUser);

//Getting specific user.
router.get('/:userId', UserController.getUserById);

//updating user.
router.put('/update/:userId', UserController.updateUserById);

//deleting specific post.
router.delete('/remove/:userId', UserController.removeUserById);

//mark status of user.
router.patch('/:userId/status/:status', UserController.updateUserStatus);

module.exports =router;