const fs = require('fs');
const regex = /\[([^ ].+?)\]\((https?:\/\/[^\)]*)\)/gm;

const mdLinks = (path) => {
  let array = [];
  return new Promise ((resolve, reject) => {
    if (!path) {
      return reject('Path is not found.');
    } else {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject('Error in the File.');
      } else {
      let result = regex.exec(data);
      do {
        let text = result[1];
        let href = result[2];
        array.push({text, href});
        result = regex.exec(data);  
      } while (result !== null); {
        return resolve(array);
      };
      };
    });
  };
  });
};

module.exports = mdLinks;