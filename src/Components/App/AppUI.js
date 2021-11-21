import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';

function AppUI({
    todos,
    setTodos,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    searchedTodos,
    onRemove,
    onEdit,
    onComplete,
}){

    return (

        <React.Fragment>

        <TodoCounter
            total={totalTodos}
            completed={completedTodos}
        />
        
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        
        <TodoList>
            {searchedTodos.map(todo => 
                <TodoItem 
                    key={todo.text}
                    title={todo.title}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={onComplete}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            )}
        </TodoList>
        
        <CreateTodoButton
            todos={todos}
            setTodos={setTodos}
        
        /> 

        <svg className="blob" id="blob-blue" width="136" height="167" viewBox="0 0 136 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M122.2 16.8194C130.6 29.7194 126.3 51.7194 128.1 71.3194C129.9 90.9194 137.7 108.019 134.8 124.519C131.9 141.019 118.3 156.819 101.2 163.019C84.1 169.219 63.5 165.819 47.2 157.019C31 148.219 19.2 134.119 11.4 118.519C3.6 103.019 0 86.1194 0 67.2194C0.1 48.2194 3.8 27.1194 16.4 15.0194C29 2.81939 50.5 -0.280611 71.7 0.0193888C92.9 0.219389 113.8 3.91938 122.2 16.8194Z" fill="#80BEF4"/>
        </svg>

        <svg className="blob" id="blob-yellow" width="130" height="149" viewBox="0 0 130 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.5 22.5C118.3 28.7 125.6 39.3 128.5 50.7C131.3 62.1 129.7 74.3 124.9 84.5C120.2 94.7 112.3 102.8 103.3 116.6C94.3 130.3 84.2 149.6 74.7 148.6C65.3 147.6 56.6 126.2 47.4 112.6C38.1 98.9 28.3 93 19 82.6C9.7 72.2 1 57.3 0.7 41.1C0.4 25 8.5 7.49999 22.1 2.49999C35.8 -2.60001 54.9 4.89999 70.6 9.49999C86.3 14.2 98.6 16.2 108.5 22.5Z" fill="#F6D58A"/>
        </svg>

        <svg className="blob" id="blob-orange" width="123" height="157" viewBox="0 0 123 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.4 9C114.4 18.5 125 33.1 122.2 46.9C119.4 60.6 103 73.4 94.7 85.8C86.5 98.1 86.3 110 80.5 122.5C74.7 135 63.4 148 47.9 153.7C32.5 159.3 13 157.4 5.1 145.6C-2.8 133.8 1 112.1 5.2 96.8C9.3 81.6 13.8 72.8 17.2 64.1C20.6 55.4 22.9 46.8 28.5 34.6C34.1 22.4 43.1 6.6 56.2 0.899996C69.2 -4.8 86.5 -0.500005 100.4 9Z" fill="#F79F77"/>
        </svg>





        </React.Fragment>

    );

}

export { AppUI };