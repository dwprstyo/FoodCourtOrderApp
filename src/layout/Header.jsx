import React from "react";
import { motion } from "framer-motion";
import { BsFillBasket2Fill } from "react-icons/bs";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  return (
    <div className="fixed z-50 w-screen p-6 px-10">
      {/* for desktop & tablet */}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} alt="logo" className="w-20 object-cover" />
        </Link>
        <div className="flex items-center gap-7">
          <ul className="flex items-center gap-7">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Contact
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <BsFillBasket2Fill className="text-xl text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" />
            <p className="absolute -top-2 -right-0 w-3 h-3 rounded-full bg-cartNumBg flex justify-center items-center text-white text-2xs font-semibold">
              3
            </p>
          </div>

          <div className="relative">
            <motion.img
              src={Avatar}
              alt="userprofile"
              className="w-8 h-8 drop-shadow-sm cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="flex md:hidden w-full h-full">oyyo</div>
    </div>
  );
};

export default Header;
