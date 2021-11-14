import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { StationContext } from "../constants/contexts";
import { GraphicalView } from "./graphicalview";
import { MapView } from "./mapview";
import { stationsInfos } from "../utils/getstations";
import { PointsDistance } from "../utils/findpointsdistance";
import "./style.scss";

const Default_Lat = 40.754932;
const Default_Lon = -73.984016;
const Default_zoom = 12;

function Main() {
  const [stations, setStations] = useState();
  const [mapCenter, setMapCenter] = useState({
    lat: Default_Lat,
    lng: Default_Lon,
    station_id: "",
  });
  const [mapzoom, setMapZoom] = useState(Default_zoom);
  const [fewStations, setFewStations] = useState([]);

  const fetchStations = async () => {
    try {
      const results = await stationsInfos();
      setStations(results.slice(0, 200));
      setMapCenter({
        lat: results[0]?.lat || Default_Lat,
        lng: results[0]?.lon || Default_Lon,
        station_id: results[0]?.station_id,
      });
    } catch (e) {
      console.log("Error ", e);
    }
  };

  const showNearestStations = (distance) => {
    if (mapCenter?.station_id && distance) {
      const takeNearestStations = [];
      const targetIndex = stations.findIndex(
        (station) => station.station_id === mapCenter.station_id
      );
      const targetStation = stations[targetIndex];
      stations.forEach((station) => {
        const exactdistance = PointsDistance({
          targetpoint: targetStation,
          otherpoint: station,
        });
        if (exactdistance <= Number(distance)) {
          takeNearestStations.push(station);
        }
      });
      setMapZoom(14);
      setMapCenter({
        lat: targetStation.lat,
        lng: targetStation.lon,
        station_id: targetStation.station_id,
      });
      setFewStations(takeNearestStations);
    } else {
      setMapZoom(Default_zoom);
      setMapCenter({
        lat: stations[0]?.lat || Default_Lat,
        lng: stations[0]?.lon || Default_Lon,
        station_id: stations[0]?.station_id,
      });
      setFewStations([]);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);
  return (
    <StationContext.Provider
      value={{
        stations,
        mapCenter,
        setMapCenter,
        fewStations,
        showNearestStations,
        mapzoom,
      }}
    >
      <div>
        <Header />
        <div className="main-body">
          <Row>
            <Col span={24}>
              <MapView />
              <GraphicalView />
            </Col>
          </Row>
        </div>
      </div>
    </StationContext.Provider>
  );
}

export default Main;
