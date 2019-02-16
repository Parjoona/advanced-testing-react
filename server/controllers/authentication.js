const User = require('../models/user')

exports.signup = (req, res, next) => {
  const email = req.body.email
  const pass = req.body.password

  if (!email || !pass) return res.status(422).send({
    "error": "Requires email and Password"
  })

  User.findOne({
    email: email
  }, (err, existingUser) => {
    // Check error
    if (err) {
      return next(err)
    }

    // Check if user exist
    if (existingUser) {
      return res.status(422).send({
        error: 'Email in use'
      })
    }

    const user = new User({
      email: email,
      password: pass
    })

    user.save((err) => {
      if (err) {
        return next(err)
      }

      res.json({
        success: true
      })
    })

  })
}