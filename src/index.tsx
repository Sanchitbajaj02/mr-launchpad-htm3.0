import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
