import React from 'react';
import './LoadingTodo.css';

function LoadingTodo(){

    return (

        <div className="todo-skeleton">
            <div className="todo-skeleton-title"></div>
            <div className="todo-skeleton-text"></div>
            <div className="todo-skeleton-btns">
                <span className="todo-skeleton-completed-btn"></span>
                <span className="todo-skeleton-delete-btn"></span>
            </div>
      </div>

    );

}

export { LoadingTodo };