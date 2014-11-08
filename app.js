var express = require('express');
var jade = require('jade');

var portnumber = 3000;

//init express

var app = express();
console.log('Express initialized');

//Set Views folder

app.set('views', __dirname + '/views');

//Init jade

app.set('view engine', 'jade');
console.log('Jade initialized');

//Set Static folder

app.use(express.static(__dirname + '/public'));

//Render Index

app.get('/', function(req, res){
  res.render('index',
    {title: 'welcome'});
});

//app listen

app.listen(portnumber);
console.log('Connected to port ' + portnumber);