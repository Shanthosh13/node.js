// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server that responds with a welcome message
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set response header
  res.end('Good morning students! Welcome to class!\n'); // Send response
});

// Define the port to listen on
const port = 3000;

// Start the server and log the address
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
