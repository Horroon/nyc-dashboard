import React, { useContext } from "react";
import { StationContext } from "../../constants/contexts";
import MapScreen from "./mapscreen";
import { Search, InputField } from "../../components";
import "./style.scss";

export const MapView = () => {
  const {
    stations = [],
    fewStations = [],
    mapCenter,
    setMapCenter,
    showNearestStations,
  } = useContext(StationContext);

  const visibleStations = fewStations.length ? fewStations : stations;

  const onStationChange = (value) => {
    const stationIndex = visibleStations.findIndex(
      (station) => station.station_id === value
    );
    const station = visibleStations[stationIndex];
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
            selectedValue={mapCenter.station_id}
            placeholder="Select station"
            onChange={onStationChange}
            options={visibleStations}
          />
        </div>
        <div className="input-container">
          <InputField
            className="input"
            placeholder="Distance in Km"
            action={(value) => {
              if (!isNaN(value)) {
                showNearestStations(value);
              } else {
                alert("Please enter number");
              }
            }}
          />
        </div>
      </div>
      <MapScreen stations={visibleStations} />
    </div>
  );
};
