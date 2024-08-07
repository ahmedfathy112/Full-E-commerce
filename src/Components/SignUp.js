import React, { useRef, useState } from "react";
import "./Login.css";
import image1 from "../Images/loginImage.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase"; // تأكد من المسار الصحيح
import { setDoc, doc } from "firebase/firestore";
import { Toast } from "react-bootstrap";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";
import { SignInWithGoogle } from "./SignIn";

function SignUp() {
  // const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      );
      const user = auth.currentUser;
      setError("");
      console.log(user);
      console.log("user signdup succes!");
      if (user) {
        setDoc(doc(db, "Users", user.uid), {
          Email: user.email,
          userName: username,
        });
      }
      setLoading(true);
      // await signup(emailref.current.value, passwordref.current.value);
      navigate("/profile");
    } catch (error) {
      setError("Failed to create an account!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <div className="h-[100vh] flex w-full justify-between p-0 max-md:flex-col max-md:justify-center max-md:min-h-[150vh]">
      <div className="w-1/2 h-full max-md:w-full max-md:h-[350px]">
        <img src={image1} className="h-full w-100" alt="Left" />
      </div>
      <div className="flex justify-start pl-[50px] pb-[150px] pt-5 bg-white w-1/2 h-full max-md:w-full">
        <form className="w-75 h-full" onSubmit={handleSubmit}>
          {error && (
            <p className="error-message text-xl text-red-600 font-medium underline">
              {error}
            </p>
          )}
          <h1 className="text-start mb-3 text-2xl font-bold">Sign Up</h1>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control input-underline outline-none"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control input-underline outline-none"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailref}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control input-underline outline-none"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordref}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input outline-none"
              id="terms"
            />
            <label className="form-check-label" htmlFor="terms">
              I agree with <a className="a">Privacy Policy</a> and{" "}
              <a className="a">Terms of Use</a>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <p className="text-center mt-3 sigin">
            Already have an account?
            <Link className="text-[17px] font-semibold ml-2" to="/login">
              Log In
            </Link>
          </p>
          <SignInWithGoogle />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
