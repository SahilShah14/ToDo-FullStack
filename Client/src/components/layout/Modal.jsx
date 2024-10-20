import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full z-50"> 
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-800 text-gray-300"> 
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3> 
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300" 
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;