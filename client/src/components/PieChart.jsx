import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PIE_CHART_COLORS,  } from '../../../utils/constant';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}) => {
    const pieLabels = Object.keys(data)
    const pieValues = Object.values(data)

    const pieData = {
        labels: pieLabels,
        datasets: [
          {
            data: pieValues,
            backgroundColor: PIE_CHART_COLORS
          },
        ],
      };

    return(
    <Pie data={pieData} />
    );
}

export default PieChart