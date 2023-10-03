import React from 'react';

function Task({ task }) {
  return (
    <div>
      {task.name} - Assigned to: {task.teammates.join(', ')}
    </div>
  );
}

export default Task;
