import { getStations, getStationsStatus } from "../api";
import { stationsFormatter } from "./stationformatter";

export const stationsInfos = async () => {
  const {
    data: { stations },
  } = await getStations();
  const {
    data: { stations: stationswithstatuses },
  } = await getStationsStatus();

  return await stationsFormatter({
    stations_infos: stations,
    stations_statuses: stationswithstatuses,
  });
};
