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
import { StorageChangeAlertWithListener } from '../StorageChangeAlert';

const TodoLoading = () => (
     <ul>
        {
            new Array(4).fill().map((v, i) => (
                <LoadingTodo key={i}/>
            )) 
        }
     </ul>
)

const TodoError = () => (
    <p>
        Hubo un error :( <br/>
        recarga la pagina por favor
    </p>
)


const EmptySearchTodos = ({searchText}) => (
    <p>
        No existe el todo {searchText}
    </p>
)


function App() {
  const {
        error,
        loading,
        todos,
        searchedTodos, 
        synchroniseTodos,
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

        <TodoHeader loading={loading}>

            <TodoCounter 
                // loading={loading}
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            
            <TodoSearch 
                // loading={loading}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

        </TodoHeader>

        <TodoList
            error={error}
            loading={loading}
            todos={todos}
            searchedTodos={searchedTodos}
            searchText={searchValue}
            onError={<TodoError/>}
            onLoading={<TodoLoading/>}
            onEmpty={<EmptyTodos/>}
            onEmptySearchTodos={(searchText) => <EmptySearchTodos searchText={searchText} />}
            // render={todo => (
            //     <TodoItem 
            //         key={todo.text}
            //         title={todo.title}
            //         text={todo.text}
            //         completed={todo.completed}
            //         onComplete={onComplete}
            //         onRemove={onRemove}
            //         onEditModal={onEditModal}
            //     />
            // )}
        >
            {
                todo => (
                    <TodoItem 
                        key={todo.text}
                        title={todo.title}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={onComplete}
                        onRemove={onRemove}
                        onEditModal={onEditModal}
                    />
                )
            }

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


        <StorageChangeAlertWithListener synchronise={synchroniseTodos}/>
        
    </React.Fragment>
    
  );

}

export default App;
