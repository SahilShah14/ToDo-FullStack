import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Modal from '../layout/Modal';
import { taskAPI } from '../../services/api';
import LoadingSpinner from '../layout/LoadingSpinner';


const EditTaskModal = ({ isOpen, onClose, task, onTaskUpdated }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (task) {
      setTaskData({
        title: task.title,
        description: task.description
      });
    }
  }, [task]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskData.title.trim()) {
      toast.error('Title is required');
      return;
    }

    try {
      setIsLoading(true); // Set loading state to true
      const response = await taskAPI.updateTask(task._id, taskData);
      onTaskUpdated(response.data);
      toast.success('Task updated successfully!');
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update task');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Task">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Title</label> {/* Label color updated */}
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="p-2 mt-1 block w-full rounded-md border-solid border-2 border-gray-700 bg-gray-800 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Description</label> {/* Label color updated */}
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows="3"
            className="p-2 mt-1 block w-full rounded-md border-solid border-2 border-gray-700 bg-gray-800 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter task description"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-600 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Update Task
          </button>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </Modal>

  );
};

export default EditTaskModal;