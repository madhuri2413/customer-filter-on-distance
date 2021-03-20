import fs from 'fs';
export const convertDegreeToRadians = (degree) => {
  return degree * (Math.PI / 180);
};
export const convertTextDataToJsonArray = (filePath) => {
  return fs
    .readFileSync(filePath)
    .toString('utf-8')
    .split('\n')
    .map((data) => JSON.parse(data));
};
