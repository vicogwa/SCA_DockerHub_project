const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from CI/CD Pipeline!\n');
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
