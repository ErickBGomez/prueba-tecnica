import ActivityContext from "./ActivitiesContext";

const ActivitiesContextProvider = ({ children }) => {
  // Set reducer here

  return (
    <ActivityContext.Provider value={{}}>{children}</ActivityContext.Provider>
  );
};

export default ActivitiesContextProvider;
