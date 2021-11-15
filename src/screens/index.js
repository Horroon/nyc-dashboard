import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { StationContext } from "../constants/contexts";
import { GraphicalView } from "./graphicalview";
import { MapView } from "./mapview";
import { stationsInfos } from "../utils/getstations";
import { PointsDistance } from "../utils/findpointsdistance";
import "./style.scss";
import { UpdateHistory } from "../utils/UpdateHistory";

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
  const [stationsHistory, setStationsHistory] = useState([]);

  const updateHistory = (stations) => {
    setStationsHistory(UpdateHistory({ history: stationsHistory, stations }));
  };

  const fetchStations = async () => {
    try {
      const results = await stationsInfos();
      const fixedStations = results.slice(0, 700);
      setStations(fixedStations);
      setMapCenter({
        lat: mapCenter.lat || fixedStations[0]?.lat || Default_Lat,
        lng: mapCenter.lng || fixedStations[0]?.lon || Default_Lon,
        station_id: mapCenter.station_id || fixedStations[0]?.station_id,
      });
      updateHistory(fixedStations);
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
    const interval = setInterval(fetchStations, 60000);
    return () => clearInterval(interval);
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
        stationsHistory,
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
