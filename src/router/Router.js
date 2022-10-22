import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, SecondPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
};

export default Router;
