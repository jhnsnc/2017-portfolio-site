// Super Simple Static HTTP Server

const static = require('node-static');
const port = 3000;
const http = require('http');

const staticServer = new static.Server( './dist', {
  cache: 3600,
  gzip: true,
});

http.createServer((req, res) => {
  req.addListener('end', () => {
    staticServer.serve(req, res);
  }).resume();
}).listen(port, () => {
  console.log(`Listening on port ${port}.`);
  console.log(`Open http://localhost:${port} in your browser.`);
});
