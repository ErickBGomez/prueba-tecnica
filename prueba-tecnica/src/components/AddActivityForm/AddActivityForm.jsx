import styles from "./AddActivityForm.module.scss";

const days = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

const AddActivityForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.form}>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="name">Activity name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="ex. My Activity"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          required
          placeholder="ex. This is a description of the activity"
        ></textarea>

        <label htmlFor="duration">Duration (in minutes)</label>
        <input type="number" name="duration" id="duration" required />

        <label htmlFor="day">Day</label>
        <select name="day" id="day" required>
          {days.map((day, index) => (
            <option key={index} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>

        <button type="submit" className={styles.addButton}>
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default AddActivityForm;
