import React, { useState } from "react";
import { DataContext } from "./Utils/DataContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Launchpad from "./Components/Screens/Launchpad";
const Router = () => {
  const [store, setStore] = useState({
    walletAddress: "",
  });
  return (
    <>
      <DataContext.Provider value={{ store, setStore }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
};

export default Router;
