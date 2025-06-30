const fs = require('fs');
const path = require('path');

const fileName = fs.readFile(path.join(__dirname + './package.json'));
console.log('filename: ', fileName);
