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
    serverUrl={`https://mwj2qxb21teu.usemoralis.com:2053/server`}
    appId={`GQNIEmL10MLNP2etcJFDqe2CIBjuW50g1WxQR6WV`}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </MoralisProvider>
);
