const http = require('http');
const os = require('os');

const port = process.env.PORT || 3000;

function getSystemInfo() {
  return {
    message: "Hello from CI/CD Dockerized App",
    status: "running",
    timestamp: new Date().toISOString(),
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: `${Math.floor(os.uptime())} seconds`,
    memory: {
      free: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
      total: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`
    }
  };
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: "Welcome to the CI/CD Hello World App",
      routes: ["/", "/health", "/info"]
    }));
  }

  else if (req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "UP" }));
  }

  else if (req.url === '/info') {
    res.writeHead(200);
    res.end(JSON.stringify(getSystemInfo(), null, 2));
  }

  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
