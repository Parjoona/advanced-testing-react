const passport = require('password')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

// Options for JWT strategy
const jwtOptions = {}

// JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

  // Find any user with the right ID
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false)

    user ? done(null, user) : done(null, false)
  })
})

// Use strategy in passport