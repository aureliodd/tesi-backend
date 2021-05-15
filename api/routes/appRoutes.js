'use strict'

module.exports = function(app) {
    let photos = require("../controllers/PhotoController")

    //endpoints
    app.route('/photos')
        .post(photos.addPhoto)
        .get(photos.listAllPhotos)

    app.route('/photos/:photoId')
        .get(photos.getPhoto)
        .delete(photos.deletePhoto)

}