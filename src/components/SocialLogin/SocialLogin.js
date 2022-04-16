import React from "react";
import google from "../../images/icons/google.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      <div>
        <button className="btn btn-dark d-block mx-auto h-50 w-50 my-2">
          <img src={google} alt="" />
          <span className="px-2 fw-bold">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
