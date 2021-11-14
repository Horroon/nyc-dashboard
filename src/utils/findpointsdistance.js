export const PointsDistance = ({ targetpoint, otherpoint }) => {
  const { lat: lat1, lon: lon1 } = targetpoint;
  const { lat: lat2, lon: lon2 } = otherpoint;

  const p = 0.017453292519943295; // Math.PI / 180
  const c = Math.cos;
  const a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // return in km
};
