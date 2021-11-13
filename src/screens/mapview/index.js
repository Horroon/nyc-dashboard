import React, { useContext } from "react";
import { StationContext } from "../../constants/contexts";
import MapScreen from "./mapscreen";
import { Search } from "../../components";
import "./style.scss";

export const MapView = () => {
  const { stations = [], setMapCenter } = useContext(StationContext);
  const onStationChange = (value) => {
    const stationIndex = stations.findIndex(
      (station) => station.station_id === value
    );
    const station = stations[stationIndex];
    setMapCenter({
      lat: station.lat,
      lng: station.lon,
      station_id: station.station_id,
    });
  };
  return (
    <div className="mapcontainer" style={{ height: "90vh" }}>
      <div className="stationsearch">
        <div className="searchcontainer">
          <Search
            placeholder="Select station"
            onChange={onStationChange}
            options={stations}
          />
        </div>
      </div>
      <MapScreen stations={stations} />
    </div>
  );
};
