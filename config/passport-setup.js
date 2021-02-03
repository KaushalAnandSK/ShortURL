const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys =require('./keys');
const oAuth=require('../models/OAuth');


passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    oAuth.findById(id).then((user) => {
        done(null,user);
    });
});

passport.use(
    new GoogleStrategy({
        //options for google strategy.
        callbackURL:'/user/google/redirect',
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        //Chech if user already exists in our db.
        oAuth.findOne({googleId : profile.id}).then((currentUser) => {
            if(currentUser){
                //already have the user
                console.log('user is:',currentUser);
                done(null,currentUser);
            }else{
                //if not, created user in our db
                new oAuth({
                    username : profile.displayName,
                    googleId : profile.id
                }).save().then( (newUser) => {
                    console.log('Created new user'+newUser);
                    done(null,newUser);
                });
            }
        });   
    })
)

