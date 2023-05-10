import { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import styles from "./TopProduct.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { toast } from "react-hot-toast";

ChartJS.register(ArcElement, Tooltip, Legend);

function TopProduct() {
  const [dataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState({
    labels: ["Basic Tees", "Blue", "Yellow"],
    datasets: [
      {
        label: " ",
        data: [14, 31, 55],
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
        borderWidth: 0,
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
        const updatedLabels = data.slice(0, 3).map((tempData) => tempData.name);

        setData((prev) => {
          return {
            ...prev,
            labels: updatedLabels,
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
    <Card title="Top products" subTitle="May - June 2021">
      {dataLoading ? (
        <div className={styles.loading}>Please wait data is loading...</div>
      ) : (
        <div className={styles.pieChart}>
          <Pie
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />

          <div className={styles.labels}>
            {data.datasets[0].data.map((currData, index) => (
              <div className={styles.label} key={`topproduct-${index}`}>
                <div
                  key={`topproduct-${index}`}
                  className={styles.sign}
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <div className={styles.value}>
                  <h5>{data.labels[index]}</h5>
                  <p>{currData} %</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

export default TopProduct;
