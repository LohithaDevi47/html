// Load the fs (File System) module
const fs = require('fs');

// Define the file name and content
const fileName = 'src.txt';
const content = `HTML
CSS
JavaScript
TypeScript
MongoDB
Express.js
React.js
Node.js`;

// Write content to the file
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log(`${fileName} has been created with the given content.`);
});

