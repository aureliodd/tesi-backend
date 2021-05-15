const express = require('express')
const mongoose = require('mongoose')
bodyParser = require('body-parser')

Photo = require("./api/models/PhotoModel") 

app = express()
const port = process.env.port  || 3000

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true) //altrimenti dà warning
mongoose.set('useUnifiedTopology', true) //same
mongoose.connect('mongodb://localhost/MedicalCenterDb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes/appRoutes')
routes(app)

app.listen(port)
console.log('Server avviato nella porta: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})