import * as utils from '../util';
jest.mock('./readFile.service');
import readRemoteFileContent from './readFile.service';
import {getCustomerListWithSortedId} from './customer.service';
it('should return custormer list withing given range in sorted asec', async () => {
  const customerList = [
    {
      latitude: '52.240382',
      user_id: 10,
      name: 'Georgina Gallagher',
      longitude: '-6.972413',
    },
    {
      latitude: '53.2451022',
      user_id: 4,
      name: 'Ian Kehoe',
      longitude: '-6.238335',
    },
  ];
  readRemoteFileContent.mockImplementation(() => Promise.resolve());
  utils.convertTextDataToJsonArray = jest.fn(() => customerList);
  await expect(getCustomerListWithSortedId(100)).resolves.toEqual([
    {
      latitude: '53.2451022',
      user_id: 4,
      name: 'Ian Kehoe',
      longitude: '-6.238335',
    },
  ]);
});
