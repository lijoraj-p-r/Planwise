import { useState } from "react";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('General');
  const [error, setError] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') {
      setError('Please enter a task !');
      return;
    }

    
    addTask({ text: task, priority, category, completed: false });

    
    setTask('');
    setPriority("medium");
    setCategory("General");
    setError('');
  }

  return (
    <form onSubmit={handlesubmit} id='task-form'> 
      <div id="inp">
        <input
          type='text'
          placeholder='Enter the task'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            if (error) setError(''); 
          }}
        />
        <button type="submit">Add task</button>
      </div>

      
      {error && (
        <div id="error">
          {error}
        </div>
      )}

      <div id='btns'>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="low">low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">work</option>
          <option value="personal">personal</option>
        </select>
      </div>
    </form>
  );
}
