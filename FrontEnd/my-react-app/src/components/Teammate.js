import React from 'react';

function Teammate({ name, onRemove, onSelect }) {
    return (
        <div className="teammate-box">
            {name}
            <button onClick={() => onRemove(name)}>Remove</button>
            <button onClick={() => onSelect(name)}>Assign Task</button>
        </div>
    );
}

export default Teammate;
