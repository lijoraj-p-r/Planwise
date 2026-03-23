
import TaskForm from './components/Taskform'
import TaskList from './components/Tasklist';
import Progresstracker from './components/Progresstracker'
import './App.css';


import { useEffect, useState } from 'react';
export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index)=>{
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index)=>{
    setTasks(tasks.filter((_, i) => i !=index))
   }

   const clearTasks = () => {
    setTasks([]);
   }

  return (
    <div className='App'>
      <header>
        <div className="header-top">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <h1 className='title'>Planwise</h1>
        <p className='tagline'>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <Progresstracker tasks = {tasks}/>

      {tasks.length > 0 && (<button onClick={clearTasks} className='clear-btn'>Clear All Task</button>)}
    </div>

  )
}