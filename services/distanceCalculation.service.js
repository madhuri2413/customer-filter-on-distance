import * as CONSTANT from '../constant';
import { convertDegreeToRadians } from '../util';

const calculateDistanceBetweenTwoPoint = (
  latTo,
  lonTo,
  latRef,
  lonRef
) => {
  const lonRefRadian = convertDegreeToRadians(lonRef),
    latRefRadian = convertDegreeToRadians(latRef),
    lonToRadian = convertDegreeToRadians(lonTo),
    latToRadian = convertDegreeToRadians(latTo);

  const differenceLon = lonToRadian - lonRefRadian;
  const centralAngle = Math.acos(
    Math.sin(latRefRadian) * Math.sin(latToRadian) +
      Math.cos(latRefRadian) * Math.cos(latToRadian) * Math.cos(differenceLon)
  );
  return CONSTANT.EARTH_RADIUS_KM * centralAngle;
};
export default calculateDistanceBetweenTwoPoint;