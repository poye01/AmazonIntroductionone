import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initialState,reducer } from "./utility/reducer.js";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
