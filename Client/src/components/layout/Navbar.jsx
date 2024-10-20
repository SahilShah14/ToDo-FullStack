import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, user } = useAuth();

  return (
    <nav className="bg-gray-800 shadow-lg"> {/* Updated to dark background */}
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-purple-500">MadTasker</span> {/* Text color updated */}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-purple-300">Welcome, {user?.name}</span> {/* Text color updated */}
          <button
            onClick={logout}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;