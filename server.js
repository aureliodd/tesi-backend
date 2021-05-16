const express = require('express')

var app = express()
const port = process.env.PORT || 3000

Photo = require("./api/models/PhotoModel")

const mongoose = require('mongoose');
const uri = "mongodb+srv://durso_aurelio:MYSNJ6qYumNBaGCp@cluster0.vgxik.mongodb.net/MedicalCenterDb?retryWrites=true&w=majority";
mongoose.set('useCreateIndex', true) //altrimenti dà warning
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err.reason));

bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
var routes = require('./api/routes/appRoutes') 
routes(app)

app.listen(port)

console.log('blog avviato nella porta: ' + port)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
    next() //necessario per non avere problemi
  })