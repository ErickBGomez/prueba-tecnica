import { useEffect, useReducer } from "react";
import activitiesReducer from "../reducer/activitiesReducer";
import ActivityContext from "./ActivitiesContext";

const loadLocalStorage = () => {
  const activities = localStorage.getItem("activities");
  return activities ? JSON.parse(activities) : [];
};

const saveToLocalStorage = (activities) => {
  localStorage.setItem("activities", JSON.stringify(activities));
};

const ActivitiesContextProvider = ({ children }) => {
  // Set reducer here
  const [state, dispatch] = useReducer(activitiesReducer, loadLocalStorage());

  // Save to local storage when state changes
  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivitiesContextProvider;
