import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

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
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    if (email) {
      toast("Sent email");
    } else {
      toast("Please Enter Your Email");
    }
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            ref={emailRef}
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

        <Button
          variant="info"
          className="d-block w-50 mx-auto mb-2 text-white fw-bold"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorMsg}
      <p>
        New to Tooth Care?
        <Link
          to="/signup"
          className="text-primary ps-2 pe-auto text-decoration-none"
        >
          Create a New Account
        </Link>
        <button
          onClick={handleResetPassword}
          className="btn btn-link text-primary text-decoration-none d-block mx-auto"
        >
          Forgotten Password?
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
