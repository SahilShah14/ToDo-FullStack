const express = require('express');
const { getTasks, createTask, updateTask, deleteTask, getCompletedTasks, toggleTaskCompletion } = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .get(protect, getTasks)  // Get all tasks
  .post(protect, createTask);  // Create a task

router.route('/:id')
  .put(protect, updateTask)  // Update a task
  .delete(protect, deleteTask)  // Delete a task

// Route for completed tasks
router.get('/completed', protect, getCompletedTasks);  // Get completed tasks

// Route for toggling task completion
router.patch('/:id/toggle', protect, toggleTaskCompletion);  // Toggle task completion

module.exports = router;
