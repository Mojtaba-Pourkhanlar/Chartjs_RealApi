import React, { useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { TabsData } from "../../context/TabsData";
Chart.register(CategoryScale);

export const LineChart = () => {
  const { coins } = useContext(TabsData);

  return (
    <>
      <Line
        data={{
          labels: coins.map((coin) => coin.name),
          datasets: [
            {
              data: coins.map((coin) => coin.price_change_percentage_24h),
              borderColor: "#EEBC1D",
            },
          ],
        }}
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
