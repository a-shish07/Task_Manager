import { createSlice } from '@reduxjs/toolkit';

// Helper functions to manage local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error('Failed to load tasks from local storage:', error);
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to local storage:', error);
  }
};

// Initial state with tasks loaded from local storage
const initialState = {
  tasks: loadFromLocalStorage(),
  filter: 'all', // State to manage the current filter (all, active, completed)
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
      saveToLocalStorage(state.tasks); // Persist tasks to local storage
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage(state.tasks); // Persist changes
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage(state.tasks); // Persist updated tasks
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Update the filter state
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
