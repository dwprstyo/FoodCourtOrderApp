import React from "react";
import { AnimatePresence } from "framer-motion";

import Router from "../router/Router";

import Header from "./Header";

const Layout = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <div className="mt-24 p-8 w-full">
          <Router />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Layout;
