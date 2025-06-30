import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActivityColumn.module.scss";

const ActivityColumn = ({ day, activities }) => {
  return (
    <div className={styles.column}>
      <p className={styles.dayLabel}>{day.toUpperCase()}</p>
      <p className={styles.total}>
        Total duration:{" "}
        {activities.reduce((ac, current) => ac + Number(current.duration), 0)}
      </p>

      <div className={styles.activities}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} id={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityColumn;
