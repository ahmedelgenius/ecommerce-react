import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import { useTranslation } from "react-i18next";

import "./Terms.css";
import { tremsDesc } from "../../data";

const Terms = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="terms">
        {i18n.language === "ar" ? (
          <BreadCrumb title="الأحكام والشروط" />
        ) : (
          <BreadCrumb title="Terms and conditions" />
        )}

        <div className="container">
          <div className="section-heading-start   w-100  ">
            <h3 className=" cart-totals-title">{t("terms and conditions")}</h3>
            <span className="heading-start-line"></span>
          </div>
          <div>
            <div>
              <h3 className="terms-content-title pt-4 ps-2">{t("1_terms")}</h3>
              <p className="terms-content-desc ps-4">
                {i18n.language === "ar"
                  ? tremsDesc.desc_1_ar
                  : tremsDesc.desc_1}
              </p>
            </div>
            <div>
              <h3 className="terms-content-title ps-2 py-2">
                {t("2_use_License")}
              </h3>
              <p className="terms-content-desc ps-4">
                {i18n.language === "ar"
                  ? tremsDesc.desc_2_ar
                  : tremsDesc.desc_2}
              </p>
              <ol className="pt-3 ms-3">
                <li className="terms-content-desc">
                  {i18n.language === "ar"
                    ? tremsDesc.desc_3_ar
                    : tremsDesc.desc_3}
                </li>
                <li className="terms-content-desc py-2">
                  {" "}
                  {i18n.language === "ar"
                    ? tremsDesc.desc_3_ar
                    : tremsDesc.desc_3}
                </li>
                <li>
                  {" "}
                  {i18n.language === "ar"
                    ? tremsDesc.desc_3_ar
                    : tremsDesc.desc_3}
                </li>
                <li className="terms-content-desc pt-2">
                  {" "}
                  {i18n.language === "ar"
                    ? tremsDesc.desc_3_ar
                    : tremsDesc.desc_3}
                </li>
              </ol>
              <p className=" terms-content-desc py-5 ms-5">
                {i18n.language === "ar"
                  ? tremsDesc.desc_4_ar
                  : tremsDesc.desc_4}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
