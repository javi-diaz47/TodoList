import React from 'react';
import { useState } from 'react';

function withStorageListener(WrapperComponent){

    return function WrapperComponentWithStorageAlert(props){

        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', () => setStorageChange(true));

        const toggleShow = () => {
            props.synchronise();
            setStorageChange(false);
        }

        return(

            <WrapperComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />

        );


    }

}

export { withStorageListener };