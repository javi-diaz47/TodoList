import React from 'react';
import { withStorageListener } from './withStorageListener';
import './index.css';

function StorageChangeAlert({show, toggleShow}){

    const onSynchronise = () => {
        toggleShow();
        // synchronise(true);
    }

    if(show){
        return (
            <section className="change-alert-section">
                <div className="change-alert">
                    <h2>Ocurrieron cambios en los TODOs</h2>
                    <button onClick={onSynchronise}>Actualizar informacion</button>
                </div>
           </section>
        );
    }else{
        return null;
    }

}

const StorageChangeAlertWithListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlertWithListener };