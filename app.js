/**
 * Created by sa on 2017.01.13..
 */
var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app);

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});
app.listen(3000, function () {
    console.log('example app listening on port 3000')
});