#!/usr/bin/env_node

const mdLinks = require('./lib/index.js');
const path = process.argv.slice(2).pop();

mdLinks(path)
    .then(result => console.log(result))
    .catch (error => console.log(error));