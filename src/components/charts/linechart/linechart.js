import { Line } from "react-chartjs-2";

export const Linechart = () => {
  return (
    <Line
      data={{
        labels: [
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
        ],
        datasets: [
          {
            label: "Available Bikes",
            data: [2, 3, 2],
            fill: "start",
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            pointBackgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 0.2)"],
            pointBorderColor: ["rgba(255, 206, 86, 0.2)"],
          },
          {
            label: "Unavailable Bikes",
            data: [2, 4, 5],
            fill: "start",
            borderColor: ["rgba(54, 162, 235, 0.2)"],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            pointBackgroundColor: ["rgba(54, 162, 235, 0.2)"],
            pointBorderColor: ["rgba(54, 162, 235, 0.2)"],
          },
        ],
      }}
      width={"100%"}
      height={"100%"}
      options={{ maintainAspectRatio: false }}
    />
  );
};
