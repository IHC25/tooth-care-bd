import React from "react";
import error from "../../images/error.jpg";

const PageNotFound = () => {
  return (
    <div className="container my-5">
      <img className="img-fluid" src={error} alt="" />
      <h3>Looks Like This Page Went On Vacation</h3>
      <p>Try our homepage instead</p>
    </div>
  );
};

export default PageNotFound;
