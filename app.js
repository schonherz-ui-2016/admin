/**
 * Created by sa on 2017.01.13..
 */
var express = require('express'),
    app = express(),
    http = require('http');


app.use(express.static(__dirname + '/app'));


var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});
app.listen(port,  function () {
    console.log("Server has started on "+port +" port!!");
});