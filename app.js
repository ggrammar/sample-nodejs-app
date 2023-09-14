// Most of this code is copied verbatim from the Node.js documentation at:
// https://nodejs.org/en/docs/guides/getting-started-guide
const http = require('http');
 
// https://stackoverflow.com/questions/52524289/docker-empty-response-from-server
// I found that I had to bind to 0.0.0.0, rather than 127.0.0.1, for network traffic
// to flow through Docker. `docker port` shows this information. I'd guess this is
// something with how Docker networks are implemented.
const hostname = '0.0.0.0';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
