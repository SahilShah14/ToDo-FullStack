import axios from '../utils/axios';

export const taskAPI = {
  // Get all tasks
  getTasks: () => axios.get('/tasks'),
  
  // Get completed tasks
  getCompletedTasks: () => axios.get('/tasks/completed'),
  
  // Add new task
  addTask: (taskData) => axios.post('/tasks', taskData),
  
  // Update task
  updateTask: (taskId, taskData) => axios.put(`/tasks/${taskId}`, taskData),
  
  // Delete task
  deleteTask: (taskId) => axios.delete(`/tasks/${taskId}`),
  
  // Toggle task completion
  toggleComplete: (taskId) => axios.patch(`/tasks/${taskId}/toggle`)
};

export const authAPI = {
  login: (credentials) => axios.post('/auth/login', credentials),
  signup: (userData) => axios.post('/auth/signup', userData),
};