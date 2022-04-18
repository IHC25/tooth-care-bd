import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Checkout = () => {
  const [confirmedCheckout, setConfirmedCheckout] = useState("");
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    toast("Thank You For Booking");
    setConfirmedCheckout(
      "You have successfully booked selected service. I will contact you soon. Check your email for Appointment Time and Date."
    );
  };

  return (
    <div className="py-4">
      <h1 className="py-2">Checkout</h1>
      <h3>Service Number: {serviceId}</h3>
      <div className="container py-3">
        <Form onSubmit={handleBooking} className="w-50 mx-auto p-2">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label column sm="4">
              Your Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                plaintext
                readOnly
                defaultValue={user?.displayName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Your Email
            </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly defaultValue={user?.email} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label column sm="4">
              Your Phone Number
            </Form.Label>
            <Col sm="8">
              <Form.Control
                plaintext
                readOnly
                defaultValue={user?.phoneNumber}
              />
            </Col>
          </Form.Group>
          <Button
            className="text-white fw-bold p-2 rounded"
            variant="info"
            type="submit"
          >
            Proceed Booking
          </Button>
        </Form>
        <div className="d-flex justify-content-center py-2">
          <p className="text-warning">{confirmedCheckout}</p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Checkout;
