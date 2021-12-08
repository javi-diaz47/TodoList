import React from 'react';
import { useState } from 'react';

function useStorageListener(synchronise){

    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', () => setStorageChange(true));

    const toggleShow = () => {
        synchronise();
        setStorageChange(false);
    }

    return{
        show: storageChange,
        toggleShow
    }




}

export { useStorageListener };