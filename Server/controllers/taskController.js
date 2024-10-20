const Task = require('../models/Task');
const errorResponse = require('../utils/errorResponse');

// Get all tasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    next(errorResponse(400, 'Failed to get tasks', error));
  }
};

// Get completed tasks
exports.getCompletedTasks = async (req, res, next) => {
  try {
    const completedTasks = await Task.find({ user: req.user.id, completed: true });
    res.status(200).json(completedTasks);
  } catch (error) {
    next(errorResponse(400, 'Failed to get completed tasks', error));
  }
};

// Create a task
exports.createTask = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const task = new Task({ title, description, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(errorResponse(400, 'Failed to create task', error));
  }
};

// Update a task
exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true, runValidators: true }
    );
    if (!task) return next(errorResponse(404, 'Task not found'));
    res.status(200).json(task);
  } catch (error) {
    next(errorResponse(400, 'Failed to update task', error));
  }
};

// Delete a task
exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return next(errorResponse(404, 'Task not found'));
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    next(errorResponse(400, 'Failed to delete task', error));
  }
};

// Toggle task completion
exports.toggleTaskCompletion = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) return next(errorResponse(404, 'Task not found'));

    // Toggle the completed status
    task.completed = !task.completed;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    next(errorResponse(400, 'Failed to toggle task completion', error));
  }
};
