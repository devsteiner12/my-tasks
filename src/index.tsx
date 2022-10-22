import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./contexts/TasksContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
