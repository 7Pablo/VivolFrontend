// Button.jsx (Client component)
'use client';

export default function Button({
    type = "primary",
    onClick,
    children,
}) {
    
    return (
        <button 
            className={`button--${type}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}