import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="container w-50 mx-auto my-5">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button
          variant="primary"
          className="d-block w-50 mx-auto mb-2"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p>
        New to Tooth Care?
        <Link
          to="/signup"
          className="text-primary ps-2 pe-auto text-decoration-none"
        >
          Create a New Account
        </Link>
        <button className="btn btn-link text-primary text-decoration-none d-block mx-auto">
          Forgotten Password?
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
