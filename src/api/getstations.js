import { API_END_POINT } from "../constants";

export const getStations = async () =>
  await fetch(`${API_END_POINT}/station_information.json`)
    .then((res) => res.json())
    .then((res) => res);
