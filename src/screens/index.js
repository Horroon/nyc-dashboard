import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { getStations } from "../api";
import { Header } from "../components";
import { GraphicalView } from "./graphicalview";
import { MapView } from "./mapview";
import "./style.scss";

function Main() {
  const fetchStations = async () => {
    try {
      const {
        data: { stations },
      } = await getStations();
      console.log("station ", stations);
    } catch (e) {
      console.log("Error ", e);
    }
  };

  useEffect(() => {
    // fetchStations();
  });
  return (
    <div>
      <Header />
      <div className="main-body">
        <Row>
          <Col span={12}>
            <GraphicalView />
          </Col>
          <Col span={12}>
            <MapView />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
