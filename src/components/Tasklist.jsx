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
              <button 
                onClick={() => toggleComplete(index)}
                className="btn-complete"
              >
                {task.completed ? '↩️ Undo' : '✅ Done'}
              </button>
              <button 
                onClick={() => deleteTask(index)}
                className="btn-delete"
                title="Delete Task"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}