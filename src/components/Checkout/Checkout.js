import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is Checkout</h1>
      <h2>Service Number: {serviceId}</h2>
    </div>
  );
};

export default Checkout;
