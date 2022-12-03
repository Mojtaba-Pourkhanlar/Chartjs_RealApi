import React, { useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { TabsData } from "../../context/TabsData";
Chart.register(CategoryScale);

export const AreaChart = () => {
  const { coins } = useContext(TabsData);

  const labels = coins.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: coins.map((item) => item.market_cap),
        borderColor: "#EEBC1D",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Line
        data={data}
        options={{
          plugins: {
            legend: false,
          },
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </>
  );
};
