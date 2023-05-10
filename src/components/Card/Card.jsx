import styles from "./Card.module.scss";

import { ReactComponent as ChevronIcon } from "../../assets/icons/bottom_chevron.svg";

function Card({ children, title, subTitle, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1>{title}</h1>
        <div className={styles.subTitle}>
          <p> {subTitle} </p>
          <div
            className={
              type === "navigation"
                ? `${styles.subTitleIcon} ${styles.rotateIcon}`
                : styles.subTitleIcon
            }
          >
            <ChevronIcon />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Card;
