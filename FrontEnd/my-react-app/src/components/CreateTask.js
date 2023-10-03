import React, { useState } from 'react';
import Teammate from './Teammate';

function CreateTask({ onTaskCreate }) {
    const [taskName, setTaskName] = useState('');
    const [teammates, setTeammates] = useState([]);
    const [teammateName, setTeammateName] = useState('');

    const handleAddTeammate = (name) => {
        setTeammates([...teammates, name]);
        setTeammateName('');  // Clear the input after adding
    };

    const handleRemoveTeammate = (name) => {
        setTeammates(teammates.filter(teammate => teammate !== name));
    };

    const handleTeammateSelect = (selectedName) => {
        setTaskName(selectedName);
    };

    const handleCreateTask = () => {
        const newTask = {
            id: Date.now(),
            name: taskName,
            teammates: teammates
        };
        onTaskCreate(newTask);
        setTaskName('');
        setTeammates([]);
    };

    return (
        <div>
            <h2>Create Task</h2>
            
            {/* Input for Task Name */}
            <input 
                type="text" 
                placeholder="Task Name"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
            />

            {/* Input for Teammate Name */}
            <input 
                type="text" 
                placeholder="Teammate Name"
                value={teammateName}
                onChange={e => setTeammateName(e.target.value)}
            />
            <button onClick={() => handleAddTeammate(teammateName)}>Add Teammate</button>

            {/* List of Teammates */}
            <div>
                {teammates.map(name => (
                    <Teammate 
                        key={name} 
                        name={name} 
                        onRemove={handleRemoveTeammate}
                        onSelect={handleTeammateSelect}
                    />
                ))}
            </div>

            {/* Create Task Button */}
            <button onClick={handleCreateTask} disabled={!teammates.length}>Create Task</button>
        </div>
    );
}

export default CreateTask;
