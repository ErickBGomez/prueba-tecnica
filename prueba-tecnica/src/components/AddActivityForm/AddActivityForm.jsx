import { useState } from "react";
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
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    description: "",
    duration: "",
    day: "monday",
  });

  const validateForm = () => {
    // Every field is required
    if (!values.name.trim()) setErrors({ ...errors, name: "Name is required" });

    if (!values.description.trim())
      setErrors({ ...errors, description: "Description is required" });

    if (!values.duration.trim())
      setErrors({ ...errors, duration: "Duration is required" });

    if (values.duration <= 0)
      // Duration must be greater than 0
      setErrors({ ...errors, duration: "Duration must be greater than 0" });

    if (!values.day) setErrors({ ...errors, day: "Day is required" });

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({}); // Reset errors

    // Do not submit if form has errors
    if (!validateForm()) {
      alert("Your form has errors. Please fix them before submitting.");
      return;
    }

    // Set new value to activities state from context + reducer
  };

  return (
    <div className={styles.addActivity}>
      <form action="/" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Activity name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="ex: My Activity"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            placeholder="ex: This is a description of the activity"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="duration">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="ex: 60"
            required
            value={values.duration}
            onChange={(e) => setValues({ ...values, duration: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="day">Day</label>
          <select
            name="day"
            id="day"
            required
            value={values.day}
            onChange={(e) => setValues({ ...values, day: e.target.value })}
          >
            {days.map((day, index) => (
              <option key={index} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.addButton}>
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default AddActivityForm;
