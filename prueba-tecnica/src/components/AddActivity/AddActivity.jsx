import styles from "./AddActivity.module.scss";

const AddItinerary = ({ setShowActivity }) => {
  return (
    <div className={styles.activitySection}>
      <button
        className={styles.addButton}
        onClick={() => setShowActivity((prev) => !prev)}
      >
        Add activity
      </button>
    </div>
  );
};

export default AddItinerary;
