import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActivityColumn.module.scss";

const ActivityColumn = ({ day, activities }) => {
  return (
    <div className={styles.column}>
      <p className={styles.dayLabel}>{day.toUpperCase()}</p>

      <div className={styles.activities}>
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityColumn;
