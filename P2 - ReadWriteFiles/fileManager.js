const fs = require('fs');

// Function to read data from a file
function fileRead(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
}

// Function to write data to a file
function fileWrite(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf-8');
        console.log("Data written successfully to", filePath);
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}

module.exports = { fileRead, fileWrite };
