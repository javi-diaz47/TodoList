import React from 'react';
import './TodoList.css';

function TodoList(props){
   
    const renderFunc = props.children || props.render;

    return (
        <section className="todo-list">

            {props.error && props.onError}

            {props.loading && props.onLoading}

            {
                (!props.loading && !props.todos.length) &&
                props.onEmpty
            }

            {
                (!props.loading && props.todos && !props.searchedTodos.length) &&
                props.onEmptySearchTodos(props.searchText)
            }

            {
                !props.loading && props.todos.length &&
                <ul>
                    {

                        props.searchedTodos.map(renderFunc)

                    }

                </ul>

            }


        </section>        
    );

}

export { TodoList };

