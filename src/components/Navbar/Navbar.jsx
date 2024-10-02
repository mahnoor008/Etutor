import React, { useState } from "react";
import { NavbarMenu } from "../mockdata/Data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import SignInModal from "../Pages/SignIn";
import Register from "../Pages/Register"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false); // Sign In modal state
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false); // Register popup state

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleRegisterPopup = () => {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className=" text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link} 
                    className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button Section */}
          <div className="hidden lg:block space-x-6">
            <Link to="/signin" onClick={openModal} className="font-semibold">
              Sign in{" "}
            </Link>

            <button
              onClick={toggleRegisterPopup}
              className="text-white bg-secondary font-semibold rounded-full px-6 py-2"
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger section */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* Mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />

      {/* SignInModal */}
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Register Popup */}
      <Register
        isRegisterPopupOpen={isRegisterPopupOpen}
        toggleRegisterPopup={toggleRegisterPopup}
      />
    </div>
  );
};

export default Navbar;
