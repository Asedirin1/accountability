import React, { useState } from 'react';
import Task from './Task';

function TodoList({ tasks }) {
    return (
        <div>
            <h2>Todo List</h2>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    );
}

export default TodoList;