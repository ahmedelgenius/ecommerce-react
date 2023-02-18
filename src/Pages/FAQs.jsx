import React from "react";
import BreadCrumb from "./../Components/BreadCrumb";
import searchIcon from "../images/icons/faqsearch.svg";
import emailIcon from "../images/icons/faqmail.svg";
import cardIcon from "../images/icons/faqcredit-card.svg";
import slashIcon from "../images/icons/faqslash.svg";
import truckIcon from "../images/icons/faqtruck.svg";
import dollarIcon from "../images/icons/faqdollar-sign.svg";
import tagIcon from "../images/icons/faqtag.svg";
const FAQs = () => {
  return (
    <>
      <section className="faq">
        <div className="ask-us">
          <BreadCrumb title="FAQ" />

          <div className="container ">
            <div className="ask-us-content d-flex  align-items-center flex-column ">
              <h3 className="faq-title">FAQs</h3>
              <h3 className="faq-ask-anything">Ask us anything</h3>
              <h3 className="faq-desc">
                Have any questions? We're here to assist you.
              </h3>
              <div className="faq-search-container">
                <img src={searchIcon} alt="" />
                <input
                  type="text"
                  name="search_input"
                  placeholder="Search here"
                  className="faq-search-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="faq-questions ps-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={emailIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    How do l change my account email
                  </h3>
                  <p className="faq-card-desc">
                    You can log in to your account and change it from your
                    Profile {">"} Edit Profile. Then go to the general tab to
                    change your email.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={cardIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    What should I do if my payment fails?
                  </h3>
                  <p className="faq-card-desc">
                    If your payment fails, you can use the (COD) payment option,
                    if available on that order. If your payment is debited from
                    your account after a payment failure, it will be credited
                    back within 7-10 days.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={slashIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    What is your cancellation policy?
                  </h3>
                  <p className="faq-card-desc">
                    You can now cancel an order when it is in packed/shipped
                    status. Any amount paid will be credited into the same
                    payment mode using which the payment was made
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={truckIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    How do I check order delivery status ?
                  </h3>
                  <p className="faq-card-desc">
                    Please tap on “My Orders” section under main menu of
                    App/Website/M-site to check your order status.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={dollarIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    What is Instant Refunds?
                  </h3>
                  <p className="faq-card-desc">
                    Upon successful pickup of the return product at your
                    doorstep, Myntra will instantly initiate the refund to your
                    source account or chosen method of refund. Instant Refunds
                    is not available in a few select pin codes and for all self
                    ship returns.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={tagIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    How do I apply a coupon on my order?
                  </h3>
                  <p className="faq-card-desc">
                    You can apply a coupon on cart page before order placement.
                    The complete list of your unused and valid coupons will be
                    available under “My Coupons” tab of App/Website/M-site.
                  </p>
                </div>
              </div>
            </div>
            <div className="connection-with-team">
              <div>
                <h3> Still have questions?</h3>
                <p>
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <div>
                <button className="connection-team-btn">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
