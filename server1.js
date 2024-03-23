var http = require('http');

http.createServer(function (req, res) {
    res.writeHead("302", {Location:"https://www.google.co.in/"});
    res.write('Hello World');
    res.end();
  }).listen(8080);