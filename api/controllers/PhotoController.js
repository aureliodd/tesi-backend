'use strict'

let mongoose = require('mongoose')
let Photo = mongoose.model('Photo')

exports.listAllPhotos = function (req, res) {

  Photo.find(function (err, photo) {
    if (err) res.send(err);
    res.json(photo);
  })
}

exports.addPhoto = function (req, res) {

  console.log("params", req.params)
  console.log("body", req.body)

  let newPhoto = new Photo(req.body);

  newPhoto.save(function (err) {
    if (err)
      res.send(err);
    res.json({
      result: 'success'
    });
  })
}

exports.getPhoto = function (req, res) {
  Photo.findOne({ _id: req.params.photoId }, function(err, photo) {
    if (err) res.send(err);
    res.json(photo);
  })
}

exports.deletePhoto = function (req, res) {
  Photo.deleteOne({ _id: req.params.photoId },
    function (err) {
      if (err) { res.send(err); return }

      res.json({ message: 'ok' })
    })
}

exports.updatePhoto = function (req, res) {

  console.log('body', req.body)
  console.log('params', req.params.photoId)

  if (req.body && req.params.photoId) {
    Post.findOneAndUpdate({ _id: req.params.photoId },
      { $set: req.body },
      function (err) {
        if (err)
          res.send(err)
        res.json({ message: 'stato modificato a fullfilled' })
      })
  } else
    res.json({ message: "please insert data" })
}