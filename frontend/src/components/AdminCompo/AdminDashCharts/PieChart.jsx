import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import lawyers from "../../../assets/lawyers.json";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "IRM",
    "Civil",
    "Clerk",
    "Attorney",
    "Associate",
    "Defense",
    "Criminal",
  ],
  datasets: [
    {
      label: "Laywers Count",
      data: [12, 17, 3, 5, 2, 3, 5, 8, 6, 2],
      backgroundColor: [
        "#D1B000",
        "#FFD700",
        "#FFDE2E",
        "#FFE55C",
        "#FFED8A",
        "#fafafa",
      ],
      borderColor: ["black", "black", "black", "black", "black", "black"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
