import './App.css';
import { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task) {
      alert('Please enter a task');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  }

  const toggleCompletion = (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      setTasks([...tasks]); //spread
    }
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className='task-item'>
            <p onClick={() => toggleCompletion(task.id)} className={task.completed ? "line-through" : ""}> {task.name} </p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;