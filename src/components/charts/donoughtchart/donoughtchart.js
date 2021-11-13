import { Doughnut } from "react-chartjs-2";

const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 240).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = "Capacity",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2 + 5;
      ctx.fillStyle = "#fff";
      ctx.fillText(text, textX, textY);
      ctx.fillText("75", textX + textX / 3, textY + textY / 6);
      ctx.save();
    },
  },
];

export const Doughnutchart = () => {
  return (
    <Doughnut
      data={{
        labels: ["Disabled", "Available", "Unavailable"],
        datasets: [
          {
            label: "Current Usage",
            data: [2, 10, 63],
            backgroundColor: ["gray", "green", "red"],
            borderColor: ["gray", "green", "red"],
            borderWidth: 1,
          },
        ],
      }}
      width={"100%"}
      height={"100%"}
      options={{
        maintainAspectRatio: false,
        cutout: "60%",
      }}
      plugins={plugins}
    />
  );
};
