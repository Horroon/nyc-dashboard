import React, { useContext } from "react";
import { Search, charts } from "../../components";
import { StationContext } from "../../constants/contexts";
import "./style.scss";

const { BarChart } = charts;

export const GraphicalView = () => {
  const { stations } = useContext(StationContext);
  const onChange = (value) => {
    console.log("value ", value);
  };
  return (
    <div className="chart-container">
      <div className="chart-body">
        <div className={"search-container"}>
          <Search
            placeholder="Select station"
            onChange={onChange}
            options={stations}
          />
        </div>
        <BarChart />
      </div>
    </div>
  );
};
