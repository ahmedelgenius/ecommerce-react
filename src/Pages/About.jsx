import React from "react";
import BreadCrumb from "./../Components/BreadCrumb";
import cartIcon from "../images/icons/shopping-cart.svg";
import cardIcon from "../images/icons/card.svg";
import headphoneIcon from "../images/icons/headphone.svg";
import carIcon from "../images/icons/truck-fast.svg";
import clintImg from "../images/reviwe/Ellipse 92.png";
import ReactStars from "react-rating-stars-component";
const aboutData = {
  desc1: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged`,
  desc2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  `,
};
const clintsReview = [
  {
    id: 1,
    reviewerName: "Buyer Name",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
  },
  {
    id: 2,
    reviewerName: "Buyer Name",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
  },
  {
    id: 3,
    reviewerName: "Buyer Name",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
  },
  {
    id: 4,
    reviewerName: "Buyer Name",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
  },
];
const About = () => {
  return (
    <>
      <section className="about">
        <BreadCrumb title="About us" />
        <div className="container">
          <div className="row">
            <section className="section-heading-start py-3">
              <h3 className="text-uppercase heading-start-title">our story</h3>
              <span className="heading-start-line"></span>
            </section>
          </div>

          <div className="">
            <p className="about-desc">{aboutData.desc1}</p>
            <p className="about-desc">{aboutData.desc2}</p>
          </div>
        </div>
      </section>
      <section className="why-choose my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start py-5">
                <h3 className="text-uppercase heading-start-title">
                  why choose us
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
          </div>
          <div className="row px-4  ">
            <div className="col-md-3">
              <div className="feature-card text-center  d-flex  justify-content-center align-items-center flex-column">
                <div className="feature-icon py-3 bg-main-color">
                  <img src={cartIcon} alt="" />
                </div>
                <h3 className="feature-title">Easy shopping</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={headphoneIcon} alt="" />
                </div>
                <h3 className="feature-title">Customer service </h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={cardIcon} alt="" />
                </div>
                <h3 className="feature-title">Easy Payment</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={carIcon} alt="" />
                </div>
                <h3 className="feature-title">Fast shopping</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clints my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start py-3">
                <h3 className="text-uppercase heading-start-title">
                  happy clients
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
            <div className="row px-3">
              {clintsReview.map((item) => (
                <div className="col-md-6 col-sm-12">
                  <div className="client-card m-3" key={item.id}>
                    <div className="card-head pb-2 d-flex gap-15 flex-row  ">
                      <div className="client-image">
                        <img src={item.reviewerPic} className="w-100" alt="" />
                      </div>
                      <div className="card-details pt-1 d-flex gap-15 ">
                        <h5 className="client-name">{item.reviewerName}</h5>
                        <div className=" testimonial-card-rating pt-2 ">
                          <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                            size={20}
                            activeColor="#F5BC4C"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="card-client-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
