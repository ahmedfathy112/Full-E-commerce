import React, { useRef, useState } from "react";
import "./Signin.css";
import image1 from "../Images/loginImage.png";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase";
import Swal from "sweetalert2";
import googleImage from "../Images/signGoggleImage.jpeg";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
export function SignInWithGoogle() {
  const navigate2 = useNavigate();

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: `Sign Successfuly!`,
          confirmButtonText: "Okay",
        });
        navigate2("/profile");
      } else {
        Swal.fire({
          icon: "error",
          title: "error",
          text: `There is error`,
          confirmButtonText: "Okay",
        });
      }
    });
  }
  return (
    <>
      <div
        className="flex flex-col justify-center w-full text-center my-3"
        onClick={googleLogin}
      >
        <h3>--OR--</h3>
        <img
          src={googleImage}
          className="w-[250px] h-[90px] cursor-pointer mx-auto"
        ></img>
      </div>
    </>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      );
      setLoading(true);
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-between p-0 max-md:flex-col max-md:min-h-[100vh]">
      <div className="p-0 h-full w-1/2 max-md:w-full">
        <img src={image1} className="h-full w-100" alt="Left" />
      </div>
      <div className="col-lg-5 col-md-12 p-0 d-flex align-items-center justify-content-center bg-white w-1/2 max-md:w-full">
        <form className="w-75" onSubmit={handleSignIn}>
          <h1 className="text-start mb-3 mt-4 text-2xl font-bold">Sign In</h1>
          <h6 className="mb-4">
            Don’t have an account yet?
            <span>
              <Link to="/signup"> Sign Up</Link>
            </span>
          </h6>
          <div className="form-group mb-3">
            <label htmlFor="usernameOrEmail">Your email address</label>
            <input
              type="email"
              className="form-control input-underline"
              id="usernameOrEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailref}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control input-underline"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordref}
            />
          </div>
          <div className="mb-3 flex flex-row justify-start">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label ml-2" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <SignInWithGoogle />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
