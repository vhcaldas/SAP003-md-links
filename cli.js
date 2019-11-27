const {mdLinks} = require('./lib/index.js');

const path = process.argv.slice(2).pop();

mdLinks(path);