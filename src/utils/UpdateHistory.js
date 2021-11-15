export const UpdateHistory = ({ stations = [], history = [] }) => {
  stations.forEach((station) => {
    const index = history.findIndex(
      (historystation) => historystation.station_id === station.station_id
    );

    if (index !== -1) {
      const existingStation = history[index];
      existingStation.history = [...existingStation.history, { ...station }];
      history[index] = existingStation;
    } else {
      station.history = [station];
      history.push(station);
    }
  });

  return history;
};
