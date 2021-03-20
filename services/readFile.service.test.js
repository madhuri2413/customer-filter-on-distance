import { PassThrough } from 'stream';
import * as fs from 'fs';
import * as https from 'https';
const mockWritableStream = new PassThrough();
fs.createWriteStream = jest.fn().mockReturnValue(mockWritableStream);
https.get = jest.fn().mockImplementation((uri, callback) => {
  callback({ data: 'hello' });
});
import readFileService from './readFile.service';

describe('Test readFile service', () => {
  beforeAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should read file from remote and write it to local on finish event', async () => {
    const actualPromise = readFileService({ url: 'https://test.com' });
    setTimeout(() => {
      mockWritableStream.emit('finish');
      mockWritableStream.end()
    }, 100);
    await expect(actualPromise).resolves.toEqual(undefined);
  });
});
