import React from "react";
import FrameImg from "../../images/Frame.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./OrderSubmited.css";
const OrderSubmited = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="order-submit d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src={FrameImg} alt="" />
        </div>
        <div>
          {i18n.language === "ar" ? (
            <p className="order-submit-confirmed">
              {"#123RG231567Y"} {t("order")} {t("confirmed")}
            </p>
          ) : (
            <p className="order-submit-confirmed">
              {t("order")} {"#123RG231567Y"} {t("confirmed")}
            </p>
          )}
        </div>
        <Link to="/trackorder">
          <button type="button" className="track-order-btn">
            {t("track_order")}
          </button>
        </Link>
        <div>
          <p className="order-submit-generate">{t("generate_receipt")} </p>
        </div>
      </section>
    </>
  );
};

export default OrderSubmited;
