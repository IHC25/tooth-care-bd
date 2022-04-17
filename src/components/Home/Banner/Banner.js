import React from "react";
import banner from "../../../images/banner/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="row g-0 my-2 py-3">
        <div className="col-12 col-lg-6">
          <div>
            <img className="img-fluid px-3" src={banner} alt="banner" />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="px-2">
            <h4 className="text-info">Care For Your Smile</h4>
            <h3 className="text-primary">Committed To Excellence</h3>
            <p className="fs-3">
              “Every tooth in a man's head is more valuable than a diamond.”
              <br />
              <span className="fw-bold">- Miguel de Cervantes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
