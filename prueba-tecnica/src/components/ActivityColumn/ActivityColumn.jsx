import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActivityColumn.module.scss";

const ActivityColumn = ({ day, activities }) => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    const total = activities.reduce(
      (ac, current) => ac + Number(current.duration),
      0
    );
    setTotalDuration(total);
  }, [activities]);

  return (
    <div className={styles.column}>
      <p className={styles.dayLabel}>{day.toUpperCase()}</p>
      <p className={styles.total}>Total duration: {totalDuration}</p>

      {totalDuration >= 600 && (
        <p className={styles.warning}>Advertencia: Supera 600 minutos</p>
      )}

      <div className={styles.activities}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} id={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityColumn;
