const fs = require('fs');

const re = fs.createReadStream('./10.js');

re.pipe(process.stdout);