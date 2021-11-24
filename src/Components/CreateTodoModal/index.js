import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoForm } from '../TodoForm';
import './CreateTodoModal.css';

function CreateTodoModal(){

    const {
        creating,
        setCreating,
        addTodo
    } = useContext(TodoContext);

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