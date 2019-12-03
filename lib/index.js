const fs = require('fs');
const regex = /\[([^ ].+?)\]\((https?:\/\/[^\)]*)\)/gm;

const mdLinks = (path) => {
  let array = [];
  return new Promise ((resolve, reject) => {
    if (!path) {
      reject ('Path is not found.');
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject ('Error in the File.');
      }
      let result = regex.exec(data);
      do {
        let href = result[2];
        let text = result[1];
        array.push({href, text});
        result = regex.exec(data);  
      } while (result !== null); {
        return resolve(array);
      };
    });
  });
};

module.exports = mdLinks;