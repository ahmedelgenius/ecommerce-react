import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-content  my-5 w-100 text-center">
              <h2 className="fs-1 fw-bold">
                4<span className="text-main-color">0</span>4
              </h2>
              <h2>OH! You're lost.</h2>
              <p className="my-5">
                the page you are looking not exist. But you can click teh button
                below to go back to the homepage.
              </p>
              <Link to="/">
                <button className="btn bg-main-color text-white px-2">
                  Go Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
