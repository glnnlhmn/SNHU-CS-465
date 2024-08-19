const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (username, password, done) => {
        const q = await User
            .findOne({ email: username })
            .exec();

        // Uncomment the following line to see query results in the console.
        // console.log(q);

        if (!q)  // If the DB query returns no results, the user is not found. 
            {
                return done(null, false, {message: 'Incorrect username'});
            }
        if (!q.validPassword(password)) // If the password is incorrect, return a message.
            {
                return done(null, false, {message: 'Incorrect password'});
            }
        return done(null, q); // If the user is found and the password is correct, return the user object.
    }
));