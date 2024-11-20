const fs = require('fs');

const text = fs.readFileSync('./text.txt','utf-8');

console.log(text);


const data = `Hi my name is ${text} amd created at ${new Date().getFullYear()}`;

fs.writeFileSync('./textq.txt', data);