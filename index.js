var express = require('express')
var app = express()
var counter = 0;

app.get('/', function (req, res){
  res.send('Hello World!'+ counter++)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
