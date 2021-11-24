import React, { useContext } from 'react';

import {ReactComponent as TrashIcon } from './icons/trash.svg';
import {ReactComponent as EditIcon} from './icons/edit.svg';
import {ReactComponent as CreateIcon} from './icons/plus.svg';


function TodoIcon({className, type, onClick, completed}){

    const iconTypes = {
        "trash": (
            <TrashIcon/>
        ),
        "edit": (
            <EditIcon/>
        ),
        "create": (
            <CreateIcon/>
        ),
        "completed": (
            completed ? 'Completado' : 'completar'
        ),
    };

    return (

        <button 
            className={className} 
            onClick={onClick}   
        >
            {
                iconTypes[type]
            }
        </button>

    );

}

export { TodoIcon };