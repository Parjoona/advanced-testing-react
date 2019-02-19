const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

// When saving
userSchema.pre('save', (next) => {
  const user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

// our User model gets a method called comparePassword
userSchema.methods.comparePassword = (canidatePassword, cb) => {
  // Behind the scenes compare
  bcrypt.compare(canidatePassword, this.password, (err, match) => {
    if (err) return cb(err)

    // if match is true, user is accepted
    cb(null, match)
  })
}

const model = mongoose.model('user', userSchema)

module.exports = model