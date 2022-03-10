const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add text']
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', TodoSchema)