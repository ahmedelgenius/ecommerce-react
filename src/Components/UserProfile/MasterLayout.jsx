import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import BreadCrumb from "./../BreadCrumb";

const MasterLayout = () => {
  return (
    <>
      <BreadCrumb title="cart" secondTitle="check out" />
      <section className="master-layout">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar />
            </div>
            <div className="col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasterLayout;
