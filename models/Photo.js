const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    name: {
      type: String,
      default: ''
    },
    url: {
        type: String,
        default: ''
    },
    owner: {
        ref: 'users',
        type: Schema.Types.ObjectID
    }
})

module.exports = mongoose.model('photos', PhotoSchema)