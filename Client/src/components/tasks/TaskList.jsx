import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  const incompleteTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-4">
      {incompleteTasks.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          No tasks yet. Add some tasks to get started!
        </div>
      ) : (
        incompleteTasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>

  );
};

export default TaskList;