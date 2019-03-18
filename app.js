const express = require('express')
const app = express()
const port = 3000

const revision = require('child_process').execSync('git rev-parse HEAD').toString().trim()

const fs = require('fs')
const metadata_file = './package.json'

const o = {}
var version = 'unknown'
var description = 'unknown'
var key = 'helloworld';
o[key] = [];

try {
  if (fs.existsSync(metadata_file)) {
    var contents = fs.readFileSync("package.json");
    var jsonContent = JSON.parse(contents);
    version = jsonContent.version;
    description = jsonContent.description;
  }
} catch(waerning) {
  console.warning(warning)
}

var data = {lastcommitsha : revision, version : version, description: description};

o[key].push(data);

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/status', (req, res) => res.send(o))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
