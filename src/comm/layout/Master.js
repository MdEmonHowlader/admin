import React from "react";

import Footer from "../partials/Footer";
import Nav from "../partials/nav";
import SideBer from "../partials/SideBer";
import { Outlet } from "react-router-dom";

export const Master = () => {
  return (
    <>
      <Nav />
      <div id="layoutSidenav">
        <SideBer />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Master;
