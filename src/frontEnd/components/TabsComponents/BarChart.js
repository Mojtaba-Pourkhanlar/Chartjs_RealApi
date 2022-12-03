import React, { useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { TabsData } from "../../context/TabsData";
Chart.register(CategoryScale);

export const BarChart = () => {
  const { coins } = useContext(TabsData);

  const labels = coins.slice(0, 11).map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: coins.slice(0, 11).map((item) => item.fully_diluted_valuation),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: coins.slice(0, 11).map((item) => item.max_supply),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bar
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
