import React from 'react';
import './TodoCounter.css';


function TodoCounter({totalTodos: total, completedTodos: completed}){

    return (
        <section className="todo-counter">
        
            <h2 className="title">Has completado <br/> <b>{completed}</b> de <b>{total}</b> TODOs</h2>

        </section>
    );

}

export { TodoCounter };
