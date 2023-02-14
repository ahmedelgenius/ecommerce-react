import React, { useState } from "react";
import { productDetailsImgs } from "../data";

const MyImage = () => {
  const [mainImage, setMainImage] = useState(productDetailsImgs[0].img);

  return (
    <>
      <div className="container--xxl">
        <div className="row">
          <div className="col-md-12">
            <img src={mainImage} className="w-100" alt="" />
          </div>
        </div>
      </div>
      <div className="container--xxl py-4">
        <div className="row ">
          {productDetailsImgs.map((item, index) => (
            <div
              className="col-md-3"
              onClick={() => setMainImage(item.img)}
              key={index}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyImage;
