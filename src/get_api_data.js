const axios = require('axios');
const https = require('https');
var assert = require('assert');
const { host } = require('./apiConf');

function isLogin(value) {
    return value === "Samantha";
}

function parserAll(data){
    return data.map(obj => ([
        obj.username,
        obj.website,
        //  isLogin(obj.username) && ?  obj.email : ''
        isLogin(obj.username) ?  obj.email : ''
    ]));
}

function getData() {
    return axios.get(`${host}/users`);
}

async function getDados(req, res){
    var sites = await getData();
    var todos = parserAll(sites.data);
    res.send(todos);
}

module.exports = {
    getDados,
};