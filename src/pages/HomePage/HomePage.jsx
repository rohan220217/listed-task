import styles from "./HomePage.module.scss";
import AppBar from "./components/AppBar/AppBar";
import SideBar from "./components/SideBar/SideBar";
import StatsCard from "./components/StatsCard/StatsCard";

import { ReactComponent as RevenueIcon } from "../../assets/icons/revenue_icon.svg";
import { ReactComponent as TotalTransactionIcon } from "../../assets/icons/total_transaction_icon.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like_icon.svg";
import { ReactComponent as TotalUserIcon } from "../../assets/icons/total_user_icon.svg";

import ActivityChart from "./components/ActivityChart/ActivityChart";
import ScheduleCard from "./components/ScheduleCard/ScheduleCard";
import TopProduct from "./components/TopProduct/TopProduct";

function HomePage() {
  const statsArray = [
    {
      color: "#DDEFE0",
      title: "Total Revenues",
      value: "$2,129,430",
      icon: <RevenueIcon />,
    },
    {
      color: "#F4ECDD",
      title: "Total Transactions",
      value: "1,520",
      icon: <TotalTransactionIcon />,
    },
    {
      color: "#EFDADA",
      title: "Total Likes",
      value: "9,721",
      icon: <LikeIcon />,
    },
    {
      color: "#DEE0EF",
      title: "Total Users",
      value: "892",
      icon: <TotalUserIcon />,
    },
  ];

  return (
    <div className={styles.container}>
      
        <SideBar />
      <div className={styles.mainContent}>
        <AppBar />
        <div className={styles.stats}>
          {statsArray.map((stat, index) => (
            <StatsCard
              key={`statscard-${index}`}
              color={stat.color}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        <ActivityChart />

        <div className={styles.bottomCards}>
          <TopProduct />
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
