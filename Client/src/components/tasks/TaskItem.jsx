import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg p-4 mb-2 bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => {
              e.stopPropagation();
              onToggleComplete(task._id);
            }}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded"
          />
          <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
            {task.title}
          </h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(task);
            }}
           className="text-blue-400 hover:text-blue-500"
          >
          <FaEdit className="text-xl" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task._id);
            }}
             className="text-red-500 hover:text-red-600"
          >
            <FaTrash className="text-l ml-4 mr-5" />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-2 pl-7">
         <p className="text-gray-400 text-sm">{task.description || 'No description provided'}</p>
        </div>
      )}
    </div>
  );
};

export default TaskItem;