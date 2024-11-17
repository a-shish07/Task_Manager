import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-4 md:mt-6"> 
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
