import React from "react";
import BreadCrumb from "../Components/BreadCrumb";

const Terms = () => {
  return (
    <>
      <section className="terms">
        <BreadCrumb title="Terms and conditions" />
        <div className="container">
          <div className="section-heading-start   w-100  ">
            <h3 className=" cart-totals-title">Terms and conditions</h3>
            <span className="heading-start-line"></span>
          </div>
          <div>
            <div>
              <h3 className="terms-content-title pt-4 ps-2">1. Terms</h3>
              <p className="terms-content-desc ps-4">
                It is a long established fact that a reader will be using Lorem
                Ipsu distracted by the readable content of a page when t that a
                reader looking at its layout. The point of using Lorem Ipsum
                look like rea is that it has a more-or-less normal distribution
                of letters look like as opposed to using 'Content here, content
                here', making it look la look like readable English. looking at
                its layout. The point of using Lorem Ipsum look like rea is that
                it has a more-or-less normal distribution of letters look like
                as opposed to using 'Content here, content here', making it look
                la look like readable English.
              </p>
            </div>
            <div>
              <h3 className="terms-content-title ps-2 py-2">2. Use License</h3>
              <p className="terms-content-desc ps-4">
                It is a long established fact that a reader will be using Lorem
                Ipsu distracted by the readable content of a page when t that a
                reader looking at its layout. The point of using Lorem Ipsum
                look like rea is that it has a more-or-less normal distribution
                of letters look like as opposed to using 'Content here, content
                here', making it look la look like
              </p>
              <ol className="pt-3 ms-3">
                <li className="terms-content-desc">
                  he point of using Lorem Ipsum look like rea is that it has a
                  more-or-less normal distribution of letters{" "}
                </li>
                <li className="terms-content-desc py-2">
                  Lorem Ipsum look like rea is that it has a more-or-less normal
                  distribution of letters{" "}
                </li>
                <li>
                  using Lorem Ipsum look like rea is that it has a more-or-less
                  normal distribution of letters
                </li>
                <li className="terms-content-desc pt-2">
                  psum look like rea is that it has a more-or-less normal
                  distribution of letters{" "}
                </li>
              </ol>
              <p className=" terms-content-desc py-5 ms-5">
                he point of using Lorem Ipsum look like rea is that it has a
                more-or-less normal distribution of letters he point of using
                Lorem Ipsum look like rea is that it has a more-or-less normal
                distribution of letters{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
