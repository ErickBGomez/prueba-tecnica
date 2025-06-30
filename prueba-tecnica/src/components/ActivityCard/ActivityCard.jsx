import styles from "./ActivityCard.module.scss";

const ActivityCard = ({ name, description, duration }) => {
  return (
    <div className={styles.activity}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.time}>{duration}</span>
    </div>
  );
};

export default ActivityCard;
