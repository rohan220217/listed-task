import Card from "../../../../components/Card/Card";
import styles from "./ScheduleCard.module.scss";

function ScheduleCard() {
  return (
    <Card title="Today’s schedule" subTitle="See All" type="navigation">
      <div className={styles.schedule} style={{ borderColor: "#9BDD7C" }}>
        <h5>Meeting with suppliers from Kuta Bali</h5>
        <p>14.00-15.00</p>
        <p>at Sunset Road, Kuta, Bali </p>
      </div>
      <div className={styles.schedule}  style={{ borderColor: "#6972C4" }}>
        <h5>Check operation at Giga Factory 1</h5>
        <p>18.00-20.00</p>
        <p>at Central Jakarta </p>
      </div>
    </Card>
  );
}

export default ScheduleCard;
