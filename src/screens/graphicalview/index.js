import React, { useCallback, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Search, charts } from "../../components";
import { StationContext } from "../../constants/contexts";
import "./style.scss";

const { Linechart, Doughnutchart } = charts;

export const GraphicalView = () => {
  const {
    stations = [],
    fewStations = [],
    stationsHistory = [],
  } = useContext(StationContext);

  const [selectedStation, selectStation] = useState({
    capacity: 0,
    num_bikes_available: 0,
    num_bikes_disabled: 0,
  });

  const onChange = (value) => {
    if (fewStations.length) {
      const index = fewStations.findIndex(
        (station) => station.station_id === value
      );
      const targetStation = fewStations[index];
      selectStation(targetStation);
    } else {
      const index = stations.findIndex(
        (station) => station.station_id === value
      );
      const targetStation = stations[index];
      selectStation(targetStation);
    }
  };

  useEffect(() => {
    if (fewStations.length) {
      selectStation(fewStations[0]);
    } else {
      stations.length && selectStation(stations[0]);
    }
  }, [stations, selectStation, fewStations]);

  const LiveDoughnut = useCallback(() => {
    return <Doughnutchart selectedStation={selectedStation} />;
  }, [selectedStation]);

  const LiveChart = useCallback(() => {
    const index = stationsHistory.findIndex(
      (hstation) => hstation.station_id === selectedStation.station_id
    );
    let hStation = selectedStation;
    if (index !== -1) {
      hStation = stationsHistory[index];
    }
    return <Linechart station={hStation} />;
  }, [selectedStation, stationsHistory]);

  const options = fewStations.length ? fewStations : stations;

  return (
    <div className="chart-container">
      <div className="chart-body">
        <div className={"search-container"}>
          <Search
            selectedValue={selectedStation?.station_id}
            placeholder="Select station"
            onChange={onChange}
            options={options}
          />
        </div>
        <div className="doghnutchart">
          <LiveDoughnut />
        </div>
        <div className="linechart">
          <LiveChart />
        </div>
      </div>
    </div>
  );
};
