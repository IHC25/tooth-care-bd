import { Spinner } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/icons/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-100 d-flex justify-content-center align-item-center">
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    );
  }

  let errorMessage;
  if (error) {
    errorMessage = (
      <div>
        <p className="text-danger">{error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-dark d-block mx-auto h-50 w-50 my-2"
        >
          <img src={google} alt="" />
          <span className="px-2 fw-bold">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
