var express = require('express')
var app = express()
var count_number_of_visits = 0;

app.get('/', function (req, res){
  res.send('Hello World!'+ count_number_of_visits++)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
