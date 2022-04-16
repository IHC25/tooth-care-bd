import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="container w-50 mx-auto my-5">
      <h2>Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          className="d-block w-50 mx-auto mb-2"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p>
        Already Have an Account?
        <Link
          to="/login"
          className="text-primary ps-2 pe-auto text-decoration-none"
        >
          Login
        </Link>
        <button className="btn btn-link text-primary text-decoration-none d-block mx-auto">
          Forgotten Password?
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
