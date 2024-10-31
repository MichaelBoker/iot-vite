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
import { BAR_CHART_COLOR } from "../../../utils/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
  };

  const labels = Object.keys(data);
  const barValues = Object.values(data);

  const barData = {
    labels,
    datasets: [
      {
        label: "Device count",
        data: barValues,
        backgroundColor: BAR_CHART_COLOR,
      },
    ],
  };

  return <Bar options={options} data={barData} />;
};

export default BarChart;
