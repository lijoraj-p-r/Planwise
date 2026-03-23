export default function TaskList({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div className='task-list'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}  className= {task.completed ? 'completed' : '' }>
            <div className="task-info">
              <span>{task.text}</span>
              <small>{task.priority} • {task.category}</small>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? '↩️ Undo' : '✅ Done'}
              </button>
              <button onClick={() => deleteTask(index)}>
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}