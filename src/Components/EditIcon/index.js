import React from 'react';
import { TodoIcon } from '../TodoIcon';

function EditIcon({onClick}){

    return (

        <TodoIcon 
            className="btn-edit" 
            type="edit" 
            onClick={onClick}
        />

    );

}

export { EditIcon };