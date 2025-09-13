import React from 'react';

function TabButton({ onClick, active, children, colorClass }) {
    const activeClass = active ? '' : 'opacity-75'; // Dim inactive tabs slightly
    return (
        <button
            onClick={onClick}
            className={`${colorClass} ${activeClass} text-white px-4 py-2 rounded transition-all duration-200`}
        >
            {children}
        </button>
    );
}

export default TabButton;