var http = require('http');

http.createServer(function (req, res) {
    res.writeHead("200", "OK");
    res.write('Hello World');
    res.end();
  }).listen(8000);