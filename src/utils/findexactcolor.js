import { MARKER_COLORS } from "../constants/constants";

export const FindExactColor = ({ numberofbikes, capacity }) => {
  const percent = (numberofbikes * 100) / capacity;
  let color = MARKER_COLORS.not;

  if (percent > 0 && percent <= 50) {
    color = MARKER_COLORS.below50;
  } else if (percent > 50) {
    color = MARKER_COLORS.above50;
  }

  return color;
};
