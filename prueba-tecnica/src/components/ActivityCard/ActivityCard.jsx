import { useContext } from "react";
import styles from "./ActivityCard.module.scss";
import ActivityContext from "../../context/ActivitiesContext";

const ActivityCard = ({ id, name, description, duration }) => {
  const { dispatch } = useContext(ActivityContext);

  return (
    <div className={styles.activity}>
      <div className={styles.actions}>
        <button className={styles.editButton}>Edit</button>
        <button
          className={styles.deleteButton}
          onClick={() => dispatch({ type: "Delete", id })}
        >
          Delete
        </button>
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.time}>{duration}</span>
    </div>
  );
};

export default ActivityCard;
