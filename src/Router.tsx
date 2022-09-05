import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Launchpad from "./Components/Screens/Launchpad";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launchpad" element={<Launchpad />} />
      </Routes>
    </>
  );
};

export default Router;
