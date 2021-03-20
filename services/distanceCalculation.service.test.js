import calculateDistanceBetweenTwoPoint from './distanceCalculation.service';
describe('Test distancecalculation service', () => {
  it('should calculate the distance between two points', () => {
    const latTo = 53.2451022,
      lonTo = -6.238335,
      latRef = 53.339428,
      lonRef = -6.257664;
    expect(calculateDistanceBetweenTwoPoint(latTo, lonTo, latRef, lonRef)).toEqual(10.566936288936617);
  });
});
