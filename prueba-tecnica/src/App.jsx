import Title from "./components/Title/Title";
import AddActivity from "./components/AddActivity/AddActivity";
import { useState } from "react";
import AddActivityForm from "./components/AddActivityForm/AddActivityForm";
import ColumnsPerDay from "./components/ColumnsPerDay/ColumnsPerDay";

const App = () => {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <>
      <Title />
      <AddActivity setShowActivity={setShowActivity} />
      {showActivity && <AddActivityForm />}
      <ColumnsPerDay />
    </>
  );
};

export default App;
