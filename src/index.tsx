import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MoralisProvider
    serverUrl={`${process.env.REACT_APP_SERVER_URL_DEV}`}
    appId={`${process.env.REACT_APP_APP_ID_DEV}`}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </MoralisProvider>
);
