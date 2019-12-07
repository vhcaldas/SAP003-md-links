#!/usr/bin/env_node

const mdLinks = require('./lib/index.js');
const path = process.argv[2];

mdLinks(path)
    .then((result) => result.forEach(element => { 
        console.log(`\nText: ${element.text} \nLink: ${element.href}`);
        }
    ))
    .catch (error => console.log(error));