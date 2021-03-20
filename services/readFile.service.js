const fs = require('fs');
const https = require('https');
const file = fs.createWriteStream('customers.txt');

const readRemoteFileContent = ({ url }) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const stream = response.pipe(file);
      stream.on('finish', () => {
        resolve();
      });
      stream.on('error', (err) => {
        reject(err);
      });
    });
  });
};
export default readRemoteFileContent;
