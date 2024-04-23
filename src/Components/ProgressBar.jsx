import React from 'react';

const ProgressBar = ({ skill, percent }) => {
    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${percent}%` }}>
                {skill}
            </div>
        </div>
    );
};

export default ProgressBar;