import React from 'react';
import { useStorageListener} from './useStorageListener';
import './index.css';

function StorageChangeAlert({synchronise}){

    const {show, toggleShow} = useStorageListener(synchronise);

    const onSynchronise = () => {
        toggleShow();
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
export { StorageChangeAlert };