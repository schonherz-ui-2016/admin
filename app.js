/**
 * Created by sa on 2017.01.13..
 */
var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app);

app.use(express.static(__dirname + '/app'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});
app.listen(3000,  function () {
    console.log("Server has started on 3000 port!!");
});