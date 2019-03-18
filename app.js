const express = require('express')
const app = express()
const port = 3000

const revision = require('child_process').execSync('git rev-parse HEAD').toString().trim()

const fs = require('fs')
const metadata_file = './package.json'

const o = {}
var key = 'helloworld';

var contents = fs.readFileSync("package.json");
var jsonContent = JSON.parse(contents);

var data = {lastcommitsha : revision, version : jsonContent.version, description: jsonContent.description};

o[key] = [];
o[key].push(data);

app.get('/', function (req, res) {
  return  res.send('Hello World!');
});

app.get('/status', function (req, res, next) {
  return res.json(o);
});

module.exports = app;
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
