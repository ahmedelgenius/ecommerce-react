import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb";
import { useTranslation } from "react-i18next";

const MasterLayout = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      {i18n.language === "ar" ? (
        <BreadCrumb title="عربة التسوق" secondTitle="الدفع" />
      ) : (
        <BreadCrumb title="cart" secondTitle="check out" />
      )}

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
