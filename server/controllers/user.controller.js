import mongoose from 'mongoose'

require('../models/User')
const User = mongoose.model('User')

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find()
    .sort('-dateAdded')
    .exec((err, users) => {
      if (err) {
        res.status(500).send(err)
      }
      res.json({ users })
    })
}
