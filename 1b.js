const http = require('http');

// Define the port for the server
const PORT = 4000;

// Sample data to transfer
const data = {
    id: 101,
    name: "HTTP Data Transfer",
    status: "Success",
    description: "This data is sent over HTTP using Node.js http module"
};

// Create the server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    // Send the data as JSON
    res.end(JSON.stringify(data));
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

