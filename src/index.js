import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Usercontext } from "./components/Usercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Usercontext>
      <App />
    </Usercontext>
  </React.StrictMode>,
);
