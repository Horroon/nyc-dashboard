import { Bar } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

export const BarChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const g = ctx.createLinearGradient(1, 4, 3, 1);

    return {
      datasets: [
        {
          backgroundColor: g,
          // ...the rest
        },
      ],
    };
  };
  return (
    <Bar
      data={{
        labels: ["Red", "Green", "Yellow"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      width={"100%"}
      height={"100%"}
      options={{ maintainAspectRatio: false }}
    />
  );
};
