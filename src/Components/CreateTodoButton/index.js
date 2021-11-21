import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({todos, setTodos}){

    const onClickBtn = () => {
        const newTodos = [...todos];
        newTodos.push({title: 'title', text: 'Do the laundry', completed: true})
        setTodos(newTodos);
        alert('Se agrego un nuevo todo');
    }

    return (

        <>
            <button 
                className="btn-create-todo"
                onClick={onClickBtn}
            >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" width="4" height="22" rx="2" fill="white"/>
                    <rect y="13" width="4" height="22" rx="2" transform="rotate(-90 0 13)" fill="white"/>
                </svg>
            </button>
        </>

    );

}

export { CreateTodoButton };