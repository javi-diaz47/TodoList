import React from 'react';
import { TodoIcon } from '../TodoIcon';

function RemoveIcon({onClick}){

    return (

        <TodoIcon 
            className="btn-circle" 
            type="trash" 
            onClick={onClick}
        />

    );

}

export { RemoveIcon };