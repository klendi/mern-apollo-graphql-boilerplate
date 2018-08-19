const mongoose = require('mongoose')
const { Schema } = mongoose

const UserScheme = new Schema({
  _id: Schema.Types.ObjectId,
  name: String
})

mongoose.model('User', UserScheme)
