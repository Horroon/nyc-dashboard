import React, { useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FindExactColor } from "../../utils/findexactcolor";
import "./style.scss";
import { StationContext } from "../../constants/contexts";

const Markerview = ({ num_bikes_available, capacity, name, station_id }) => {
  const [showmodal, setModal] = useState(false);
  const { mapCenter } = useContext(StationContext);
  useEffect(() => {
    mapCenter.station_id === station_id ? setModal(true) : setModal(false);
  }, [mapCenter.station_id]);

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

      <FaMapMarkerAlt
        color={FindExactColor({ numberofbikes: num_bikes_available, capacity })}
        className="marker-pin"
        onClick={() => setModal(true)}
      />
    </div>
  );
};

function MapScreen({ stations = [] }) {
  const { mapCenter, mapzoom } = useContext(StationContext);
  console.log("mapscreen ", mapCenter);
  return (
    <div className="mapscreen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} //AIzaSyCLmle3a-g-cwLnJktcDbOlcTyU-J-kMgk"
        center={mapCenter}
        zoom={mapzoom}
        onChildClick={(key, childprop) =>
          console.log("key ", key, " childprop ", childprop)
        }
      >
        {stations.map((station) => (
          <Markerview lat={station.lat} lng={station.lon} {...station} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default MapScreen;
