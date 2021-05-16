'use strict'

let mongoose = require('mongoose')
let Photo = mongoose.model('Photo')

exports.listAllPhotos = function(req,res){

  console.log('ooooh')

    Photo.find(function(err, photo) {
        if (err) res.send(err);
        res.json(photo);
      })
}

exports.addPhoto = function(req,res){

}


exports.getPhoto = function(req,res){

}

exports.deletePhoto = function(req,res){

}