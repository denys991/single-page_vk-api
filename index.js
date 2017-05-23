var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static('./'));

server.listen(3000, function () {
    console.log('Server started')
});
