import { Line } from "react-chartjs-2";

const fetchBikes = (station, label) => {
  const bikes = [];
  if (station?.history) {
    station.history.forEach((element) => {
      bikes.push(element[label]);
    });
  }
  return bikes;
};

const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];

export const Linechart = ({ station }) => {
  const availableBikes = fetchBikes(station, "num_bikes_available");
  const disabledBikes = fetchBikes(station, "num_bikes_disabled");

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Available Bikes",
            data: availableBikes,
            fill: "start",
            backgroundColor: ["rgba(134, 226, 213, 1)"],
            pointBackgroundColor: ["rgba(134, 226, 213, 1)"],
            borderColor: ["rgba(134, 226, 213, 1)"],
            pointBorderColor: ["rgba(134, 226, 213, 1)"],
          },
          {
            label: "Disabled Bikes",
            data: disabledBikes,
            fill: "start",
            borderColor: "red",
            backgroundColor: "red",
            pointBackgroundColor: "red",
            pointBorderColor: "red",
          },
        ],
      }}
      width={"100%"}
      height={"100%"}
      options={{ maintainAspectRatio: false }}
    />
  );
};
