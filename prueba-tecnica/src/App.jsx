import Title from "./components/Title/Title";
import AddActivity from "./components/AddActivity/AddActivity";
import { useState } from "react";
import AddActivityForm from "./components/AddActivityForm/AddActivityForm";

const App = () => {
  const [showActivity, setShowActivity] = useState(true);

  return (
    <>
      <Title />
      <AddActivity setShowActivity={setShowActivity} />
      {showActivity && <AddActivityForm />}
    </>
  );
};

export default App;
