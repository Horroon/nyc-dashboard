import { FindExactColor } from "./findexactcolor";
import { MARKER_COLORS } from "../constants/constants";
import "@testing-library/jest-dom";

test("Finding exact color", () => {
  const obj = { numberofbikes: 22, capacity: 25 };
  expect(FindExactColor(obj)).toEqual(MARKER_COLORS.above50);
});
