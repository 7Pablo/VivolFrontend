// Toast.jsx
'use client'

import { useEffect } from "react";
import { CircleCheck } from 'lucide-react';

export default function Toast({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); 
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast">
            <CircleCheck size={20}/>
            {message}
        </div>
    );
}

