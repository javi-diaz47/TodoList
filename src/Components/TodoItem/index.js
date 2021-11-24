import React from 'react';
import './TodoItem.css';
import { RemoveIcon } from '../RemoveIcon';
import { EditIcon } from '../EditIcon';
import { CompleteIcon } from '../CompleteIcon';

function TodoItem(props){

    const {title, text, completed} = props;

    return (
        <>
            <li className="todo-item" completed={`${completed}`}>
             
                <h2>{title}</h2>

                <EditIcon 
                    onClick={() => props.onEditModal(title, text)}
                />

                <p>
                    {text}
                </p>

                <CompleteIcon 
                    completed={completed}
                    onClick={() => props.onComplete(text)}        
                /> 

                <RemoveIcon 
                    onClick={() => props.onRemove(text)}
                />
  
            </li> 
        </>

    );

}

export { TodoItem };