import React from 'react';

const Responsive = ({ children }) => {
    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            {children}
        </div>
    );
};

export default Responsive;
