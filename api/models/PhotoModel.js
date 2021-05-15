'use strict'

let mongoose = require('mongoose')

let Schema = mongoose.Schema

var PhotoSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    resultName: {
        type: String,
        required: 'Non è stato indicato il risultato'
    },

    resultGravity: {
        type: Number,
        required: 'Non è stata indicata la gravità'
    },

    photo: {
        type: Buffer,
        required: 'Non è stata allegata la foto'
    }
})

module.exports = mongoose.model('Photo', PhotoSchema)