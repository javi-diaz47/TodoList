import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoItem } from './Components/TodoItem';

const todos = [
  {title: 'Card', text: 'Practicar React', completed: false},
  {title: 'Card', text: 'Leer en ingles', completed: false},
  {title: 'Card', text: 'Comprar arroz', completed: true}

];

function App() {
  return (
    <React.Fragment>

      <TodoCounter/>
      
      <TodoSearch/>
     
      <TodoList>
        {todos.map(todo => 
           <TodoItem key={todo.text}
              title={todo.title}
              text={todo.text}
              completed={todo.completed}
            />
        )}
      </TodoList>
      
      <CreateTodoButton/> 
    </React.Fragment>

  );
}

export default App;
