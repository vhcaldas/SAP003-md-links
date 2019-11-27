const {mdLinks} = require('./lib/index.js');

const parameter = process.argv.slice(2).pop();

mdLinks(parameter);