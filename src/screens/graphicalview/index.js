import React, { useContext } from "react";
import { Search, charts } from "../../components";
import { StationContext } from "../../constants/contexts";
import "./style.scss";

const { BarChart, Linechart, Doughnutchart } = charts;

export const GraphicalView = () => {
  const { stations, fewStations = [] } = useContext(StationContext);
  const onChange = (value) => {
    console.log("value ", value);
  };
  const options = fewStations.length ? fewStations : stations;
  return (
    <div className="chart-container">
      <div className="chart-body">
        <div className={"search-container"}>
          <Search
            placeholder="Select station"
            onChange={onChange}
            options={options}
          />
        </div>
        <Doughnutchart />
      </div>
    </div>
  );
};
