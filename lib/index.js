const fs = require('fs');
const regex = /\[([^ ].+?)\]\((https?:\/\/[^\)]*)\)/gm;

const mdLinks = (path) => {
  let array = [];
  return new Promise ((resolve, reject) => {
    if (!path) {
      reject('Path is not found.');
    }

    fs.readFile(path, 'utf8', (err, path) => {
      if (err) {
        reject (err);
      }
      let result = regex.exec(path);
      do {
        let firstResult = result[1];
        let secondResult = result[2];
        array.push [{firstResult, secondResult}];
      } while (result !== null); {
        resolve(array);
      };
    });
  });
};

module.exports = {
  mdLinks,
};