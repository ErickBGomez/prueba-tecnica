import { useContext, useState } from "react";
import styles from "./AddActivityForm.module.scss";
import ActivityContext from "../../context/ActivitiesContext";
import days from "../../helpers/days";

const AddActivityForm = () => {
  const { state, dispatch } = useContext(ActivityContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    description: "",
    duration: "",
    day: "monday",
  });

  const validateForm = () => {
    let errors = {};

    // Every field is required
    if (!values.name.trim()) errors = { ...errors, name: "Name is required" };

    if (!values.description.trim())
      errors = { ...errors, description: "Description is required" };

    if (!values.duration.trim())
      errors = { ...errors, duration: "Duration is required" };

    if (Number(values.duration) <= 0)
      // Duration must be greater than 0
      errors = { ...errors, duration: "Duration must be greater than 0" };

    if (!values.day) errors = { ...errors, day: "Day is required" };

    setErrors(errors);

    return Object.keys(errors).length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do not submit if form has errors
    if (validateForm()) {
      alert("Your form has errors. Please fix them before submitting.");
      return;
    }

    // Set new value to activities state from context + reducer
    dispatch({ type: "Add", newActivity: { ...values, id: state.length } });

    // Reset form values
    setValues({
      name: "",
      description: "",
      duration: "",
      day: "monday",
    });
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
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
              setErrors({ ...errors, name: null });
            }}
          />
          <p className={styles.errorMessage}>{errors.name}</p>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            placeholder="ex: This is a description of the activity"
            value={values.description}
            onChange={(e) => {
              setValues({ ...values, description: e.target.value });
              setErrors({ ...errors, description: null });
            }}
          ></textarea>
          <p className={styles.errorMessage}>{errors.description}</p>
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
            onChange={(e) => {
              setValues({ ...values, duration: e.target.value });
              setErrors({ ...errors, duration: null });
            }}
          />
          <p className={styles.errorMessage}>{errors.duration}</p>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="day">Day</label>
          <select
            name="day"
            id="day"
            required
            value={values.day}
            onChange={(e) => {
              setValues({ ...values, day: e.target.value });
              setErrors({ ...errors, day: null });
            }}
          >
            {days.map((day, index) => (
              <option key={index} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
          <p className={styles.errorMessage}>{errors.day}</p>
        </div>

        <button type="submit" className={styles.addButton}>
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default AddActivityForm;
