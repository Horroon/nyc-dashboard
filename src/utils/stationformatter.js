export const stationsFormatter = ({
  stations_statuses = [],
  stations_infos = [],
}) =>
  stations_statuses.map((station_status) => {
    const index = stations_infos.findIndex(
      (station_info) => station_status.station_id === station_info.station_id
    );
    if (index !== -1) {
      station_status = {
        ...station_status,
        ...stations_infos[index],
      };
    }
    return station_status;
  });
