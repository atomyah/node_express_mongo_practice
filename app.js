var http = require('http')
var express = require('express')
var path = require('path')

var app = express()



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.get("/", function(req, res, next) {
  return res.render('index', {title: 'おっはー'})
})

app.get("/bye", function(req, res, next) {
  return res.send('さようなら')
})


var server = http.createServer(app)
server.listen('5000')
