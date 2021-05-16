'use strict'

let mongoose = require('mongoose')
let Photo = mongoose.model('Photo')

exports.listAllPhotos = function (req, res) {

  console.log('mostro')

  Photo.find(function (err, photo) {
    if (err) res.send(err);
    res.json(photo);
  })
}

exports.addPhoto = function (req, res) {
  console.log(req.body)

  let newPhoto = new Photo(req.body);

  newPhoto.save(function (err, photo) {
    if (err) 
      res.send(err);
    res.json("aa",photo);
  })
}


exports.getPhoto = function (req, res) {

}

exports.deletePhoto = function (req, res) {

}