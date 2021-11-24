import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoModal } from '../CreateTodoModal';

import { TodoContext } from '../../TodoContext';
import { useContext } from 'react';
import { BlobDecoration } from '../BlobDecoration';
import { Modal } from '../Modal';
import { LoadingTodo } from '../LoadingTodo';
import { TodoIcon } from '../TodoIcon';
import { EditTodoModal } from '../EditTodoModal';

function AppUI(){

    const {
        error,
        loading,
        todos,
        searchedTodos, 
        onComplete, 
        onRemove,
        onEditModal,
        creating,
    } = useContext(TodoContext);

    const l = new Array(4).fill(1)

    return (

        <React.Fragment>

            <TodoCounter />
            
            <TodoSearch />

            <TodoList>

                {error && <p>Hubo un error :( <br/> recarga la pagina por favor</p>}
                {loading && 
                    <>
                        {l.map((v, i) => (
                            <LoadingTodo key={i}/>
                        ))}
                    </>
                }

                {(!loading && todos.length===0)  && <EmptyTodos/>}
                {searchedTodos.map(todo => 
                    <TodoItem 
                        key={todo.text}
                        title={todo.title}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={onComplete}
                        onRemove={onRemove}
                        onEditModal={onEditModal}
                    />
                )}

            </TodoList>

        
            <CreateTodoButton />


            <BlobDecoration />
            
            <Modal>

                <CreateTodoModal /> 


            </Modal>
                

                <EditTodoModal/>
           
        </React.Fragment>

    );

}

export { AppUI };