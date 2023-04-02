import React from "react";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
let lawyers = [
  "Criminal Defense Lawyer",
  "Immigration Lawyer",
  "Corporate Lawyer",
  "Intellectual Property Lawyer",
  "Real Estate Lawyer",
  "Tax Lawyer",
  "Employment Lawyer",
  "Bankruptcy Lawyer",
  "Family Lawyer",
  "Estate Planning Lawyer",
];

export const data = {
  labels: lawyers,
  datasets: [
    {
      label: "Clients Appointed",
      data: lawyers.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#ffd41f",
    },
    {
      label: "Meetings Done",
      data: lawyers.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "grey",
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
