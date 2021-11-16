import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Search } from "./search";
import "@testing-library/jest-dom/extend-expect";

describe("Search Testing", () => {
  const options = [
    { name: "test-1", station_id: "test-1" },
    { name: "test-2", station_id: "test-2" },
  ];
  const placeholder = "Search";

  render(
    <Search
      options={options}
      selectedValue={"test-1"}
      placeholder={placeholder}
    />
  );
  it("Testing placeholder", () => {
    screen.queryByPlaceholderText(/Search/);
  });
});
