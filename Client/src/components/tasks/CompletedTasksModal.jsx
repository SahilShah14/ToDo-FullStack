import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Modal from '../layout/Modal';
import { taskAPI } from '../../services/api';

const CompletedTasksModal = ({ isOpen, onClose, onTaskUpdated }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchCompletedTasks();
    }
  }, [isOpen]);

  const fetchCompletedTasks = async () => {
    try {
      const response = await taskAPI.getCompletedTasks();
      setCompletedTasks(response.data);
    } catch (error) {
      toast.error('Failed to fetch completed tasks');
    }
  };

  const handleUndoComplete = async (taskId) => {
    try {
      await taskAPI.toggleComplete(taskId);
      onTaskUpdated();
      fetchCompletedTasks();
      toast.success('Task status updated');
    } catch (error) {
      toast.error('Failed to update task status');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Completed Tasks">
      <div className="max-h-96 overflow-y-auto">
        {completedTasks.length === 0 ? (
          <p className="text-center text-gray-400">No completed tasks</p>
        ) : (
          <ul className="space-y-2">
            {completedTasks.map((task) => (
              <li
                key={task._id}
                className="p-3 border-solid border-2 border-gray-700 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-white">{task.title}</h4>
                    <p className="text-sm text-gray-400">{task.description}</p>
                  </div>
                  <button
                    onClick={() => handleUndoComplete(task._id)}
                    className="text-sm text-purple-400 hover:text-purple-600"
                  >
                    Undo Complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-600 rounded-md hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </Modal>

  );
};

export default CompletedTasksModal;