import { useContext } from "react";
import days from "../../helpers/days";
import ActivityColumn from "../ActivityColumn/ActivityColumn";
import styles from "./ColumnsPerDay.module.scss";
import ActivityContext from "../../context/ActivitiesContext";

const mappedDays = days.map((day) => day.value);

const ColumnsPerDay = () => {
  const { state } = useContext(ActivityContext);

  return (
    <div className={styles.columns}>
      {mappedDays.map((day) => (
        <ActivityColumn
          day={day}
          activities={state.filter((activity) => activity.day === day)}
        />
      ))}
    </div>
  );
};

export default ColumnsPerDay;
