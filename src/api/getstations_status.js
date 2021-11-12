import { API_END_POINT } from "../constants";

export const getStationsStatus = async () =>
  await fetch(`${API_END_POINT}/station_status.json`)
    .then((res) => res.json())
    .then((res) => res);
