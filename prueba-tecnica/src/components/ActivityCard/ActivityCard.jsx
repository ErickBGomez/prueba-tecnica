import { useContext } from "react";
import styles from "./ActivityCard.module.scss";
import ActivityContext from "../../context/ActivitiesContext";

const ActivityCard = ({ id, name, description, duration }) => {
  const { dispatch } = useContext(ActivityContext);

  const handleDelete = () => {
    const response = confirm("Are you sure you want to delete this activity?");

    if (response) {
      dispatch({ type: "Delete", id });
    }
  };

  const handleReorder = (direction) => {
    dispatch({ type: "Reorder", id, direction });
  };

  return (
    <div className={styles.activity}>
      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
        <button onClick={() => handleReorder(-1)}>Up</button>
        <button onClick={() => handleReorder(1)}>Down</button>
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.time}>{duration}</span>
    </div>
  );
};

export default ActivityCard;
