import React from 'react';
import Modal from '../layout/Modal'; // Assuming you placed your Modal component in a 'common' folder

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Task">
      <div className="text-white">
        <p>Are you sure you want to delete this task?</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
