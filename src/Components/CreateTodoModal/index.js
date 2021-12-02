import React from 'react';
import { TodoForm } from '../TodoForm';
import './CreateTodoModal.css';

function CreateTodoModal({creating, setCreating, addTodo}){

    const onCloseModal = () => {
       setCreating(false);
    }


    return (
        <div className="modal-wrapper" creating={`${creating}`}>

            <section className="modal">

                <TodoForm
                    action={addTodo}
                    onClose={onCloseModal}
                    submitInputValue="Agregar"
                />

            </section> 

        </div>

    );

}

export { CreateTodoModal };