const {Schema, model} = require('mongoose')

const schema = new Schema({                              // create schema like django model
  title: {
    type: String,                                        // set data type
    required: true                                       // required
  },
  completed: {
    type: Boolean,
    default: false
  }
})




module.exports = model('Todo', schema)


