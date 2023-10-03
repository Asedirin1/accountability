import React, { useState } from 'react';
import TodoList from './components/TodoList';
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const handleTaskCreate = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    return (
        <div className="App">
            <h1>React Todo App</h1>
            <CreateTask onTaskCreate={handleTaskCreate} />
            <TodoList tasks={tasks} />
        </div>
    );
}

export default App;