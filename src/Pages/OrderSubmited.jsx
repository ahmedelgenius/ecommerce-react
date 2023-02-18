import React from "react";
import FrameImg from "../images/Frame.png";
import { Link } from "react-router-dom";
const OrderSubmited = () => {
  return (
    <>
      <section className="order-submit d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src={FrameImg} alt="" />
        </div>
        <div>
          <p className="order-submit-confirmed">
            Order {"#123RG231567Y"} Confirmed
          </p>
        </div>
        <Link to="/trackorder">
          <button type="button" className="track-order-btn">
            Track Order
          </button>
        </Link>
        <div>
          <p className="order-submit-generate">Generate Receipt</p>
        </div>
      </section>
    </>
  );
};

export default OrderSubmited;
