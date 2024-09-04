import React from 'react';

const Modal = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white text-center py-4 px-8 rounded-lg">
        {message}
      </div>
    </div>
  );
};

export default Modal;