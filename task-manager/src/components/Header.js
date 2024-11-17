import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-blue-500 p-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center mb-4 md:mb-0">
        <img src="https://img.icons8.com/cute-clipart/64/overtime.png" alt="Logo" className="h-8 w-8 mr-3" />
        <h1 className="text-white text-lg font-bold">Task Manager</h1>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-2 md:space-x-4 mb-4 md:mb-0">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className="text-white font-medium hover:text-gray-300"
        >
          All Tasks
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className="text-white font-medium hover:text-gray-300"
        >
          Completed
        </button>
        <button
          onClick={() => dispatch(setFilter('incomplete'))}
          className="text-white font-medium hover:text-gray-300"
        >
          Incomplete
        </button>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-3">
        <span className="text-white font-medium">Hi, Ashish Dubey</span>
        <img
          src="https://img.icons8.com/color/48/user.png"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
