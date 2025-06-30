import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./ActivityColumn.module.scss";

const ActivityColumn = ({ day, activities }) => {
  return (
    <div className={styles.column}>
      <p>{day}</p>

      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  );
};

export default ActivityColumn;
