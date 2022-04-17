import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, description, price, id } = service;
  const navigate = useNavigate();

  const navigateToCheckout = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="p-2 rounded" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="p-2">{description.slice(0, 58)}</Card.Text>
          <Card.Subtitle className="pb-5">Fee: ${price}</Card.Subtitle>
          <Button
            onClick={() => navigateToCheckout(id)}
            className="position-absolute bottom-0 start-50 translate-middle-x mb-3"
            variant="info"
          >
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
