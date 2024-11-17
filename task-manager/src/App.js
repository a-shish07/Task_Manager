import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="mt-10">
        <AddTask />
        < TaskList />
      </div>
    </div>
  );
};

export default App;
