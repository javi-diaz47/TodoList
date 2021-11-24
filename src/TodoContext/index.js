import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useLocaleStorage } from '../Hooks/useLocaleStorage';

const TodoContext = createContext();


function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        error,
        loading
    } = useLocaleStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = useState('');

    const [creating, setCreating] = useState(false);
    
    const [editing, setEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState('');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const searchedTodos = todos.filter(todo => todo.text.toLowerCase()
                            .includes(searchValue.toLowerCase())
                            );

    const onComplete = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
        saveTodos(newTodos);
    }

    const addTodo = (title, text) => {
        const newTodos = [...todos];
        const newTodo = {
            title: title ,
            text: text,
            completed: false
        }
        newTodos.push(newTodo);
        saveTodos(newTodos);
    }

    const onRemove = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    const onEditModal = (title, text) => {
        const newCurrentTodo = {title: title, text: text}
        setCurrentTodo(newCurrentTodo);
        setEditing(true);
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                saveTodos,
                error,
                loading,
                
                creating,
                setCreating,
                addTodo,

                editing,
                setEditing,
                currentTodo,
                
                searchValue,
                setSearchValue,

                totalTodos,
                completedTodos,
                searchedTodos,

                onRemove,
                onEditModal,
                onComplete,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };