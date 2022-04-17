import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-100 d-flex justify-content-center align-item-center">
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    );
  }

  let errorMsg;
  if (error) {
    errorMsg = (
      <div>
        <p className="text-danger">{error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(confirmPassword);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setErrorMessage("Password Not Matched");
    }
  };
  return (
    <div className="container w-50 mx-auto my-5">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="confirmPassword"
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
      <div>
        <p className="text-danger">{errorMessage}</p>
      </div>
      {errorMsg}
      <p>
        Already Have an Account?
        <Link
          to="/login"
          className="text-primary ps-2 pe-auto text-decoration-none"
        >
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
