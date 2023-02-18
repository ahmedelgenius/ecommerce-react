import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { myOrdersProducts } from "../../data";
import myOrdersEmptyImg from "../../images/myordersEmty.png";
const Tab = styled.button`
  padding: 10px 0px;
  cursor: pointer;
  opacity: 1;
  background: white;
  border: 0;
  outline: 0;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #989898;
  border-bottom: 1px solid rgba(100, 100, 100, 0.66);

  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid #F1A002;
    color: #F1A002;
    opacity: 1;
  `}
`;
const types = ["Completed", "Delivered", "Pending", "Canceled"];

const MyOrders = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <section className="my-orders">
        <div className="section-heading-start    w-100 pb-3">
          <h3 className="  cart-totals-title">My orders</h3>
          <span className="heading-start-line"></span>
        </div>
        {myOrdersProducts.length > 0 ? (
          <div>
            {" "}
            <div className="d-flex justify-content-around">
              {types.map((type) => (
                <Tab
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </Tab>
              ))}
            </div>
            <div className="my-orders-heading">
              <div className="row">
                <div className="col-md-5">
                  <div className="">
                    <p className="my-orders-desc w-100 d-flex  justify-content-start  ">
                      Product
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex my-orders-container justify-content-between">
                    <p className="my-orders-desc  ">Order date</p>
                    <p className="my-orders-desc ">order summary</p>
                    <p className="my-orders-desc  ">status</p>
                    <p className="my-orders-desc  pe-2 ">Amount total</p>
                  </div>
                </div>
              </div>
            </div>
            {active === "Completed" &&
              myOrdersProducts.map((product, index) => (
                <div className="my-orders-card" key={index}>
                  <div className="row">
                    <div className="col-md-5">
                      <div className=" d-flex">
                        <div>
                          <img src={product.img} alt="" />
                        </div>
                        <div>
                          <h3 className="orders-product-name">
                            {product.name}
                          </h3>
                          <p className="orders-product-desc">{product.desc}</p>
                        </div>
                      </div>
                      {product.img2 && product.name2 && product.desc2 ? (
                        <div className=" d-flex  pt-5">
                          <div>
                            <img src={product.img2} alt="" />
                          </div>
                          <div>
                            <h3 className="orders-product-name">
                              {product.name2}
                            </h3>
                            <p className="orders-product-desc">
                              {product.desc2}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {product.img3 && product.name3 && product.desc3 ? (
                        <div className="d-flex pt-5">
                          <div>
                            <img src={product.img3} alt="" />
                          </div>
                          <div>
                            <h3 className="orders-product-name">
                              {product.name3}
                            </h3>
                            <p className="orders-product-desc">
                              {product.desc3}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {product.img2 && product.img3 ? (
                      <div className="col-md-7">
                        <div className="d-flex orders-card-container  justify-content-between">
                          <p className="orders-product-date ps-2">
                            {product.orderDate}
                          </p>
                          <p className="orders-product-summary  ">
                            {product.orderSummary}
                          </p>
                          <p className="orders-product-status   ">
                            {product.status}
                          </p>

                          <p className="orders-product-summary pe-3  ">
                            {product.amountTotal}$
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="col-md-7">
                        <div className="d-flex pt-4 justify-content-between">
                          <p className="orders-product-date ps-2">
                            {product.orderDate}
                          </p>
                          <p className="orders-product-summary  ">
                            {product.orderSummary}
                          </p>
                          <p className="orders-product-status   ">
                            {product.status}
                          </p>

                          <p className="orders-product-summary pe-3 ">
                            {product.amountTotal}$
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {product.img2 && product.img3 ? (
                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="orders-product-btn">
                        More details
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-end">
                      <button type="button" className="orders-product-btn">
                        More details
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <div className="orders-empty">
            <div>
              <img src={myOrdersEmptyImg} alt="" />
            </div>
            <h2 className="orders-empty-text">No order yet</h2>
            <Link to="/categories" className="orders-empty-btn">
              Shop Now
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default MyOrders;
