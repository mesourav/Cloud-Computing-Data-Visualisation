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
import "../../App.css";
import { dataAnalysis, findLargestTen } from "../../Utils/GeneralUtils";
import { IRawData } from "../../Models";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IBarProps {
  rawData: Array<IRawData>;
  title: string;
  topic: string;
  label: string;
  dataKeyValue: string;
  backgroundColor: string;
}

function BarChartComponent(props: IBarProps) {
  const { rawData, title, topic, label, dataKeyValue, backgroundColor } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 18,
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 24,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            weight: "600",
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "600",
          },
        },
      },
    },
  };

  const data = {
    labels: findLargestTen(dataAnalysis(rawData, dataKeyValue), topic).map((data: any) => {
      return data[dataKeyValue];
    }),
    datasets: [
      {
        label: label,
        data: findLargestTen(dataAnalysis(rawData, dataKeyValue), topic).map((data: any) => {
          return data[topic];
        }),
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <div className="bar-component">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartComponent;
