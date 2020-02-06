const express = require('express'),
      body_parser = require('body-parser'),
      morgan = require('morgan'),
      path = require('path'),
      app = express(),
      index_router = require('./Routers/router');
var connection = require('./dbConfig/baseConfig');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

//views
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/views/'));
//see petitions 
app.use(morgan('dev'));

//routes
app.use('/',index_router);

//port
var port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log('Iniciado', port)
})