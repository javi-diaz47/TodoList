import React from 'react';
import { TodoForm } from '../TodoForm';
import './CreateTodoModal.css';

function EditTodoModal({editing, setEditing, todos, saveTodos, currentTodo}){


    const onCloseModal = () => {
       setEditing(false);
    }

    const editTodo = (title, text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === currentTodo.text);
        
        newTodos[todoIndex].title = title;
        newTodos[todoIndex].text = text;

        saveTodos(newTodos);

        setEditing(false);

    }

    return (

        <div className="modal-wrapper"
            creating={`${editing}`}
        >

            <section className="modal">

                <TodoForm
                    action={editTodo}
                    onClose={onCloseModal}
                    submitInputValue="Editar"
                    titlePlaceholder={currentTodo.title}
                    textPlaceholder={currentTodo.text}
                />

            </section> 

        </div>

    );

}

export { EditTodoModal };