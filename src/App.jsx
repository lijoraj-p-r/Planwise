
import TaskForm from './components/Taskform'
import TaskList from './components/Tasklist';
import Progresstracker from './components/Progresstracker'
import './App.css';


import { useEffect, useState } from 'react';
export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

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