import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Sidebar.css";
import { useTranslation } from "react-i18next";
const options = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];
const options_ar = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];
const Sidebar = () => {
  const activeLink = "sidebar-active-link sidebar-list-item ";
  const normalLink = " sidebar-list-item  ";
  const [language, setLanguage] = useState("");
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-content">
          <div>
            <p className="sidebar-user-name">{t("user_name")}</p>
            <p className="sidebar-email">Email@email.com</p>
          </div>
          <div className="sidebar-list">
            <NavLink
              to="/user/profile"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">{t("profile")}</p>
            </NavLink>

            <NavLink
              to="/user/myorders"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">{t("my_orders")}</p>
            </NavLink>

            <NavLink
              to="/user/addresses"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">{t("addresses")}</p>
            </NavLink>

            <NavLink
              to="/user/savecards"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link-card">{t("saved_cards")}</p>
            </NavLink>

            <p className="sidebar-list-select">
              <Select
                className="me-1"
                placeholder={t("languages")}
                // defaultValue={language}
                onChange={(val) => {
                  i18n.changeLanguage(val.value);
                }}
                options={i18n.language === "ar" ? options_ar : options}
              />
            </p>

            <div className="sidebar-list-sign ">
              <button onClick={goToLogin} className="sidebar-nav-link ">
                {t("sign_out")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
