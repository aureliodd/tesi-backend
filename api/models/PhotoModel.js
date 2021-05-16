'use strict'

let mongoose = require('mongoose')

let Schema = mongoose.Schema

var PhotoSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: [{
            type: String,
            enum: ['pending', 'fulfilled']
          }],
          default: ['pending']
    },

    moreInfo: {
        type: String,
    },

    resultName: {
        type: String,
        required: 'Errore. Dati importanti mancanti: risultato dell\'analisi'
    },

    resultGravity: {
        type: Number,
        required: 'Errore. Dati importanti mancanti: gravità dell\'analisi'
    },

    photo: { //da vedere se funziona lol
        data: Buffer,
        contentType: String,
        required: 'Errore. Dati importanti mancanti: foto'
    },

    phoneNumber: {
        type: String
    },

    email: {
        type: String
    }
})

module.exports = mongoose.model('Photo', PhotoSchema)