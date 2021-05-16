// const express = require('express')
// const mongoose = require('mongoose')
// bodyParser = require('body-parser')

// // const fs = require('fs')
// // const path = require('path')
// // const http = require('http')
// // const https = require('https')

// Photo = require("./api/models/PhotoModel") 

// app = express()
// const port = process.env.port  || 3000

// mongoose.Promise = global.Promise
// mongoose.set('useNewUrlParser', true) //altrimenti dà warning
// mongoose.set('useUnifiedTopology', true) //same
// mongoose.connect('mongodb://localhost/MedicalCenterDb')

// // let privateKey  = fs.readFileSync(path.join(__dirname, 'cert','key.pem'))
// // let certificate = fs.readFileSync(path.join(__dirname, 'cert','cert.pem'))
// // let credentials = {key: privateKey, cert: certificate}

// // app.use(bodyParser.urlencoded({ extended: true }))
// // app.use(bodyParser.json())

// // let routes = require('./api/routes/appRoutes')
// // routes(app)

// // let httpServer = http.createServer(app);
// // let httpsServer = https.createServer(credentials, app);

// app.listen(port)

// // httpServer.listen(port);
// // httpsServer.listen(8443);

// console.log('Server avviato nella porta: ' + port);

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// })

const express = require('express')

var app = express()
const port = process.env.PORT || 3000

Photo = require("./api/models/PhotoModel") 



bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
var routes = require('./api/routes/appRoutes') //importing route
routes(app); //register the route

app.listen(port)

console.log('blog avviato nella porta: ' + port)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
    next() //necessario per non avere problemi
  })