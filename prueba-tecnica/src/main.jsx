import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import ActivitiesContextProvider from "./context/ActivitiesContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActivitiesContextProvider>
      <App />
    </ActivitiesContextProvider>
  </StrictMode>
);
