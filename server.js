// Import the built-in 'http' module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define port and hostname
const PORT = 3000;
const HOSTNAME = 'localhost';

// Start listening
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
