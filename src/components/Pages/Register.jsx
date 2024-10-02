import React from 'react';

const Register = ({ isRegisterPopupOpen, toggleRegisterPopup }) => {
  if (!isRegisterPopupOpen) return null; // Only render if the popup is open

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 lg:w-1/2 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleRegisterPopup}
        >
          &times;
        </button>

        {/* Popup Content */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">I want to create a Student account</h2>
          <button className="bg-blue-600 text-white w-full py-2 rounded-lg 
          h-14 mb-4">
            I want to study
          </button>
          <hr className="my-4" />
          <h2 className="text-xl font-bold  mb-4">I want to create a Tutor account</h2>
          <button className="bg-blue-600 text-white w-full h-14 py-2 rounded-lg">
            I want to teach online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
