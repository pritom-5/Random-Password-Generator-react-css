import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PasswordContextProvider } from "./store/PasswordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordContextProvider>
    <App />
  </PasswordContextProvider>
);
