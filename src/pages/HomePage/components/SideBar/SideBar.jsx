import styles from "./SideBar.module.scss";

import { ReactComponent as DashboardIcon } from "../../../../assets/icons/dashboard_icon.svg";
import { ReactComponent as TransactionIcon } from "../../../../assets/icons/transaction_icon.svg";
import { ReactComponent as ScheduleIcon } from "../../../../assets/icons/schedule_icon.svg";
import { ReactComponent as UserIcon } from "../../../../assets/icons/user_icon.svg";
import { ReactComponent as SettingIcon } from "../../../../assets/icons/setting_icon.svg";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Board.</h1>
        <div className={styles.navItems}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <DashboardIcon /> Dashboard
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <TransactionIcon /> Transactions
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <ScheduleIcon /> Schedules
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <UserIcon /> Users
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <SettingIcon /> Settings
          </NavLink>
        </div>
      </div>

      <div className={styles.bottomTexts}>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default SideBar;
