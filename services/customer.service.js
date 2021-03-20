import * as CONSTANT from '../constant';
import { convertTextDataToJsonArray } from '../util';
import readRemoteFileContent from './readFile.service';
import calculateDistanceBetweenTwoPoint from './distanceCalculation.service'

export const getCustomerListWithinRangeFromRefPoint = (
  customersList,
  { latitudeRef, longitudeRef },
  range
) => {
  return customersList
    .filter(
      ({ latitude, longitude }) =>
        calculateDistanceBetweenTwoPoint(
          latitude,
          longitude,
          latitudeRef,
          longitudeRef
        ) <= range
    )
    .sort((cus1, cus2) => cus1.user_id - cus2.user_id);
};
export const getCustomerListWithSortedId = (rangeInKm) => {
  return readRemoteFileContent({
    url: 'https://s3.amazonaws.com/intercom-take-home-test/customers.txt',
  })
    .then(() => {
      const customersList = convertTextDataToJsonArray('./customers.txt');
      const customerResponse = getCustomerListWithinRangeFromRefPoint(
        customersList,
        {
          latitudeRef: CONSTANT.DUBLIN_LAT,
          longitudeRef: CONSTANT.DUBLIN_LON,
        },
        rangeInKm
      );
      return customerResponse;
    })
    .catch((err) => console.error(err));
};
