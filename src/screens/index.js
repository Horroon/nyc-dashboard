import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { StationContext } from "../constants/contexts";
import { GraphicalView } from "./graphicalview";
import { MapView } from "./mapview";
import { stationsInfos } from "../utils/getstations";
import { getStations, getStationsStatus } from "../api";
import "./style.scss";

const Default_Lat = 40.754932;
const Default_Lon = -73.984016;

function Main() {
  const [stations, setStations] = useState();
  const [mapCenter, setMapCenter] = useState({
    lat: Default_Lat,
    lng: Default_Lon,
    station_id: "",
  });

  const fetchStations = async () => {
    try {
      const results = await stationsInfos();

      console.log("station ", results);
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

  useEffect(() => {
    fetchStations();
  }, []);
  return (
    <StationContext.Provider value={{ stations, mapCenter, setMapCenter }}>
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
