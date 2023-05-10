import axios from "axios";
import styles from "./ActivityChart.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ActivityChart() {
  const [dataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 50, 41, 44],
        borderColor: "#9BDD7C",
        lineTension: 0.3,
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 46],
        borderColor: "#E9A0A0",
        lineTension: 0.3,
      },
    ],
  });

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = () => {
    setDataLoading(true);
    axios("https://www.fruityvice.com/api/fruit/all", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
    })
      .then((res) => {
        const data = res.data.slice(0, 20);
        const updatedLabels = data
          .slice(0, 10)
          .map((tempData) => tempData.name);
        const updatedDataset = data.map(
          (tempData) => tempData.nutritions.calories
        );

        setData((prev) => {
          return {
            ...prev,
            labels: updatedLabels,
            datasets: [
              {
                ...prev.datasets[0],
                data: updatedDataset.slice(0, 10),
              },
              {
                ...prev.datasets[1],
                data: updatedDataset.slice(10, 20),
              },
            ],
          };
        });
      })
      .catch((err) => {
        toast.error("Unable to fetch data from server");
        console.log(err);
      })
      .finally((res) => setDataLoading(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartHeader}>
        <div>
          <h1>Activities</h1>
          <p>May - June 2021</p>
        </div>
        <div className={styles.labels}>
          {data.datasets.map((dataset, index) => (
            <div className={styles.label} key={`activity-${index}`}>
              <div
                className={styles.sign}
                style={{ backgroundColor: dataset.borderColor }}
              ></div>
              <p className={styles.text}>{dataset.label}</p>
            </div>
          ))}
        </div>
      </div>

      {dataLoading ? (
        <div className={styles.loading}>
          Please wait data is being fetched...
        </div>
      ) : (
        <div className={styles.lineChart}>
          <Line
            data={data}
            height="70"
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ActivityChart;
