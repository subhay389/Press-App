var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function(err){
    if (err){
        console.log("Could not conect to the databse")
    }else{
        console.log("Connected to data base", config.db)
    }
});

app.use(express.static(__dirname + '/client/dist/client/'))

app.get('*', function (req, res) {
    res.sendfile(path.join(__dirname + '/client/dist/client/'));
});
  
app.listen(3000, function(err){
    if (err){
        console.log("Coudlt start server")
    }else{
        console.log("Server started on 3000")
    }
})
