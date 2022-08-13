import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  FacebookAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { getAuth } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  //fb sign in
  const handleSignInWithFb = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    sendEmailVerification();
    alert("Email sent");
  };

  return (
    <div className="my-10">
      <div className="border border-gray-300 w-6/12 lg:w-4/12 mx-auto pt-3 rounded-md">
        <h2 className="text-4xl text-info font-bold text-center mb-5">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="">
            <label className="my-2 text-xl pl-3" htmlFor="email">Email</label>
            <input
            className="mt-2 w-full border border-gray-200 pl-3 py-1 outline-0 text-gray-400 text-xl"
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              placeholder="Write your email"
              required
            />
          </div>
          <div className="mt-2">
            <label className="my-2 text-xl pl-3" htmlFor="password">Password</label>
            <input
            className="mt-2 w-full border border-gray-200 pl-3 py-1 outline-0 text-gray-400 text-xl"
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              placeholder="Write your password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="text-xl cursor-pointer text-center font-bold text-info py-2 fob bg-slate-200 block w-full px-0" type="submit" value="Login" />
        </form>
        <p className="my-3 text-xl">
          New User?{" "}
          <Link className="text-green-500" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
