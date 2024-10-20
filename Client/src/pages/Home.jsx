import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../components/layout/Navbar';
import TaskList from '../components/tasks/TaskList';
import AddTaskModal from '../components/tasks/AddTaskModal';
import EditTaskModal from '../components/tasks/EditTaskModal';
import CompletedTasksModal from '../components/tasks/CompletedTasksModal';
import DeleteConfirmationModal from '../components/tasks/DeleteConfirmationModal';
import LoadingSpinner from '../components/layout/LoadingSpinner'; // Global Loading Component
import { taskAPI } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(false); // Global loading state
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setGlobalLoading(true); // Show loading spinner
      const response = await taskAPI.getTasks();
      setTasks(response.data);
    } catch (error) {
      toast.error('Failed to fetch tasks');
    } finally {
      setGlobalLoading(false); // Hide loading spinner
    }
  };

  const handleAddTask = async (newTask) => {
    setTasks([...tasks, newTask]);
    setIsAddModalOpen(false);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = async (updatedTask) => {
    setGlobalLoading(true); // Show loading spinner
    try {
      setTasks(tasks.map(task =>
        task._id === updatedTask._id ? updatedTask : task
      ));
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    } finally {
      setIsEditModalOpen(false);
      setSelectedTask(null);
      setGlobalLoading(false); // Hide loading spinner
    }
  };

  const handleDeleteTask = (taskId) => {
    setTaskToDelete(taskId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteTask = async () => {
    setGlobalLoading(true); // Show loading spinner
    try {
      await taskAPI.deleteTask(taskToDelete);
      setTasks(tasks.filter(task => task._id !== taskToDelete));
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Failed to delete task');
    } finally {
      setIsDeleteModalOpen(false);
      setTaskToDelete(null);
      setGlobalLoading(false); // Hide loading spinner
    }
  };

  const handleToggleComplete = async (taskId) => {
    setGlobalLoading(true); // Show loading spinner
    try {
      await taskAPI.toggleComplete(taskId);
      await fetchTasks(); // Refresh the task list
      toast.success('Task status updated');
    } catch (error) {
      toast.error('Failed to update task status');
    } finally {
      setGlobalLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-purple-200">My Tasks</h1>
            <div className="space-x-4">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Task
              </button>
              <button
                onClick={() => setIsCompletedModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Completed Tasks
              </button>
            </div>
          </div>

            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />

        </div>

        <AddTaskModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onTaskAdded={handleAddTask}
        />

        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedTask(null);
          }}
          task={selectedTask}
          onTaskUpdated={handleUpdateTask}
        />

        <CompletedTasksModal
          isOpen={isCompletedModalOpen}
          onClose={() => setIsCompletedModalOpen(false)}
          onTaskUpdated={fetchTasks}
        />

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDeleteTask}
        />

        {globalLoading && <LoadingSpinner />} {/* Show global loading spinner */}
      </main>
    </div>
  );
};

export default Home;
