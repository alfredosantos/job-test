const { Probe } = require('./apiProbe');
const { getDados } = require('./get_api_data') 
const restify = require("restify");

var assert = require('assert');
var axios = require('axios');
var https = require('https');

// Setup Restify Server
var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log("%s listening to %s", server.name, server.url);
});



server.get("/healthcheck", Probe);
server.get("/dados", getDados);