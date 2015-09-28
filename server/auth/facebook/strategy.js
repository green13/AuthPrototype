var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./../config');


passport.use(new FacebookStrategy({
        clientID: config.facebook.clientId,
        clientSecret: config.facebook.clientDecret,
        callbackURL:  config.facebook.callbackURL,
        passReqToCallback : true
    },
    function(req, accessToken, refreshToken, profile, done) {
        done(new Error('not implemented')); // TODO ���������� � �������� ������������ �� id ���������� ����


        // ================================================================================
        //// check if the user is already logged in
        //if (!req.user) {
        //    // ���� ������������ �� profile.id, ���� �������, �� ������ ���
        //    // ����� ���� ����� �������� ����� ��� ����, �� ������ ��� � ������ �����
        //
        //    User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
        //        if (user) {
        //            // if there is a user id already but no token (user was linked at one point and then removed)
        //        } else {
        //            // if there is no user, create them
        //        }
        //    });
        //} else {
        //    // user already exists and is logged in, we have to link accounts
        //}


        // ================================================================================
        //// ������ ������:
        //User.findOne({
        //    'google.id': profile.id
        //}, function(err, user) {
        //    if (!user) {
        //        user = new User({
        //            name: profile.displayName,
        //            email: profile.emails[0].value,
        //            role: 'user',
        //            username: profile.username,
        //            provider: 'google',
        //            google: profile._json
        //        });
        //        user.save(function(err) {
        //            if (err) done(err);
        //            return done(err, user);
        //        });
        //    } else {
        //        return done(err, user);
        //    }
        //});
    }
));