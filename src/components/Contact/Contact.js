import React from "react";

const Contact = () => {
  return (
    <div className="container p-3 border mb-4 rounded shadow">
      <h2>Contact Me</h2>
      <p>I am working to ensure you receive the best treatment.</p>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 col-lg-4">
          <div className="d-flex align-items-center justify-content-center me-2">
            <img
              src="https://img.icons8.com/ios-filled/40/000000/apple-phone.png"
              alt="phone icon"
            />

            <p className="text-info pt-3 ps-2">415-225-333</p>
          </div>
          <div className="d-flex align-items-center justify-content-center ms-5">
            <img
              src="https://img.icons8.com/ios-filled/40/000000/new-post.png"
              className="ps-2"
              alt="email icon"
            />
            <p className="text-info pt-3 ps-2">toothcare@gmail.com</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src="https://img.icons8.com/ios-filled/40/000000/domain.png"
              alt="website icon"
            />
            <p className="text-info pt-3 ps-2">toothcare.com</p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <img
            src="https://img.icons8.com/external-filled-line-rakhmat-setiawan/70/000000/external-contact-contact-us-and-customer-service-filled-line-rakhmat-setiawan-10.png"
            alt="contact icon"
          />
          <h5>Business Hours</h5>
          <p>Mon-Fri ---- 10AM to 8PM</p>
          <p>Sat,Sun ---- Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
