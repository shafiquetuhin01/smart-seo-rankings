import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import {FaPhoneAlt} from 'react-icons/fa';
const NavbarTop = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact-us");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const [user] = useAuthState(auth);
  console.log(user)

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  
  return (
    <div className="w-full bg-white border-y-4 border-t-[#0B467A] border-b-[#F47A1E]">
      <div
        className="lg:flex justify-between items-center mx-16"
        style={{ paddingBottom: "10px", paddingTop: "10px" }}
      >
        <div className="flex justify-items-center items-center">
          <div className="my-2 pr-2 border-r border-r-[#0B365B]">
            <img className="h-28 w-44" src="https://i.ibb.co/51w9GN8/logo.png" alt="logo" />
          </div>
          <div>
            <p className="sm:text-xl ml-7 italic font-bold text-1xl text-accent">
              Empowering
            </p>
            <p className="sm:text-xl ml-7 italic font-bold text-1xl text-accent">
              Businesses Online
            </p>
          </div>
        </div>
        <div className="grid justify-items-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="items-center flex">
              <a href="tel:855-444-4777" className="text-primary text-2xl hover:text-secondary ">
                <FaPhoneAlt className=""/>
              </a>
              <a href="tel:855-444-4777" className="text-3xl font-bold text-info mx-1 hover hover:text-secondary ">
                855-444-4777
              </a>
            </div>
            <div className="items-center flex">
              <button
                onClick={handleContact}
                className="p-1 text-white uppercase btn-primary mx-2 font-bold"
              >
                contact us
              </button>
              
              {user?
              <button className="py-1 px-3 text-white uppercase btn-secondary mx-2 font-bold" onClick={handleSignOut}>
               {user&&user?.displayName}
              </button>
              :<button
                onClick={handleLogin}
                className="p-1 uppercase btn-secondary font-bold text-white"
              >
                client login
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
