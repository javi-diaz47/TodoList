import React from 'react';
import { TodoIcon } from '../TodoIcon';

function CompleteIcon({onClick, completed}){

    return (

        <TodoIcon 
            className="btn-completed" 
            type="completed" 
            completed={completed}
            onClick={onClick}
        />

    );

}

export { CompleteIcon };