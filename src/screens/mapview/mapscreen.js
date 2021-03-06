import React, { useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { IoMdClose } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";
import { FindExactColor } from "../../utils/findexactcolor";
import "./style.scss";
import { StationContext } from "../../constants/contexts";

const Markerview = ({ num_bikes_available, capacity, name, station_id }) => {
  const [showmodal, setModal] = useState(false);
  const { mapCenter } = useContext(StationContext);
  useEffect(() => {
    mapCenter.station_id === station_id ? setModal(true) : setModal(false);
    return () => setModal(false);
  }, [mapCenter.station_id, station_id]);

  return (
    <div className="marker">
      {showmodal && (
        <div className="info-container">
          <div className="heading">
            <h1 className="title">{name}</h1>
            <IoMdClose color="#fff" onClick={() => setModal(false)} />
          </div>
          <div className="sub-info">
            Capacity: {capacity} &nbsp; available bike: {num_bikes_available}
          </div>
        </div>
      )}

      <VscCircleFilled
        color={FindExactColor({ numberofbikes: num_bikes_available, capacity })}
        className="marker-pin"
        onClick={() => setModal(true)}
      />
    </div>
  );
};

function MapScreen({ stations = [] }) {
  const { mapCenter, mapzoom } = useContext(StationContext);
  return (
    <div className="mapscreen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} //don't have key
        center={mapCenter}
        zoom={mapzoom}
      >
        {stations.map((station) => (
          <Markerview lat={station.lat} lng={station.lon} {...station} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default MapScreen;
