import React from 'react';

import { CreateTodoModal } from '../CreateTodoModal';
import { BlobDecoration } from '../BlobDecoration';
import { Modal } from '../Modal';
import { LoadingTodo } from '../LoadingTodo';
import { TodoHeader } from '../TodoHeader';
import { EditTodoModal } from '../EditTodoModal';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useTodos } from '../../Hooks/useTodos';



function App() {
  const {
        error,
        loading,
        todos,
        searchedTodos, 
        onComplete, 
        onRemove,
        onEditModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        creating,
        setCreating,
        addTodo,
        editing,
        setEditing,
        saveTodos,
        currentTodo
    } = useTodos();

  return (
    
    <React.Fragment>

        <TodoHeader>

            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

        </TodoHeader>

        <TodoList>

            {error && <p>Hubo un error :( <br/> recarga la pagina por favor</p>}

            {
              loading && 
                new Array(4).fill().map((v, i) => (
                    <LoadingTodo key={i}/>
                ))
            }

            {(!loading && todos.length === 0)  && <EmptyTodos/>}

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

    
        <CreateTodoButton 
            setCreating={setCreating}
        />

        <BlobDecoration />
        
        <Modal>

            <CreateTodoModal
                creating={creating}
                setCreating={setCreating}
                addTodo={addTodo}
            /> 

        </Modal>
            
        <EditTodoModal
            editing={editing}
            setEditing={setEditing}
            todos={todos}
            saveTodos={saveTodos}
            currentTodo={currentTodo}
        />
        
    </React.Fragment>
    
  );

}

export default App;
