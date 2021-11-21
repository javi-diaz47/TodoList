import React from 'react';
import { useState } from 'react';

import { AppUI } from './AppUI';

// const defaultTodos = [
//   {title: 'Card', text: 'Practicar React', completed: false},
//   {title: 'Card', text: 'Leer en ingles', completed: false},
//   {title: 'Card', text: 'Comprar arroz', completed: true}

// ];

function App() {

  let localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = useState(parsedTodos);
  
  const [searchValue, setSearchValue] = useState('');


  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase()
                        .includes(searchValue.toLowerCase())
                        );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const onComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
    saveTodos(newTodos);
  }

  const onRemove = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  const onEdit = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    saveTodos(newTodos);
    alert(`The todo ${todoIndex} were edited`);
  
  }

  return (
    <AppUI
      todos={todos}
      setTodos={setTodos}
      
      searchValue={searchValue}
      setSearchValue={setSearchValue}

      totalTodos={totalTodos}
      completedTodos={completedTodos}

      searchedTodos={searchedTodos}

      onRemove={onRemove}
      onEdit={onEdit}
      onComplete={onComplete}

   />
  );
}

export default App;
